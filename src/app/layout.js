"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import Nav from "../../src/components/Nav";
import Loading from "../../src/components/Loading";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <head>
        <title>Shree Pashupati Viddhya Asharam</title>
      </head>
      <body className="relative">
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <Nav />
            {children}
            <Footer />
            {isScroll && (
              <FontAwesomeIcon
                icon={faArrowUp}
                className="bg-black/35 text-white fixed bottom-10 right-10 cursor-pointer rounded-full w-8 h-8 p-3 hover:bg-black/60"
                onClick={handleScrollToTop}
              />
            )}
          </>
        )}
      </body>
    </html>
  );
}
