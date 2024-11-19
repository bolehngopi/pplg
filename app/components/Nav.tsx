"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-900/60 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo dan Title */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image
            src="/log.png"
            alt="Logo PPLG"
            width={40}
            height={40}
            className="rounded-full hover:scale-110 transition-transform duration-300"
          />
          <h1 className="text-2xl font-bold tracking-widest text-white hover:text-blue-300 transition-all duration-300">
            PPLG Class
          </h1>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none hover:text-blue-300 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Menu */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6 text-lg bg-gradient-to-b md:bg-none from-blue-900 to-blue-800 md:static absolute top-16 left-0 w-full md:w-auto p-4 md:p-0 transform transition-transform duration-500`}
        >
          <li className="group">
            <button
              onClick={() => handleScroll("about")}
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              About
            </button>
            <div className="h-1 w-0 group-hover:w-full bg-blue-300 transition-all duration-300"></div>
          </li>
          <li className="group">
            <button
              onClick={() => handleScroll("produk")}
              className="text-white hover:text-blue-300 transition-colors duration-300"
            >
              Produk
            </button>
            <div className="h-1 w-0 group-hover:w-full bg-blue-300 transition-all duration-300"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
