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
  }, [path, setIsOpen]);

  return (
    <div
      className={`transition-all duration-500 w-64 bg-gray-900/90 h-screen fixed top-0 left-0 ${
        isOpen ? "left-0" : "-left-full"
      } backdrop-blur-lg flex flex-col px-4 py-8 z-30`}
    >
      <Link
        href="/"
        className={`flex items-center p-4 mb-2 rounded-lg transition-colors ${
          path === "/"
            ? "bg-gray-700 text-blue-400"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
      >
        <FontAwesomeIcon icon={faHome} className="mr-3" /> Home
      </Link>
      <Link
        href="/about"
        className={`flex items-center p-4 mb-2 rounded-lg transition-colors ${
          path === "/about"
            ? "bg-gray-700 text-blue-400"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
      >
        <FontAwesomeIcon icon={faInfoCircle} className="mr-3" /> About
      </Link>
      <Link
        href="/academic"
        className={`flex items-center p-4 mb-2 rounded-lg transition-colors ${
          path === "/academic"
            ? "bg-gray-700 text-blue-400"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
      >
        <FontAwesomeIcon icon={faGraduationCap} className="mr-3" /> Academics
      </Link>
      <Link
        href="/gallery"
        className={`flex items-center p-4 mb-2 rounded-lg transition-colors ${
          path === "/gallery"
            ? "bg-gray-700 text-blue-400"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
      >
        <FontAwesomeIcon icon={faImages} className="mr-3" /> Gallery
      </Link>
      <Link
        href="/contact"
        className={`flex items-center p-4 mb-2 rounded-lg transition-colors ${
          path === "/contact"
            ? "bg-gray-700 text-blue-400"
            : "text-gray-300 hover:bg-gray-700 hover:text-white"
        }`}
      >
        <FontAwesomeIcon icon={faEnvelope} className="mr-3" /> Contact
      </Link>
      <div className="mt-auto text-gray-300 text-center">
        &copy; 2024 by Achyut Thapa
      </div>
    </div>
  );
};

export default Links;
