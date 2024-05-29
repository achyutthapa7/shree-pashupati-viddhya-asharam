"use client";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faGraduationCap,
  faImages,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Links = ({ isOpen, setIsOpen }) => {
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

  return (
    <div
      className={`ease-in-out delay-150 duration-500 w-[260px] bg-white/ h-screen absolute top-0 left-0 ${
        isOpen ? "left-0" : "-left-full"
      } backdrop-blur-2xl flex flex-col px-2 py-2 rounded-md  shadow-2xl `}
    >
      <Link
        href="/"
        className={`text-gray-300 flex items-center ${
          path === "/" ? "bg-gray-500/25" : ""
        } p-3 rounded-xl hover:bg-gray-500/25 m-2`}
      >
        <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
      </Link>
      <Link
        href="/about"
        className={`text-gray-300 flex items-center ${
          path === "/about" ? "bg-gray-500/25" : ""
        } p-3 rounded-xl hover:bg-gray-500/25 m-2`}
      >
        <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About
      </Link>
      <Link
        href="/academic"
        className={`text-gray-300 flex items-center ${
          path === "/academic" ? "bg-gray-500/25" : ""
        } p-3 rounded-xl hover:bg-gray-500/25 m-2`}
      >
        <FontAwesomeIcon icon={faGraduationCap} className="mr-2" /> Academics
      </Link>
      <Link
        href="/gallery"
        className={`text-gray-300 flex items-center ${
          path === "/gallery" ? "bg-gray-500/25" : ""
        } p-3 rounded-xl hover:bg-gray-500/25 m-2`}
      >
        <FontAwesomeIcon icon={faImages} className="mr-2" /> Gallery
      </Link>
      <Link
        href="/contact"
        className={`text-gray-300 flex items-center ${
          path === "/contact" ? "bg-gray-500/25" : ""
        } p-3 rounded-xl hover:bg-gray-500/25 m-2`}
      >
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact
      </Link>
    </div>
  );
};

export default Links;
