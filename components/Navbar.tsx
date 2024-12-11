"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 sticky top-0 left-0 w-full z-[999]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600 dark:text-teal-300" href={'/'}>
              <img
                src="/logo.png"
                alt="Logo PPLG"
                className="w-8 h-8 object-cover rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="md:flex md:items-center md:gap-12 hidden">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href={'/projects'}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href={'/class-fase-e'}
                  >
                    Class Fase E
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href={'/class-fase-f'}
                  >
                    Class Fase F
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href={'/class-fase-f-lanjutan'}
                  >
                    Class Fase F Lanjutan
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-gray-500 dark:text-white" size={24} />
              ) : (
                <FaBars className="text-gray-500 dark:text-white" size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-800 text-white py-4 px-6`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              className="text-gray-300 transition hover:text-gray-500 dark:text-white dark:hover:text-white/75"
              href={'/projects'}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-300 transition hover:text-gray-500 dark:text-white dark:hover:text-white/75"
              href={'/class-fase-e'}
            >
              Class Fase E
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-300 transition hover:text-gray-500 dark:text-white dark:hover:text-white/75"
              href={'/class-fase-f'}
            >
              Class Fase F
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-300 transition hover:text-gray-500 dark:text-white dark:hover:text-white/75"
              href={'class-fase-e-lanjutan'}
            >
              Class Fase F Lanjutan
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
