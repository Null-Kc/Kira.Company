import Image from 'next/image'
import { motion } from 'framer-motion';

import miniPage from '../../../public/imagens/miniPage.png';
import code from '../../../public/imagens/code.png';
import wheel from '../../../public/imagens/wheel.png';
import dev from '../../../public/imagens/dev.png';


// O componente AnimationHome Renderiza a animacao presente na pagina Home.
const AnimationHome = () => {
  return (
    <div className='h-[320px] w-[288px]'>
      <div className="h-full w-full relative justify-center flex flex-row">
        <div className='flex absolute top-[25%] left-0 justify-center'>
          {/* Animação de rotação */}
          <motion.div animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 10, repeat: Infinity }}>
            <Image className='w-[63px]' src={wheel} alt=""/>
          </motion.div>
        </div>
        <div className='flex absolute left-0 top-[10%] justify-center'>
          {/* Animação de movimento horizontal */}
          <motion.div animate={{ x:[0, 50, 0]}} transition={{ ease: "linear", duration: 4, repeat: Infinity }}>
            <Image className='w-[53px] h-[33px]'  src={code} alt=""/>
          </motion.div>
        </div>
        <div className='flex absolute top-[10%] justify-center'>
          {/* Imagem fixa */}
          <Image className='w-[200px] h-[250px]' src={dev} alt=""/>
        </div>
        <div className='flex absolute right-0 justify-center '>
          {/* Animação de movimento diagonal */}
          <motion.div initial={{ y: 0, x: 0 }} animate={{ y:[100, 20, 100], x:[15, 30, 15]}} transition={{ ease: "linear", duration: 5, repeat: Infinity }}>
            <Image className='w-[89px] h-[86px]'  src={miniPage} alt=""/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimationHome;
