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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
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
              <a href="#" className="group relative block bg-black max-w-96" key={idx}>
                <img
                  alt={`Potret ${teacher.name}`}
                  src={teacher.imgSrc}
                  className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <p className="text-xl font-bold text-white sm:text-2xl">{teacher.name}</p>
                  <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                      className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <p className="text-sm text-white">
                        {teacher.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JurusanPPLG;
