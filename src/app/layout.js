"use client";

import React, { useState, useEffect } from "react";
import "./globals.css";
import Nav from "../../src/components/Nav";
import Loading from "../../src/components/Loading";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Link from "next/link";
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
      if (window.scrollY > 50) {
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
        <Link
          rel="icon"
          href="/favicon.ico"
          type="image/<generated>"
          sizes="any"
        />
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
                className="bg-black/35 text-white fixed bottom-5 right-5 cursor-pointer rounded-full w-8 h-8 md:p-3 p-1 2xl:p-5 hover:bg-black/60 2xl:w-10 2xl:h-10"
                onClick={handleScrollToTop}
              />
            )}
          </>
        )}
      </body>
    </html>
  );
}
