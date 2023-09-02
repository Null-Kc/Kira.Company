import Image from 'next/image'
import logo from '../../../public/imagens/logoBall.png';

// O componente MenuDesktop renderiza o icone e o nome.
const Logo = () => {
  return (
    <div className='flex flex-row justify-between'>
      <Image className='bg-[#000000] dark:bg-white rounded-full' src={logo} alt="Logo da Kira.Company"/>
      <div className='flex flex-row justify-center items-center pl-4 font-bold text-[20px]'>
        <h1 className='text-[#0B0D39] dark:text-[#ffffff]'>Kira</h1>
        <h1 className='text-[#ff3535]'>.Company</h1>
      </div>
    </div>
  );
};

export default Logo;