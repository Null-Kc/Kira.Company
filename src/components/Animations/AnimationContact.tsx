import { motion } from "framer-motion";
import Image from 'next/image'

import Mail from '../../../public/imagens/email.png'
import Net from '../../../public/imagens/net.png'
import Mensagem from '../../../public/imagens/mensagem.png'
import Phone from '../../../public/imagens/phone.png'

// O componente AnimationContact Renderiza a animacao presente na pagina Contact.
const AnimationContact = () => {
  return (
   <div className='h-[288px] w-[288px] border-4 border-dashed border-[#461a1a] rounded-full dark:bg-white'>
      <div className="h-full w-full relative items-center justify-center flex">
        <div className='flex absolute justify-center z-[50]'>
          {/* Animação de semi-rotacao */}
          <motion.div initial={{ rotate: 0 }} animate={{ rotate:[0, -10, 0]}} transition={{ type: "linear", duration: 5, repeat: Infinity }} >
            <Image className='w-[220px] h-[160px]'  src={Mail} alt=""/>
          </motion.div>
        </div>
        <div className='flex absolute justify-center'>
          {/* Animação de movimento diagonal */}
          <motion.div animate={{ x:[0, 80, 0], y:[0,-150,0]}}  transition={{ ease: "easeOut", duration: 6, repeat: Infinity }}>
            <Image className='w-[74px] h-[74px]'  src={Net} alt=""/>
          </motion.div>
        </div>
        <div className='flex absolute justify-center'>
          {/* Animação de movimento vertical */}
          <motion.div animate={{ x:[0, 0, 0], y:[150, 0,150]}}  transition={{ ease: "easeIn", duration: 6, repeat: Infinity }}>
            <Image className='w-[74px] h-[74px]'  src={Mensagem} alt=""/>
          </motion.div>
        </div>
        <div className='flex absolute justify-center'>
           {/* Animação de movimento diagonal */}
          <motion.div animate={{ x:[-80, 0, -80], y:[-150,0,-150]}}  transition={{ ease: "linear", duration: 6, repeat: Infinity }}>
            <Image className='w-[74px] h-[74px]'  src={Phone} alt=""/>
          </motion.div>
        </div>
      </div>
   </div>
  );
};


export default AnimationContact;