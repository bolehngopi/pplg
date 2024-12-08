"use client";
import React, { useState, useEffect } from "react";

const JurusanPPLG: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Jika elemen terlihat, set state menjadi true
          } else {
            setIsVisible(false); // Jika elemen tidak terlihat, set state menjadi false
          }
        });
      },
      { threshold: 0.5 } // Elemen dianggap terlihat saat 50% elemen terlihat
    );

    const element = document.getElementById("animElement"); // ID elemen yang ingin diawasi
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Menghentikan pengamatan saat komponen dibersihkan
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-700 text-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Kelas 11</h3>
            <p className="text-lg mb-8">
              Untuk kelas 11 jurusan PPLG, kamu akan belajar membuat website dan
              aplikasi Android. Selain itu, kamu juga akan mempelajari cara
              membuat portofolio pribadi dan mendesain website dengan tampilan
              menarik. Di kelas ini, kamu akan diajarkan cara membuat game
              sederhana, serta memahami konsep dan penggunaan database dalam
              aplikasi yang kamu buat.
            </p>
          </div>

          <div className="bg-green-700 text-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Kelas 10</h3>
            <p className="text-lg mb-8">
              Untuk kelas 10 jurusan PPLG, kamu akan belajar dasar-dasar
              pengembangan perangkat lunak. Fokusnya akan pada logika
              pemrograman dan pembuatan aplikasi sederhana menggunakan bahasa
              pemrograman seperti C, C++, Java, dan C#. Kamu juga akan
              mempelajari cara membuat aplikasi desktop yang berguna dalam
              dunia teknologi informasi.
            </p>
          </div>
        </div>

        {/* Guru Jurusan */}
        <div
          id="animElement"
          className={`bg-gray-800 rounded-xl shadow-lg p-12 space-y-8 transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-4xl font-bold text-center text-blue-500 mb-8">
            Guru Jurusan PPLG
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <img
                src="/guru1.jpg"
                alt="Guru 1"
                className="w-full h-72 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-6 py-4">
                  <h4 className="text-2xl font-bold mb-4">Bu Wiwit</h4>
                  <p className="text-lg">
                    Pembina jurusan PPLG dan juga guru pengajar kelas 10, 11, &
                    12.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="/guru2.jpg"
                alt="Guru 2"
                className="w-full h-72 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white px-6 py-4">
                  <h4 className="text-2xl font-bold mb-4">Bu Annisa</h4>
                  <p className="text-lg">
                    Spesialis pengembangan perangkat lunak dan teknologi Python.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bahasa dan Framework */}
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
