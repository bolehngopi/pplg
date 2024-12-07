// src/components/About.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about-section");
      if (aboutSection) {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 1.5) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about-section"
      className="min-h-screen bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-white py-20"
    >
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 space-y-16">
          {/* Judul Halaman */}
          <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-12 text-white">
            Tentang <span className="text-blue-400">PPLG</span>
          </h2>

          {/* Apa itu PPLG */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white text-black rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                Apa itu PPLG?
              </h3>
              <p className="text-lg opacity-90">
                PPLG (Pengembangan Perangkat Lunak dan Gim) adalah program
                pendidikan yang mempersiapkan siswa dengan keterampilan teknologi
                dan pengetahuan pemrograman berbasis proyek. Program ini fokus
                pada pengembangan perangkat lunak dan gim untuk melahirkan
                inovator teknologi masa depan.
              </p>
            </div>
            <div>
          
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="bg-blue-900 rounded-xl shadow-lg p-12 space-y-12">
            <h3 className="text-4xl font-bold text-center text-white mb-8">
              <span className="text-blue-400">Visi</span> & Misi Kami
            </h3>
            <div className="space-y-8">
              {/* Visi */}
              <div>
                <h4 className="text-3xl font-semibold text-blue-400 mb-4">
                  Visi
                </h4>
                <p>
                  Menjadi program pendidikan terbaik dalam pengembangan perangkat
                  lunak dan gim yang melahirkan talenta unggul, inovatif, dan siap
                  bersaing di kancah global.
                </p>
              </div>

              {/* Misi */}
              <div>
                <h4 className="text-3xl font-semibold text-blue-400 mb-4">
                  Misi
                </h4>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    Memberikan pendidikan berbasis teknologi dengan pendekatan
                    praktis.
                  </li>
                  <li>
                    Meningkatkan keterampilan siswa dalam pemrograman, desain
                    perangkat lunak, dan pengembangan gim.
                  </li>
                  <li>
                    Menyediakan lingkungan belajar yang mendukung kreativitas dan
                    inovasi.
                  </li>
                  <li>
                    Membantu siswa membangun karier profesional di bidang
                    teknologi.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Kenapa Memilih PPLG */}
          <div className="relative group bg-white text-black rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-3xl font-bold text-blue-700 mb-4">
              Kenapa Memilih PPLG?
            </h3>
            <p className="text-lg opacity-90">
              Temukan alasan utama kenapa PPLG menjadi pilihan terbaik untuk masa depanmu! klik here card
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-900 rounded-xl opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex justify-center items-center">
              <div className="space-x-4">
                <button
                  onClick={() => router.push("/kelas-11")}
                  className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  Lihat Kelas 11
                </button>
                <button
                  onClick={() => router.push("/kelas-10")}
                  className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  Lihat Kelas 10
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
