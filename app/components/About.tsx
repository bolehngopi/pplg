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
      className="relative min-h-screen bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-white py-20 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/background-pplg.jpg")',
          filter: "brightness(0.5)",
        }}
      />

      <div
        className={`relative z-10 transition-all duration-1000 ease-in-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 space-y-16">
          {/* Judul Halaman */}
          <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-12 text-white tracking-wide">
            Tentang <span className="text-blue-400">PPLG</span>
          </h2>

          {/* Apa itu PPLG */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group bg-white text-black rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                Apa itu PPLG?
              </h3>
              <p className="text-lg opacity-90">
                PPLG (Pengembangan Perangkat Lunak dan Gim) adalah program
                pendidikan berbasis teknologi yang mempersiapkan siswa untuk
                menjadi inovator masa depan dalam bidang perangkat lunak dan gim.
              </p>
              <div className="absolute top-0 right-0 -mt-8 -mr-8 bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition">
                📘
              </div>
            </div>

            {/* Apa yang Dipelajari */}
            <div className="bg-white text-black rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-3xl font-bold text-blue-700 mb-4">
                Apa yang Dipelajari di PPLG?
              </h3>
              <ul className="list-disc pl-6 space-y-4 text-lg opacity-90">
                <li>
                  Dasar pemrograman seperti Python, Java, dan C++.
                </li>
                <li>
                  Pengembangan aplikasi web modern dengan framework seperti React
                  dan Next.js.
                </li>
                <li>
                  Desain UI/UX dan teknik pengembangan gim.
                </li>
                <li>
                  Kolaborasi tim dalam proyek besar.
                </li>
              </ul>
            </div>
          </div>

          {/* Visi & Misi */}
          <div className="bg-blue-900 rounded-xl shadow-lg p-12 space-y-12">
            <h3 className="text-4xl font-bold text-center text-white mb-8">
              <span className="text-blue-400">Visi</span> & Misi Kami
            </h3>
            <div className="space-y-8">
              {/* Visi */}
              <div className="flex space-x-4 items-start">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  🌟
                </div>
                <div>
                  <h4 className="text-3xl font-semibold text-blue-400 mb-2">
                    Visi
                  </h4>
                  <p>
                    Menjadi program pendidikan terbaik dalam pengembangan perangkat
                    lunak dan gim yang melahirkan talenta unggul dan inovatif.
                  </p>
                </div>
              </div>

              {/* Misi */}
              <div className="flex space-x-4 items-start">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  🎯
                </div>
                <div>
                  <h4 className="text-3xl font-semibold text-blue-400 mb-2">
                    Misi
                  </h4>
                  <ul className="list-disc pl-6 space-y-4">
                    <li>
                      Meningkatkan keterampilan siswa dalam pemrograman dan desain.
                    </li>
                    <li>
                      Menyediakan lingkungan belajar yang mendukung inovasi.
                    </li>
                    <li>
                      Membantu siswa membangun karier profesional di bidang
                      teknologi.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Kenapa Memilih PPLG */}
          <div className="relative group bg-white text-black rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold text-blue-700 mb-4">
              Kenapa Memilih PPLG?
            </h3>
            <p className="text-lg opacity-90">
              PPLG menawarkan pendidikan yang berorientasi pada proyek, memungkinkan
              siswa untuk mempelajari teknologi terkini dan membangun masa depan
              yang cerah di bidang teknologi.
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
