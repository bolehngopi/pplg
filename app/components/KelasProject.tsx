"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const KelasProject: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const kolaseSection = document.getElementById("kolase-section");
      if (kolaseSection) {
        const sectionTop = kolaseSection.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 1.5) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Header Section */}
      <div className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 md:px-12">
        <h1 className="text-6xl md:text-8xl font-extrabold text-blue-400 tracking-wide transform hover:scale-110 transition-transform duration-500">
          Project Kelas
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl">
          Selamat datang di halaman hasil karya siswa kami! Gulir ke bawah untuk
          melihat kolase dari berbagai proyek luar biasa yang telah mereka
          ciptakan.
        </p>
        <div className="mt-8">
          <span className="text-blue-400 animate-bounce text-2xl">↓ Scroll untuk melihat</span>
        </div>
      </div>

      {/* Kolase Section */}
      <div
        id="kolase-section"
        className={`min-h-screen flex justify-center items-center transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        } transition-all duration-1000`}
      >
        <div className="relative group max-w-6xl mx-auto w-full mt-[-100px]">
          {/* Text instruction above the image */}
          <div className="absolute top-0 left-0 right-0 text-center p-4 text-lg font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>Click here to view the project details</p>
          </div>

          {/* Larger Collage Image */}
          <div className="grid grid-cols-1 gap-6 p-6">
            <img
              src="/A_stunning_and_vibrant_collage_of_various_creative.png" // Path to the new image
              alt="Kolase project"
              className="h-[500px] w-full object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-700 group-hover:blur-sm hover:brightness-75 shadow-2xl"
            />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h2 className="text-4xl font-bold text-white">Project</h2>
            <p className="mt-4 text-lg text-gray-300 text-center">
              Klik untuk melihat detail proyek
            </p>
            <button
              onClick={() => router.push("/projects")}
              className="mt-6 px-8 py-4 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Lihat Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KelasProject;
