import DarkModeSwitch from "./DarkModeSwitch";
import Logo from './Logo';
import NavigationDesktop from "./NavigationDesktop";

// O componente MenuDesktop renderiza o menu Desktop completo.
const MenuDesktop = () => {
  return (
    <div className="flex justify-center relative z-[100]">
      <div className="w-11/12 fixed bg-white h-16 rounded-3xl flex justify-center items-center max-w-screen-lg shadow-[0_0_30px_0_rgba(255,0,0,0.3)] dark:shadow-[0_0_30px_0px_rgba(110,110,110,255)] dark:bg-[#461a1a]">
        <div className="w-11/12 flex flex-row justify-between items-center">
          <Logo />
          <NavigationDesktop />
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default MenuDesktop; 