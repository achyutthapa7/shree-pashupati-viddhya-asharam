"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import Nav from "../../src/components/Nav";
import Loading from "../../src/components/Loading";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    if (document.readyState === "complete") {
      // If the document is already loaded, set loading to false
      handleLoad();
    } else {
      // Listen for the load event
      window.addEventListener("load", handleLoad);

      // Clean up event listener on component unmount
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <html lang="en">
      <body>
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <Nav />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
