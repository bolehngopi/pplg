"use client";

import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations after the component mounts
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-gray-900 via-blue-700 to-blue-900 overflow-hidden relative">
      <div className="text-center text-white px-6 md:px-12 space-y-6">
        {/* Logo with Animation */}
        <div
          className={`mx-auto mb-6 w-32 h-32 relative transition-transform transition-opacity duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
        >
          <img
            src="/logo.png"
            alt="Logo PPLG"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title with Smooth Animation */}
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-1000 ease-out ${isVisible
              ? "opacity-100 transform scale-100 translate-y-0"
              : "opacity-0 transform scale-75 translate-y-10"
            }`}
        >
          Selamat Datang di Kelas PPLG
        </h1>

        {/* Description with Delay */}
        <p
          className={`text-xl md:text-2xl mb-6 transition-opacity duration-1000 delay-200 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          Kelas ini akan membawa Anda lebih jauh dalam dunia pemrograman dan
          teknologi. Bersiaplah untuk belajar dan berkembang bersama!
        </p>

        {/* Scroll Prompt with Pulse Effect */}
        <p
          className={`text-lg mt-6 transition-transform duration-1000 ease-in-out ${isVisible
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-10 opacity-0"
            }`}
        >
          <span className="text-blue-300 animate-pulse">Scroll</span> untuk lihat
          lebih banyak...
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 active:scale-95">
            Get Started
          </button>
        </div>
      </div>

      {/* Decorative Animated Circles */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-blue-500 opacity-20 animate-ping"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-blue-400 opacity-25 animate-bounce"></div>
      <div className="absolute bottom-10 right-20 w-20 h-20 rounded-full bg-blue-600 opacity-15 animate-pulse"></div>
    </div>
  );
};

export default Hero;