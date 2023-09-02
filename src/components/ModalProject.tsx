import React from 'react';
import { motion } from 'framer-motion';


// O componente ModalProject renderiza o Modal que e ativado quando um projeto e selecionado no pagina de projetos
function ModalProject({ 
  projetoId, 
  onCloseModal,
  projetoTitulo,
  projetoSubtitulo,
  projetoDescricao,
  projetoLink,
  projetoLinkGithub,
  projetoStatus 
  }) {
    
  if (!projetoId) return null;

  return ( 
    <motion.div layoutId={projetoId} className="fixed inset-0 z-[100] flex justify-center items-center bg-black bg-opacity-50 max-[800px]:w-full">
      <div className="w-11/12 bg-white flex justify-center flex-row shadow-lg rounded-lg p-4 max-w-screen-lg max-[700px]:flex-col-reverse">
        <div className='w-[40%] items-center items-center max-[700px]:w-full'>
          <a rel="noopener noreferrer" href={projetoLink} target='_black'>
            <iframe className='w-full h-full' src={projetoLink}></iframe >
          </a>
        </div>
        <div className='w-[60%] max-[700px]:w-full min-[700px]:p-4'>
          <div className='w-full flex justify-between flex-row items-center'>
            <p className="text-[14px] font-medium mb-1">{projetoSubtitulo}</p>
            <button onClick={() => onCloseModal(null)} className="px-4 py-2 bg-[#ff0000] text-white rounded-lg hover:bg-opacity-80 transition-colors">&times;</button>
          </div>
          <p className="text-[20px] font-semibold">{projetoTitulo}</p>
          <div className='flex flex-col py-2'>
            <p>Descricao:</p>
            <p className="text-sm mb-1 mt-1 text-[14px]">{projetoDescricao}</p>
          </div>
          <div className='flex justify-between flex-row items-center max-[800px]:flex-wrap max-[700px]:p-2'>
            <div className='flex justify-normal'>
              <a rel="noopener noreferrer" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded' href={projetoLink} target='_black'>Ver Online</a>
            </div>
            <div className='flex justify-center max-[800px]:justify-normal'>
              <a rel="noopener noreferrer" className='bg-gray-500 text-[14px] hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded'  href={projetoLinkGithub} target='_black'>Ver no GitHub</a>
            </div>
            <div className='flex py-2 justify-end max-[800px]:justify-normal'>
              <p className='text-[14px]'>Status: {projetoStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ModalProject;