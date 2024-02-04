import { FC, useState } from "react";
import { close, logo, menu } from "../assets";
import { navigationLinks } from "../utils/constants";
import { styles } from "../utils/style";

const Navbar: FC = (): JSX.Element => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [active, setActive] = useState<string>("home");

  const toggleHandler = () => setToggleNav((prev) => !prev);
  const activeHandler = (id: string) => setActive(id);

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}
      <div className={`${styles.heading2} flex items-center`}>
        <img src={`${logo}`} alt="Logo" width={`64px`} height={`64px`} />
        <h1 className={`${styles.heading2} ml-2 cursor-pointer`}>PayPro</h1>
      </div>

      {/* navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((item, idx) => (
          <li
            key={item.id}
            className={`${
              idx === navigationLinks.length - 1 ? `mr-0` : `mr-32`
            } 
            ${
              active === item.id ? "text-white" : "text-lightWhite"
            } font-montserrat font-normal cursor-pointer text-[16px] text-white hover:text-lightWhite transition-all duration-500`}
            onClick={activeHandler}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* Navigation Btn */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleNav ? close : menu}
          alt="menu"
          onClick={toggleHandler}
          className="w-[30px] h-[30px] object-contain"
        />
        <div
          className={`${
            !toggleNav ? "hidden" : "flex "
          } p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient`}
        >
          <ul className="list-none flex justify-center items-center flex-1">
            {navigationLinks.map((item, idx) => (
              <li
                key={item.id}
                className={`${
                  idx === navigationLinks.length - 1 ? `mr-0` : `mr-10`
                } 
              ${active === item.id ? "text-white" : "text-lightWhite"}
              font-montserrat font-normal cursor-pointer text-[16px] text-white
               hover:text-lightWhite transition-all duration-500`}
                onClick={activeHandler}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
