import React from 'react';
import { motion } from 'framer-motion';

//O componente CardAbout renderiza o card com o texto na pagina Sobre
function CardAbout({ item, variantsSobreNos }) {
  return (
    <motion.li className="w-2/4 max-[800px]:w-full" variants={variantsSobreNos}>
      <div className="w-full p-4">
        <h3 className="flex pb-5 text-[35px] text-[#ff0000] font-bold">
          {item.title}
        </h3>
        <p className="text-[20px] text-[#000000] dark:text-[#ffffff]">
          {item.texto}
        </p>
      </div>
    </motion.li>
  );
}

export default CardAbout;