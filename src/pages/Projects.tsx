import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ListadeProjetos } from '../components/data'
import CardProject from '../components/CardProject';
import ModalProject from '../components/ModalProject';


// Renderiza a Pagina de Projetos
export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = ListadeProjetos.find((item) => item.id === selectedId); // Cria a constante que contem os dados do projeto.

  return (
    <div className="flex justify-center flex-col">
      <div className='flex justify-center '>
        <div id='Projects' className='flex text-[35px] text-[#ff0000] font-bold py-4 flex justify-normal w-11/12 h-[120px] max-w-screen-lg'>
          Nossos Projetos_
        </div>
      </div>
      <div  className="flex justify-center">
        <div className="grid grid-cols-3 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1 gap-4 w-11/12 max-w-screen-lg">
          {ListadeProjetos.map((item) => (
            <CardProject key={item.id} item={item} setSelectedId={setSelectedId} />
          ))}
        </div>
        <AnimatePresence>
          {selectedId && (
            <ModalProject 
              projetoId={selectedProject.id} 
              projetoTitulo={selectedProject.title} 
              projetoSubtitulo={selectedProject.subtitle} 
              projetoDescricao={selectedProject.description} 
              projetoLink={selectedProject.linkProjeto} 
              projetoLinkGithub={selectedProject.linkGithub} 
              projetoStatus={selectedProject.status} 
              onCloseModal={setSelectedId}/>
          )}
        </AnimatePresence>
      </div>
      <div id="About" className='h-[100px] p-4 flex justify-center' />
    </div>
  );
}