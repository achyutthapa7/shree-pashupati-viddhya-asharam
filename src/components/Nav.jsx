'use client'
import React, { useEffect, useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Links from "./Links";
const Nav = () => {
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
    <div className="fixed z-20 w-full h-20 flex justify-between px-5 items-center top-0 text-white">
      <div className="lg:flex md:flex hidden">left</div>
      <div className="lg:flex md:flex hidden">middle</div>
      <div className="lg:flex md:flex hidden">right</div>
      <div className="lg:hidden md:hidden flex">
        <Links isOpen={isOpen} setIsOpen={setIsOpen} />
        <button onClick={handleClick} className="fixed right-5">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="text-[27px] text-white"
          />
        </button>
      </div>
    </div>
  );
};

export default Nav;
