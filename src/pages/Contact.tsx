import ContactForm from '../components/ContactForm';
import AnimationContact from '../components/Animations/AnimationContact';


// Renderiza a Pagina de contato
const Contact = () => {
  return (
    <div id='Contact' className='flex justify-center'>
      <div className='w-11/12 py-16 flex flex-row max-w-screen-lg justify-center items-center max-[800px]:flex-col'>
        <div className="w-2/4 flex justify-center items-center max-[800px]:w-[90%]">
          <AnimationContact />
        </div>
        <div className='w-2/4 flex justify-center max-[800px]:pt-14 max-[800px]:w-[90%]'>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact; 



