import Head from 'next/head';

import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';

import '../styles/global.css'

// Renderiza A landing Page
const App = () => {
  return (
    <div className='m-0	p-0 min-h-screen inset-y-0 inset-x-0 outline-none box-border font-sans dark:bg-[#461a1a]'>
      <Head>
        <title>Kira.company</title>
        <link rel='shortcut icon' href='/imagens/logoBall.ico' />
      </Head>
      <Menu />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App; 