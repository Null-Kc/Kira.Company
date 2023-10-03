import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import DarkModeSwitch from './DarkModeSwitch';
import Logo from './Logo';
import SocialMedia from '../SocialMedia';
import NavigationMobile from './NavigationMobile';


// O componente Mobile renderiza o icone hambuguer e o menu que se aberto.
const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="flex flex-col text-3xl cursor-pointer" onClick={toggleMenu}>
        <div className={`w-9 h-1 bg-[#000000] my-1 rounded-lg transition-transform duration-300 transform origin-center dark:bg-white ${ isOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-9 h-1 bg-[#000000] my-1 rounded-lg transition-opacity duration-300 dark:bg-white ${ isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-9 h-1 bg-[#000000] my-1 rounded-lg transition-transform duration-300 transform origin-center dark:bg-white ${ isOpen ? 'transform -rotate-45 -translate-y-4 translate-x-0' : ''}`}></div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 25 }} exit={{ opacity: 0, x: 90 }} transition={{ duration: 0.5 }} style={{ zIndex: 0 }} className="absolute top-[6rem] shadow-[0_0_30px_0_rgba(255,0,0,0.3)] right-0 w-10/12 h-[580px] bg-white p-4 rounded-l-3xl dark:bg-[#391515] dark:shadow-[0_0_30px_0px_rgba(110,110,110,255)] max-[500px]:w-[110%] max-[600px]:h-[90vh]">
            <NavigationMobile />
            <div className='pt-10 flex justify-center'>
              <div className='flex flex-col justify-center w-full'>
                <h2 className='text-center text-[#000000] font-bold text-[15px] dark:text-[#ffffff] pb-5'>Redes sociais</h2>
                <SocialMedia />
              </div>
            </div>
            <div className='flex flex-row py-5'>
              <h4 className='text-center text-[#000000] font-bold text-[30px] dark:text-[#ffffff] pr-4 flex items-center'>DarkMode:</h4>
              <DarkModeSwitch  />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// O componente MenuMobile renderiza o menu mobile completo.
const MenuMobile = () => {
  return (
    <div className="flex justify-center relative z-[100]">
      <div className="w-11/12 fixed bg-white h-16 rounded-3xl flex justify-center items-center max-w-screen-lg dark:bg-[#461a1a] shadow-[0_0_30px_0_rgba(255,0,0,0.3)] dark:shadow-[0_0_30px_0px_rgba(110,110,110,255)]">
        <div className="w-11/12 flex flex-row justify-between items-center">
          <Logo />
          <Mobile />
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;