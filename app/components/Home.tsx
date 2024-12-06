// src/components/Home.tsx
"use client";
import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [show, setShow] = useState(false);

  // Menampilkan animasi setelah komponen dimuat
  useEffect(() => {
    // Timeout untuk memberikan delay animasi
    const timer = setTimeout(() => setShow(true), 300); // delay 300ms untuk animasi
    return () => clearTimeout(timer); // membersihkan timer jika komponen di-unmount
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-blue-700 to-blue-900 overflow-hidden">
      <div className="text-center text-white px-6 md:px-12 space-y-6">
        {/* Logo */}
        <div
          className={`mx-auto mb-6 w-32 h-32 relative transition-opacity duration-1000 ${
            show ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/fallback-logo.png"; // Gunakan fallback logo jika terjadi error
            }}
            loading="lazy"
          />
        </div>

        {/* Animasi Judul - Fade dan Scale */}
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-1000 ${
            show
              ? "opacity-100 transform scale-100 translate-y-0"
              : "opacity-0 transform scale-50 translate-y-[-30px]"
          }`}
        >
          Selamat Datang di Kelas PPLG
        </h1>

        {/* Deskripsi - Parallax Fade */}
        <p
          className={`text-xl md:text-2xl mb-6 transition-opacity duration-1000 delay-200 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          Kelas ini akan membawa Anda lebih jauh dalam dunia pemrograman dan
          teknologi. Bersiaplah untuk belajar dan berkembang bersama!
        </p>

        {/* Animasi Teks Scroll */}
        <p
          className={`text-lg mt-6 transition-transform duration-1000 ${
            show
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-10 opacity-0"
          }`}
        >
          <span className="text-blue-300 animate-pulse">Scroll</span> untuk lihat
          lebih banyak...
        </p>

        {/* Tombol CTA dengan Hover Effect */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg text-lg font-semibold shadow-lg transition-transform transform hover:scale-105 active:scale-95">
            Mulai Eksplorasi
          </button>
        </div>
      </div>

      {/* Efek Dekorasi - Lingkaran Animasi */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-blue-500 opacity-20 animate-ping"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-blue-400 opacity-25 animate-bounce"></div>
      <div className="absolute bottom-10 right-20 w-20 h-20 rounded-full bg-blue-600 opacity-15 animate-pulse"></div>
    </div>
  );
};

export default Home;
