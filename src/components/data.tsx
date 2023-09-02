// Arquivo contendo texto e variaveis usadas no projeto

const ListadeProjetos = [
  { id: '1',
    title: 'CorteCerto',
    subtitle: 'Site de agendamento',
    description: 'Nosso aplicativo de agendamento de barbearia é a sua solução para marcar cortes de cabelo e barbas de forma rápida e eficiente. Com ele, você pode agendar horarios, escolher serviços personalizados e manter seu visual em dia. Simplificamos o agendamento de cuidados masculinos para que você possa ficar no seu melhor.',
    linkProjeto: 'https://barber-shop-coral.vercel.app',
    linkGithub: 'https://github.com/Null-Kc/Barber-Shop' ,
    status: 'Online 🟢' },
  { id: '2',
    title: 'IEEE RAS',
    subtitle: 'Site institucional',
    description: 'Nosso site institucional IEEE é o epicentro do nosso grupo de robótica. Aqui, compartilhamos nossas paixões e conquistas na vanguarda da tecnologia robótica. Explore projetos, eventos e recursos educacionais. Junte-se a nós na jornada da inovação tecnológica.',
    linkProjeto: 'https://ras-site.vercel.app/',
    linkGithub: 'https://github.com/Null-Kc/ras_Site' ,
    status: 'Offline 🔴' },
  { id: '3',
    title: 'Match MT',
    subtitle: 'Landing Page',
    description: 'O site de negócios "Match MT" é a plataforma de referência para conexões em relações públicas online. Facilitamos a união de profissionais de RP e empresas que buscam construir e fortalecer sua presença digital. Encontre especialistas em RP, colaborações estratégicas e recursos para otimizar sua estratégia de comunicação online.',
    linkProjeto: 'https://www.match.mt/',
    linkGithub: 'https://github.com/Null-Kc' ,
    status: 'Online 🟢' },
];

export { ListadeProjetos };

const SobreNos = [
  {
    id: 1,
    title: "Sobre Nós_",
    texto: "Somos uma produtora de software, nascida da paixão por inovação e tecnologia. Nosso propósito é transformar ideias em realidade. Nossa equipe é liderada por Pedro Lucas, um talentoso Full Stack Developer, comprometido em criar soluções de software excepcionais.",
  },
  {
    id: 2,
    title: "Nossa História_",
    texto: "Nossa jornada começou com a visão de Pedro Lucas, um jovem apaixonado por tecnologia e programação. Ele decidiu iniciar nossa produtora de software para ajudar empresas e empreendedores a materializarem suas visões digitais. Desde então, nossa produtora cresceu e se tornou um ponto de referência para desenvolvimento de software de alta qualidade.",
  },
  {
    id: 3,
    title: "Nossa Missão_",
    texto: "Nossa missão é clara: capacitar nossos clientes a alcançar o sucesso através da tecnologia. Valorizamos a inovação, a excelência técnica e o compromisso com a satisfação do cliente. Estamos aqui para transformar desafios em oportunidades e ideias em resultados tangíveis.",
  },
  {
    id: 4,
    title: "Como Podemos Ajudar_",
    texto: "Transformamos ideias em realidade. Com nossa paixão por inovação e liderados por Pedro Lucas, um talentoso Full Stack Developer, oferecemos soluções excepcionais de software. Valorizamos a excelência técnica e capacitamos nossos clientes a alcançar o sucesso. Como podemos ajudar você?"
  }
];

export { SobreNos };

const SobreNoscontainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export { SobreNoscontainer };

const SobreNosvariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export { SobreNosvariants };

const HomeTexto = {
  Frase: "Criando o futuro, linha por linha.",
  Apresentacao: "Desenvolvendo soluções digitais inovadoras.",
  Descricao: "Sou um desenvolvedor apaixonado por transformar ideias em código. Minha missão é criar soluções digitais que tornem a vida das pessoas mais fácil e eficiente. Explore meu portfólio para conhecer meu trabalho.",
  delay: 40,
  delayDescricao: 30,
};

export {HomeTexto};

const NavItems = [
  { label: 'Pagina Inicial', href: '#Home' },
  { label: 'Projetos', href: '#Projects' },
  { label: 'Sobre', href: '#About' },
  { label: 'Contato', href: '#Contact' },
];

export {NavItems}