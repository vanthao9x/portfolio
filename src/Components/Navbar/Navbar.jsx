import React, { useRef, useEffect, useState } from "react";
import images from "../../images/images";
import Button from "../Button/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "-350px";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuRef.current) {
        menuRef.current.style.right = "0";
      } else if (window.innerWidth < 1024 && menuRef.current) {
        menuRef.current.style.right = "-350px";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItem = (id, label) => (
    <li
      className={`relative pl-5 transition-all duration-300 ease-in-out cursor-pointer 
        hover:scale-110 hover:translate-y-1 after:content-[''] after:absolute after:w-0 after:h-[2px] 
        after:bg-[#B923E1] after:left-0 after:bottom-[-6px] hover:after:w-full after:transition-all 
        after:duration-500 ${menu === id ? "text-[#B923E1] after:w-full" : ""}`}
    >
      <AnchorLink href={`#${id}`} offset="30" onClick={() => setMenu(id)}>
        {label}
      </AnchorLink>
    </li>
  );

  return (
    <div className=" navbar fixed top-0 left-0 right-0 z-50 bg-[#161513] px-4 sm:px-8 lg:px-20 py-4 flex justify-between items-center text-white shadow-md">
      {/* Logo & Mobile Menu Button */}
      <div className="flex items-center gap-4  w-full lg:w-auto justify-between">
        <img
          src={images.logo}
          alt="logo"
          className="w-24 sm:w-32 md:w-36 rounded-2xl transition-transform duration-500 hover:scale-110"
        />

        {/* Mobile Menu Open Button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 block lg:hidden cursor-pointer"
          onClick={openMenu}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      {/* Navigation Menu */}
      <ul
        ref={menuRef}
        className="fixed top-0 -right-[350px] w-[22rem] h-screen z-20 transition-[right] duration-500
          bg-[rgba(31,0,22,0.95)] backdrop-blur-sm lg:static lg:w-auto lg:h-auto lg:bg-transparent
          flex flex-col lg:flex-row items-start lg:items-center gap-8 text-xl p-8 lg:p-0 rounded-2xl"
      >
        {/* Mobile Close Button */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 block lg:hidden absolute top-6 right-6 cursor-pointer"
          onClick={closeMenu}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

        {navItem("home", "Home")}
        {navItem("about", "About me")}
        {navItem("services", "Service")}
        {navItem("portfolio", "Portfolio")}
        {navItem("contact", "Contact")}
      </ul>

      {/* Connect Button for Desktop */}
      <AnchorLink href="#contact" offset="30" className="hidden xl:block">
        <Button btn_name="Connect with me" />
      </AnchorLink>
    </div>
  );
};

export default Navbar;
