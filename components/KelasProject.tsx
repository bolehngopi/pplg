"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const KelasProject: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    const kolaseSection = document.getElementById("kolase-section");
    if (kolaseSection) {
      const sectionTop = kolaseSection.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.5;
      setIsVisible(sectionTop <= triggerPoint);
    }
  };

  useEffect(() => {
    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollThrottled);
    handleScroll(); // Initial check in case the section is already in view

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, []);

  return (
    <section className="bg-gray-900 text-white py-40 px-4">
      <header className="text-center">
        <h1
          className={`text-5xl md:text-8xl font-extrabold text-blue-400 tracking-wide transform transition-transform duration-500 ${
            isVisible ? "scale-110" : ""
          }`}
        >
          Project Kelas
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto mt-4">
          Selamat datang di halaman hasil karya siswa kami! Gulir ke bawah untuk
          melihat kolase dari berbagai proyek luar biasa yang telah mereka
          ciptakan.
        </p>
      </header>
      <main className="text-center mt-8">
        <Link
          href={'/projects'}
          className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          aria-label="Lihat Project"
        >
          Lihat Project
        </Link>
      </main>
    </section>
  );
};

export default KelasProject;
