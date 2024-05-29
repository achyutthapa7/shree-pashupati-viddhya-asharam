"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import Nav from "../../src/components/Nav";
import Loading from "../../src/components/Loading";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Shree Pashupati Viddhya Asharam</title>
      </head>
      <body>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <Nav />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
