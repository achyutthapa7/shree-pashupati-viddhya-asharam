"use client";
import Links from "./Links";
import React, { useEffect, useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Nav = () => {
  const path = usePathname();

  useEffect(() => {
    if (
      path === "/" ||
      path === "/about" ||
      path === "/academic" ||
      path === "/gallery" ||
      path === "/contact"
    ) {
      setIsOpen(false);
    }
  }, [path]);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.onscroll = () => {
      setIsOpen(false);
    };
  }, []);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`top-0 z-20 w-full h-20 flex 2xl:justify-around justify-between px-5 items-center bg-gray-900 text-white ${
        isScroll ? "fixed" : "absolute"
      }`}
    >
      <div className="text-2xl font-bold">
        <Link href="/">SchoolLogo</Link>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link
          href="/"
          className={`flex items-center ${
            path === "/" ? "bg-white/75 text-blue-700" : ""
          } p-3 rounded-xl hover:bg-white/75 hover:text-blue-700 m-2`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`flex items-center ${
            path === "/about" ? "bg-white/75 text-blue-700" : ""
          } p-3 rounded-xl hover:bg-white/75 hover:text-blue-700 m-2`}
        >
          About
        </Link>
        <Link
          href="/academic"
          className={`flex items-center ${
            path === "/academic" ? "bg-white/75 text-blue-700" : ""
          } p-3 rounded-xl hover:bg-white/75 hover:text-blue-700 m-2 `}
        >
          Academics
        </Link>
        <Link
          href="/gallery"
          className={`flex items-center ${
            path === "/gallery" ? "bg-white/75 text-blue-700" : ""
          } p-3 rounded-xl hover:bg-white/75 hover:text-blue-700 m-2 `}
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className={`flex items-center ${
            path === "/contact" ? "bg-white/75 text-blue-700" : ""
          } p-3 rounded-xl hover:bg-white/75 hover:text-blue-700 m-2 `}
        >
          Contact
        </Link>
      </div>
      <div className="md:hidden flex">
        <Links isOpen={isOpen} setIsOpen={setIsOpen} />
        <button onClick={handleClick} className="fixed top-7 right-8">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-[27px] text-gray-400"
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
