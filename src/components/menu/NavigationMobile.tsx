import {NavItems} from '../data'

//O componente NavigationMobile renderiza a lista de navegacao do menu mobile.
const NavigationMobile = () => {
  const navItemClass = 'pt-10 hover:text-[#ff3535]';

  return (
    <ul className="w-full text-[#000000] font-bold text-[20px] dark:text-[#ffffff]">
      {NavItems.map((item) => (
        <li key={item.label} className={navItemClass}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMobile;