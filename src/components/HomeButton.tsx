
// Rederiza o botao presente na pagina inicial
function HomeButton({children, isActive, toggleClassName}) {

  const buttonClasses = `border-4 border-[#ff3535] w-full mr-5 h-12 rounded-3xl hover:scale-105 ${ isActive ? '' : 'bg-[#ff3535] text-white hover:bg-opacity-80'} mt-4 md:mt-0`;

  const textClasses = isActive ? 'text-[#ff3535] font-bold dark:text-[#ffffff]' : 'font-bold'; 

  return (
    <button onClick={toggleClassName} className={buttonClasses}>
      <p className={textClasses}>{children}</p>
    </button>
  );
}

export default HomeButton;