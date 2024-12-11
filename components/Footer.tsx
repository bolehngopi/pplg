import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kelas 10 Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-white mb-2">Kelas 10 Instagram</h4>
            <a
              href="https://www.instagram.com/pplgclassf10/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              <FaInstagram />
              <span>Follow Kelas 10</span>
            </a>
          </div>

          {/* Kelas 11 Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-white mb-2">Kelas 11 Instagram</h4>
            <a
              href="https://www.instagram.com/pplgclassf11/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              <FaInstagram />
              <span>Follow Kelas 11</span>
            </a>
          </div>

          {/* Kelas 12 Section */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-white mb-2">Kelas 12 Instagram</h4>
            <a
              href="https://www.instagram.com/d.sonere/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              <FaInstagram />
              <span>Follow Kelas 12</span>
            </a>
          </div>
        </div>
        <div className="text-center pt-8">
          &copy; {new Date().getFullYear()} Rezezi, <Link href={'https://github.com/bolehngopi'} className="hover:underline">BolehNgopi</Link>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
