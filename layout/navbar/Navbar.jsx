"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import SunLottie from "@/sections/SunLottie";
import RocketLottie from "@/sections/RocketLottie";

import MobileSidebar from "./SidebarMobile";
import { NavbarMenu } from "./NavbarItems";
import NavbarMobile from "./NavbarMobile";
// import { Link } from 'react-router-dom';

import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const [top, setTop] = useState("0");
  const [showMenu, setShowMenu] = useState(false);

  const { setThemeFun, theme } = useContext(ThemeContext);

  // Logic for Navbar Hide and Show on scrolling behaviour
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0"); // Show the navbar
      } else {
        setTop("-80px"); // Hide the navbar
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Desktop Header */}
      <div className="w-full h-[60px] lg:px-8 md:px-4 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] static backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-10 transition-all duration-100">
        {/* Name Logo */}
        <p className="text-gray-400 flex">
          <span className="text-lg font-bold">BISHAL</span>
          <DiTechcrunch />
        </p>
        <div className="h-full flex gap-4">
          {/* Navbar Links */}
          {NavbarMenu.map((navbar) => (
            <Link
              className={"text-[#c72c6c] dark:text-[#07d0e5] font-semibold"}
              href={"/" + navbar.link}
              key={navbar.name}
            >
              <div className="h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-4  border-[#c72c6c] dark:border-[#07d0e5] transition-all">
                {navbar.name}
              </div>
            </Link>
          ))}
        </div>
        {/* Toggle Theme button */}
        <div className="flex items-center gap-4">
          <button
            className="text-xl text-[#c72c6c] dark:text-[#07d0e5] hover:scale-110"
            onClick={setThemeFun}
          >
            {theme === "dark" ? (
              //here
              <SunLottie animationPath="/lottie/sunlight.json" />
            ) : (
              <RocketLottie animationPath="/lottie/moon2.json" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Header */}
      <NavbarMobile
        setShowMenu={setShowMenu}
        setThemeFun={setThemeFun}
        showMenu={showMenu}
        theme={theme}
        top={top}
      />
      {/* SideMenu For Mobile Screen */}
      <MobileSidebar
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        theme={theme}
      />
    </Fragment>
  );
};

export default Navbar;
