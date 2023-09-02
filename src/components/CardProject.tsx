import React from 'react';
import { motion } from 'framer-motion';


//O componente CardProject renderiza o card com projeto de acordo com id
function CardProject({ item, setSelectedId }) {
  return (
    <motion.div key={item.id} layoutId={item.id} onClick={() => setSelectedId(item.id)} className="w-full h-[400px] shadow-lg rounded-lg cursor-pointer transition-transform transform hover:scale-105 bg-white">
      <div className='rounded-lg h-2/4'>
        <iframe title={item.title} scrolling="auto" width="560" height="315" className='w-full h-full rounded-lg' src={item.linkProjeto}></iframe >
      </div>
      <div className='py-4 h-2/4 flex text-center justify-center flex-col w-full'>
        <h5 className="text-[#461a1a]">{item.subtitle}</h5>
        <h2 className="text-[#ff0000] text-[30px] font-bold">{item.title}</h2>
      </div>
    </motion.div>
  );
}

export default CardProject;