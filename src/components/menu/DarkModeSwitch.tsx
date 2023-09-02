import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {RiMoonClearFill, RiSunFill} from 'react-icons/ri'


// O componente DarkModeSwitch cria o botao de darkmode e tambem ativa e desativa essa funcionalidade no site.
const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === 'true') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const handleDarkModeToggle = () => {
    const isDarkModeEnabled = !darkMode;
    setDarkMode(isDarkModeEnabled);

    localStorage.setItem('darkMode', isDarkModeEnabled.toString());

    if (isDarkModeEnabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div onClick={handleDarkModeToggle} className={`cursor-pointer w-16 h-10 flex items-center bg-[#ff0000] rounded-full p-1 dark:bg-[#ffffff] ${ darkMode ? 'justify-end' : 'justify-start'}`}>
        <motion.div layout className="bg-white w-8 h-8 rounded-full shadow-md dark:bg-[#461a1a]">
          <motion.div className='flex flex-row justify-center items-center p-1' whileTap={{rotate: 360}}>
              {darkMode ?  (<RiMoonClearFill className="h-6 w-6 text-[#ffffff]" />) : (<RiSunFill className="h-6 w-6 text-[#ff0000]" />) }
          </motion.div>
        </motion.div>
      </div>
    </label>
  );
};

export default DarkModeSwitch;