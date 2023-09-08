import { useState } from "react";
import emailjs from "emailjs-com";

// O componente ContactForm renderiza o formulario que aparece na pagina contato e tambem e reponsavel pelo envio do email atravez da Biblioteca email.js
export default function ContactForm() {
  const [isActiveEnviado, setIsActiveEnviado] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "",});

  // faz a verificacao e o envio atraves da lib do Email.js
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() && formData.email.trim() && formData.phone.trim()) {
      emailjs
        .sendForm( "", "", e.target, "")
        .then(
          (result) => {
            setIsActiveEnviado(!isActiveEnviado);
            console.log("Email enviado com sucesso!", result.text);
            setFormData({ name: "", email: "", phone: "",}); 
          },
          (error) => {
            console.error("Erro ao enviar o email:", error.text);
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const labelClass = "flex text-[20px] pb-2 text-black font-bold dark:text-[#ffffff] max-[800px]:text-center max-[410px]:text-[17px]";
  const inputClass = "flex appearance-none border-none outline-none border-b-[#E91E63] divide-x-[.2em] bg-[rgba(233,30,99,0.2)] dark:bg-[#4c3333] rounded p-[.4em] text-[#000000] dark:text-[#ffffff]";
  const buttonClass = `border-4 border-[#ff3535] w-full h-12 rounded-3xl hover:scale-105 ${isActiveEnviado ? 'bg-[#ff3535] hover:bg-opacity-80' : ''} mt-4 md:mt-0`;
  const buttonTextClass = isActiveEnviado ? 'text-[#ffffff] font-bold' : 'font-bold dark:text-[#ffffff]';

  return (
    <div className=" p-10 rounded-[30px] shadow-[0_0_30px_0_rgba(255,0,0,0.3)] w-[450px] dark:shadow-[0_0_30px_0px_rgba(80,80,80,10)]">
      <h2 className="flex  w-full text-[35px] pb-5 text-[#ff0000] font-bold dark:text-[#ffffff] max-[800px]:text-center text-[23px]">Digite seu contato_</h2>
      <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className={labelClass} htmlFor="name">Nome:</label>
            <input className={inputClass} type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="py-3 flex flex-col">
            <label className={labelClass} htmlFor="email">Email:</label>
            <input className={inputClass} type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className={labelClass} htmlFor="phone">Telefone:</label>
            <input className={inputClass} type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="w-2/4 float-right pt-8 max-[800px]:w-full">
            <button className={buttonClass} type="submit">
              <p className={buttonTextClass}>Enviar &gt;</p>
            </button>
          </div>
        </form>
    </div>
  );
}