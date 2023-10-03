import {NavItems} from '../data'

// O componente NavigationFooter renderiza a lista de navegacao presente no footer
const NavigationFooter = () => {
  const navItemClass = "px-2 hover:text-[#ff3535]";

  return(
    <div className='pt-5 px-8'>          
      <ul className="flex flex-row flex-wrap justify-center font-bold text-[20px] dark:text-[#ffffff] max-[330px]:text-[16px]">
        {NavItems.map((item) => (
          <li key={item.label} className={navItemClass}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationFooter;