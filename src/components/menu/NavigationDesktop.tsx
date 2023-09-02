import {NavItems} from '../data'

//O componente NavigationDesktop renderiza a lista de navegacao do menu desktop.
const NavigationDesktop = () => {
  const navItemClass = "px-2 hover:text-[#ff3535]";

  return (
    <div className='flex flex-row justify-between '>
      <ul className="flex flex-row text-[#0B0D39] font-bold text-[20px] dark:text-[#ffffff]">
        {NavItems.map((item) => (
          <li key={item.label} className={navItemClass}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
 );
}
export default NavigationDesktop;


