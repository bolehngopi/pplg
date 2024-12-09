"use client";
import React, { useState, useEffect } from "react";

const JurusanPPLG: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("animElement");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Banner Utama */}
      <div className="h-screen flex flex-col justify-center items-center space-y-8 bg-blue-800 text-white">
        <h1 className="text-5xl font-extrabold text-center">
          Selamat Datang di Jurusan PPLG
        </h1>
        <p className="text-lg text-center">
          Scroll ke bawah untuk melihat apa saja yang kami pelajari.
        </p>
        <div className="text-center">
          <span className="text-2xl animate-bounce">⬇️</span>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="container mx-auto px-6 md:px-12 py-20 space-y-16">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-12 text-blue-600">
          Jurusan PPLG
        </h1>
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-300 mb-12">
          Belajar Apa Aja di Sini?
        </h2>

        {/* Card Kelas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card Kelas 10 */}
          <div className="bg-green-700 text-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Kelas 10</h3>
            <p className="text-lg mb-8">
              Untuk kelas 10 jurusan PPLG, kamu akan belajar dasar-dasar
              pengembangan perangkat lunak, logika pemrograman, dan pembuatan
              aplikasi sederhana.
            </p>
          </div>

          {/* Card Kelas 11 */}
          <div className="bg-blue-700 text-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Kelas 11</h3>
            <p className="text-lg mb-8">
              Untuk kelas 11 jurusan PPLG, kamu akan belajar membuat website,
              aplikasi Android, portofolio pribadi, dan game sederhana.
            </p>
          </div>

          {/* Card Kelas 12 */}
          <div className="bg-purple-700 text-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Kelas 12</h3>
            <p className="text-lg mb-8">
              Di kelas 12, kamu akan fokus pada proyek besar, seperti
              pengembangan aplikasi kompleks,  dan kolaborasi
              tim dalam membangun sistem profesional.
            </p>
          </div>
        </div>

        {/* Guru Jurusan */}
        <div
          id="animElement"
          className={`bg-gray-800 rounded-xl shadow-lg p-12 space-y-12 transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <h3 className="text-4xl font-bold text-center text-blue-500 mb-8">
            Guru Jurusan PPLG
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Guru Card 1 */}
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/bu wiwit.png"
                alt="Bu Wiwit Rodiyati S.pd"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-6 py-4">
                  <h4 className="text-2xl font-bold mb-4">Bu Wiwit</h4>
                  <p className="text-lg">
                    Pembina jurusan PPLG dan juga guru pengajar kelas 10, 11, &
                    12.
                  </p>
                  <p className="text-lg">
                     ΜΑΤΑ PELAJARAN:
1. Dasar-Dasar Program Keahlian PPLG - Fase E
2. Pemrograman Web - Fase F
3. Pemrograman Perangkat Bergerak - Fase F
4. Pemrograman Grafis, Teks, dan Multimedia - Fase F
                  </p>
                </div>
              </div>
            </div>

            {/* Guru Card 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img
                src="/bu anis.png"
                alt="Bu Annisa Aprilianti S.pd"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-6 py-4">
                  <h4 className="text-2xl font-bold mb-4">Bu Annisa</h4>
                  <p className="text-lg">
                  MATA PELAJARAN
1. Informatika - Fase E PPLG
2. Informatika - Fase E MPLB 1
3. Informatika - Fase E MPLB 2
4. Pemrograman Gim - Fase F
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teknologi yang Dipelajari */}
        <div className="bg-gray-800 rounded-xl shadow-lg p-12 space-y-8">
          <h3 className="text-4xl font-bold text-center text-blue-500 mb-8">
            Teknologi yang Dipelajari
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-semibold text-blue-400 mb-4">
                Bahasa Pemrograman
              </h4>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
              </ul>
            </div>
            <div>
              <h4 className="text-3xl font-semibold text-green-400 mb-4">
                Framework yang Digunakan
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white text-black rounded-lg p-4 shadow-lg flex items-center justify-center transform transition duration-300 hover:scale-110">
                  React
                </div>
                <div className="bg-white text-black rounded-lg p-4 shadow-lg flex items-center justify-center transform transition duration-300 hover:scale-110">
                  Next.js
                </div>
                <div className="bg-white text-black rounded-lg p-4 shadow-lg flex items-center justify-center transform transition duration-300 hover:scale-110">
                  Node.js
                </div>
                <div className="bg-white text-black rounded-lg p-4 shadow-lg flex items-center justify-center transform transition duration-300 hover:scale-110">
                  Tailwind CSS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JurusanPPLG;
