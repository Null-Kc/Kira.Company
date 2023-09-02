import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import AnimationHome from '../components/Animations/AnimationHome';
import HomeButton from '../components/HomeButton';
import { HomeTexto } from '../components/data';


// Renderiza a Pagina Inicial
const Home = () => {
  const [isActivePortfolio, setIsActivePortfolio] = useState(false);
  const [isActiveContato, setIsActiveContato] = useState(false);
  const [Frase, setFrase] = useState('');
  const [Apresentacao, setApresentacao] = useState('');
  const [Descricao, setDescricao] = useState('');
  const router = useRouter();

  // Cria a animacao de digitacao que ocorre quando abre a pagina
  useEffect(() => {
    const typeText = async () => {
      for (let i = 0; i <= HomeTexto.Frase.length; i++) {
        setFrase(HomeTexto.Frase.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, HomeTexto.delay));
      }

      for (let i = 0; i <= HomeTexto.Apresentacao.length; i++) {
        const apresentacaoTexto = HomeTexto.Apresentacao.slice(0, i);
        // Substitua "soluções" por "<b>soluções</b>" para aplicar o negrito
        const apresentacaoComNegrito = apresentacaoTexto.replace(/soluções/g, "<span style='color: #ff3535'>soluções</span>");
        setApresentacao(apresentacaoComNegrito);
        await new Promise((resolve) => setTimeout(resolve, HomeTexto.delay));
      }

      for (let i = 0; i <= HomeTexto.Descricao.length; i++) {
        setDescricao(HomeTexto.Descricao.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, HomeTexto.delayDescricao));
      }

    };

    typeText();
  }, []);;

  // Verifica se o botao Ver Portifolio foi clicado
  const toggleClassNamePortifolio = () => {
    setIsActivePortfolio(!isActivePortfolio);
    router.push('#Projects');
  };

  // Verifica se o botao Entrar em Contato foi clicado
  const toggleClassNameContato = () => {
    setIsActiveContato(!isActiveContato)
    router.push('#Contact');
  };

  return (
    <div className='w-full flex justify-center bg-[#ffffff] dark:bg-[#461a1a]'>
      <div className='w-11/12 flex flex-row max-w-screen-lg justify-center items-center max-[800px]:flex-col'>
        <div className='w-2/4 flex flex-col justify-center max-[800px]:w-[70%] max-[730px]:w-[90%]'>
          <div className='flex flex-col justify-center'>
            <motion.div className="text-[20px] text-[#ff0000] font-bold dark:text-[#ffffff] max-[800px]:text-center max-[410px]:text-[17px]">
              {Frase}
            </motion.div>
            <motion.div className="text-[40px] font-bold text-black dark:text-[#ffffff] max-[800px]:text-center  max-[410px]:text-[34px]">
              <h1 dangerouslySetInnerHTML={{ __html: Apresentacao }} />
            </motion.div>
            <motion.div className="text-[20px] text-black dark:text-[#ffffff] max-[800px]:text-center max-[410px]:text-[17px]">
              {Descricao}
            </motion.div>
          </div>
          <div className='w-[400px] flex flex-row pt-8 pb-8 justify-between max-[730px]:flex-col max-[800px]:w-full'>
            <HomeButton toggleClassName={toggleClassNamePortifolio} isActive={isActivePortfolio}>
                Ver Projetos
            </HomeButton>
            <HomeButton toggleClassName={toggleClassNameContato} isActive={isActiveContato}>
                Entrar em Contato
            </HomeButton>
          </div>
        </div>
        <div className="w-2/4 flex justify-center items-center max-[800px]:w-[90%]">
          <AnimationHome />
        </div>
      </div>
    </div>
  );
};

export default Home;