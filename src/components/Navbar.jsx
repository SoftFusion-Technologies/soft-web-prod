import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, user } from "../assets";
import Logotipo from "../../public/Logotipo.svg";
import "../index.css";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex max-md:px-10 max-md:justify-between md:justify-between md:px-10 lg:px-0 lg:justify-around items-center ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Logo */}
          <img
            src={Logotipo}
            alt="logo"
            className="w-[150px] md:w-[150px] lg:w-[200px] object-contain"
          />
        </Link>

        {/* Navbar */}
        <ul className="list-none hidden md:flex gap-8 lg:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        
        {/* User */}
        <div className="items-center gap-4 hidden lg:block ">
          <div className="cursor-pointer">
              <li className="list-none">
                <a href="#" className="hover:text-[#FF006C] ease-in-out duration-300">Proximamente Soft Academy...</a>
              </li>
          </div>

          {/* <img
            src={user}
            alt="user"
            className="h-10 cursor-pointer hidden md:block mr-10 lg:mr-24"
            onClick={handleChangeTheme}
          /> */}

        </div>

        <div className="block md:hidden">
          {/* Hamburguer */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Navbar Mobile */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] sm:hidden z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <i className={`${scrolled ? "block" : "hidden"}`}></i>
    </nav>
  );
};

export default Navbar;
