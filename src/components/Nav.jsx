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

  return (
    <nav className=" sticky top-0 z-20 w-full h-20 flex justify-between px-5 items-center top-0 bg-gray-900 text-white ">
      <div className="text-2xl font-bold">
        <a href="#">SchoolLogo</a>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link
          href="/"
          className={`text-gray-300 flex items-center ${
            path === "/" ? "bg-white/75 text-blue-900" : ""
          } p-3 rounded-xl hover:bg-white/75 hover:text-blue-900 m-2 text-gray-400`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-gray-300 flex items-center ${
            path === "/about" ? "bg-white/75 text-blue-900" : ""
          } p-3 rounded-xl hover:bg-white/75 hover:text-blue-900 m-2 text-gray-400`}
        >
          About
        </Link>
        <Link
          href="/academic"
          className={`text-gray-300 flex items-center ${
            path === "/academic" ? "bg-white/75 text-blue-900" : ""
          } p-3 rounded-xl hover:bg-white/75 hover:text-blue-900 m-2 text-gray-400`}
        >
          Academics
        </Link>
        <Link
          href="/gallery"
          className={`text-gray-300 flex items-center ${
            path === "/gallery" ? "bg-white/75 text-blue-900" : ""
          } p-3 rounded-xl hover:bg-white/75 hover:text-blue-900 m-2 text-gray-400`}
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className={`text-gray-300 flex items-center ${
            path === "/contact" ? "bg-white/75 text-blue-900" : ""
          } p-3 rounded-xl hover:bg-white/75 hover:text-blue-900 m-2 text-gray-400`}
        >
          Contact
        </Link>
      </div>
      <div className="md:hidden flex">
        <Links isOpen={isOpen} setIsOpen={setIsOpen} />
        <button onClick={handleClick}>
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-[27px]"
          />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
