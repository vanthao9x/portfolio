import React, { useRef } from "react";
import images from "../../images/images";
import Button from "../Button/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = React.useState("home");
  const menuRef = useRef("0px");

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  const menu_hovering =
    "transition-all hover:scale-115 hover:duration-1000 hover:translate-y-[15px] ease-in-out cursor-pointer pl-5 flex lg:block";

  const changeMenu = (menu) => {
    setMenu(menu);
  };
  return (
    <div className="navbar md:fixed top-0 left-0 right-0 z-50 bg-[#161513] flex justify-between items-center text-md lg:text-xl mb-5 mx-12 lg:mx-20">
      <div>
        <img
          className="w-50 rounded-2xl hover:scale-150 hover:translate-y-[50px] hover:duration-1000"
          src={images.logo}
          alt="ảnh logo"
        />
        {/* <h1 className='font-bold my-2'>Văn Thảo</h1> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="nav-mob-open w-10 h-10 block fixed right-10 top-11 cursor-pointer lg:hidden"
          onClick={openMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <ul ref={menuRef} className="nav-menu fixed top-0 -right-[350px] w-[22rem] h-screen z-20 transition-[right] duration-500
      bg-[rgba(31,0,22,0.9)] bg-opacity-80 lg:bg-[#161513] flex flex-col items-start gap-7 text-2xl 
        lg:static lg:w-auto md:h-auto lg:flex-row lg:items-center sm:justify-between rounded-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="nav-mob-close block lg:hidden w-10 h-10 relative top-7 left-72 md:left-72 cursor-pointer"
          onClick={closeMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        <li className={menu_hovering}>
          <AnchorLink className="" href="#home">
            <p onClick={() => changeMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && (
            <img className="w-20 h-10 " src={images.underline} alt="underline" />
          )}
        </li>
        <li className={menu_hovering}>
          <AnchorLink className="" offset="30" href="#about">
            <p onClick={() => changeMenu("about")}>About me</p>
          </AnchorLink>
          {menu === "about" && (
            <img className="w-20 h-10" src={images.underline} alt="underline" />
          )}
        </li>
        <li className={menu_hovering}>
          <AnchorLink className="" offset="30" href="#services">
            <p onClick={() => changeMenu("service")}>Service</p>
          </AnchorLink>
          {menu === "service" && (
            <img className="w-20 h-10" src={images.underline} alt="underline" />
          )}
        </li>
        <li className={menu_hovering}>
          <AnchorLink className="" offset="30" href="#portfolio">
            <p onClick={() => changeMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && (
            <img className="w-20 h-10" src={images.underline} alt="underline" />
          )}
        </li>
        <li className={menu_hovering + " pb-10 lg:pb-0"}>
          <AnchorLink className="" offset="30" href="#contact">
            <p onClick={() => changeMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && (
            <img className="w-20 h-10" src={images.underline} alt="underline" />
          )}
        </li>
      </ul>
      <AnchorLink className="hidden xl:block" offset={30} href="#contact">
        <Button btn_name="Connect with me" />
      </AnchorLink>
    </div>
  );
};

export default Navbar;
