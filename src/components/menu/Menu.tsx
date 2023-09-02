import MenuDesktop from "./desktop";
import MenuMobile from "./Mobile";

// O componente Menu renderiza o menu com base no tamanho da tela.
const Menu = () => {
  return (
    <div id="Home" className="h-[120px] pt-5 flex justify-center">
        <div className="max-[900px]:hidden ">
          <MenuDesktop />
        </div>
        <div className="min-[901px]:hidden">
         <MenuMobile />
        </div>
    </div>
  );
};

export default Menu; 