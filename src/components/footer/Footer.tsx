import SocialMedia from '../SocialMedia';
import NavigationFooter from './NavigationFooter'

// O componente Footer renderiza o footer
const Footer = () => {
  return (
    <div className='bg-[#ffffff] dark:bg-[#461a1a]'>
      <div className='w-11/12 max-w-screen-lg mx-auto py-10 rounded-t-[30px] shadow-[0_0_30px_0_rgba(255,0,0,0.3)] dark:shadow-[0_-10px_30px_0px_rgba(80,80,80,10)]'>
        <div className='flex flex-row justify-center items-center pb-4 font-bold text-[35px]'>
          <h1 className='text-[#0B0D39] dark:text-[#ffffff]'>Kira</h1>
          <h1 className='text-[#ff3535]'>.Company</h1>
        </div>
        <NavigationFooter />
        <div className='flex px-8 justify-center flex-wrap py-3.5'>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Footer;