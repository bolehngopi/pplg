"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const JurusanPPLG: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("animElement");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="container mx-auto py-20 space-y-16">
        <h1 className="text-center text-4xl md:text-6xl font-extrabold md:mb-12 text-blue-600">
          Jurusan PPLG
        </h1>
        <h2 className="text-center text-2xl md:text-4xl font-semibold text-gray-300 mb-12">
          Belajar Apa Aja di Sini?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
          {[
            {
              title: "Kelas Fase E",
              content:
                "Dasar-dasar pengembangan perangkat lunak, logika pemrograman, dan pembuatan aplikasi sederhana.",
              bgColor: "bg-green-700",
              link: '/class-fase-e'
            },
            {
              title: "Kelas Fase F",
              content:
                "Membuat website, aplikasi Android, portofolio pribadi, dan game sederhana.",
              bgColor: "bg-blue-700",
              link: '/class-fase-f'
            },
            {
              title: "Kelas Fase F Lanjutan",
              content:
                "Proyek besar seperti pengembangan aplikasi kompleks dan kolaborasi tim.",
              bgColor: "bg-purple-700",
              link: '/class-fase-f-lanjutan'
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`${card.bgColor} text-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <h3 className="text-2xl font-bold mb-4 hover:underline">
                <Link href={card.link}>
                  {card.title}
                </Link>
              </h3>
              <p className="text-md mb-8">{card.content}</p>
            </div>
          ))}
        </div>

        {/* Teachers Section */}
        <div
          id="animElement"
          className={`bg-gray-800 rounded-xl shadow-lg p-12 space-y-12 transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <h3 className="text-4xl font-bold text-center text-blue-500 mb-8">
            Guru Jurusan PPLG
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                imgSrc: "/person/bu-wiwit.png",
                name: "Bu Wiwit",
                description: `Pembina jurusan PPLG dan guru pengajar kelas 10, 11, & 12.
                  Mata Pelajaran:
                  - Dasar-Dasar Program Keahlian PPLG
                  - Pemrograman Web
                  - Pemrograman Perangkat Bergerak
                  - Pemrograman Grafis, Teks, dan Multimedia`,
              },
              {
                imgSrc: "/person/bu-anis.png",
                name: "Bu Annisa",
                description: `Pengajar informatika dan pemrograman gim.
                  Mata Pelajaran:
                  - Informatika Fase E PPLG 
                  - Pemrograman Gim`,
              },
            ].map((teacher, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-lg shadow-xl"
              >
                <img
                  src={teacher.imgSrc}
                  alt={`Potret ${teacher.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white px-6 py-4">
                    <h4 className="text-2xl font-bold mb-4">{teacher.name}</h4>
                    <p className="text-lg">{teacher.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JurusanPPLG;
