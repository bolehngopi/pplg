"use client";

import React from "react";

const Projects: React.FC = () => {
  const kelas10Projects = [
    {
      name: "Kasir",
      owner: "Huga Ghaisan Syahputra",
      description: "Kasir Dekstop",
      image: "/huga.jpg", // Pastikan file gambar tersedia di direktori public
      link: "", // Link dapat ditambahkan nanti
    },
    {
      name: "Sistem Kasir Desktop",
      owner: "Dimas Syahreza",
      description: "Aplikasi kasir sederhana berbasis desktop",
      image: "/dmas.jpg", // Pastikan file gambar tersedia di direktori public
      link: "", // Link dapat ditambahkan nanti
    },
    {
      name: "Portofolio",
      owner: "Habibi",
      description: "Portofolio",
      image: "/bibi.jpg", // Tambahkan gambar
      link: "", // Link dapat ditambahkan nanti
    },
    {
      name: "Sistem Kasir Desktop",
      owner: "Muhammad Fathurrahman Wahid",
      description: "Aplikasi kasir sederhana berbasis desktop",
      image: "/fathr.jpg", // Tambahkan gambar
      link: "", // Link dapat ditambahkan nanti
    },
    {
      name: "Cyber",
      owner: "Magfi Adi Radza Putra",
      description: "pico ctf",
      image: "/magfi.jpg", // Tambahkan gambar
      link: "", // Link dapat ditambahkan nanti
    },
    {
      name: "Game Unity",
      owner: "Muhammad Fathurrahman Wahid",
      description: "Game sederhana",
      image: "/tur.jpg", // Tambahkan gambar
      link: "", // Link dapat ditambahkan nanti
    },
    {
      name: "Sistem Kasir Desktop",
      owner: "Charissa Chartalia Chiaravita",
      description: "Aplikasi kasir sederhana berbasis desktop",
      image: "/charisa.jpg", // Tambahkan gambar
      link: "", // Link dapat ditambahkan nanti
    },
    {
      name: "Sistem Kasir Desktop",
      owner: "Fadhil Danendra Hadie Brata",
      description: "Aplikasi kasir sederhana berbasis desktop",
      image: "/fadhli.jpg", // Tambahkan gambar
      link: "", // Link dapat ditambahkan nanti
    },
    {
      name: "Sistem Kasir Desktop",
      owner: "Earlyta Dwi Anggraeni",
      description: "Aplikasi kasir sederhana berbasis desktop",
      image: "/dwi.jpg", // Tambahkan gambar
      link: "", // Link dapat ditambahkan nanti
    },
    {
      name: "Sistem Kasir Desktop",
      owner: "Raisya Kamilah",
      description: "Aplikasi kasir sederhana berbasis desktop",
      image: "/kamil.jpg", // Tambahkan gambar
      link: "", // Link dapat ditambahkan nanti
    },
  ];

  const kelas11Projects = [
    {
      name: "Portofolio",
      owner: "Ahmad Habibi Arouf",
      description: "Website Portofolio",
      image: "/bie.png",
      link: "https://abieport.vercel.app/", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Fajar Andhika",
      description: "Website Portofolio",
      image: "/fajar.png",
      link: "https://fan-png.vercel.app/", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Antonius i wayan ",
      description: "Game Platformer",
      image: "/jri.png",
      link: "https://portofolio-pink-three.vercel.app/", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Alfat Ghifary",
      description: "Website Portofolio",
      image: "/pat.png",
      link: "https://portofolio-sederhana.netlify.app/", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Adrian Adiputra",
      description: "Website Portofolio",
      image: "/dri.png",
      link: "https://myportfolioadrian.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaYyFV6wNi_zWTondsiX3UJYQeOSHW9RFAG3bmGuK-qL-K8b9krHPSqHuio_aem_VnfAA6RkZ_pgXIv40FjUHQ",
    },
    {
      name: "Portofolio",
      owner: "Garuda putra ",
      description: "Website Portofolio",
      image: "/gar.png",
      link: "https://portfolio-garuda-putera-eko.vercel.app/",
    },
    {
      name: "Portofolio",
      owner: "Sami Athari Zahid",
      description: "Website Portofolio",
      image: "/sam.png",
      link: "https://portofolio-psi-umber.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAablKjeuhK6cCeawC1zWN1FPLA05cgwcSB4VoMIefGqLC70K1RP6In3lqDA_aem_mlz0SDu2TU1Dv1vn9Egj8g", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Muhammad Al Mahdi",
      description: "Game platformer",
      image: "/an.png",
      link: "https://portofolio-eight-snowy.vercel.app/", // Link ke Vercel
    },
    {
      name: "Portofolio",
      owner: "Rezezi Axcel",
      description: "Website Portofolio",
      image: "/sel.png",
      link: "hhttps://portofolioaxcel.vercel.app/",// Link ke Vercel
    },
    {
      name: "Game",
      owner: "Dwi Wahyu",
      description: "Game platformer",
      image: "/dan.png",
      link: "https://protofolio-web-w8f3.vercel.app/?fbclid=PAZXh0bgNhZW0CMTEAAaaKmzDGYAQ9DCeczSiXG2-kVEaiGsdQxjLiZKGv4gmuTMU3ZTPV3tWEtf8_aem_UxERXumydGYI3dVX-gl_2Q",// Link ke Vercel
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12 space-y-16">
        <h1 className="text-5xl font-extrabold text-center text-blue-400">
          Proyek Siswa
        </h1>
        <p className="text-center text-lg text-gray-300 mb-8">
          Berikut adalah beberapa hasil proyek luar biasa yang telah dikerjakan oleh siswa kami. Klik tombol Lihat Proyek untuk melihat hasilnya langsung di Vercel!
        </p>

        {/* Kelas 10 Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-blue-400 mb-6">
            Kelas 10
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {kelas10Projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover rounded-t-xl"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                    {project.name}
                  </h2>
                  <p className="text-lg text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-400">Pemilik: {project.owner}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
                    >
                      Lihat Proyek
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kelas 11 Projects */}
        <div className="my-8 text-center">
          <h2 className="text-3xl font-semibold text-blue-400 mb-6">
            Kelas 11
          </h2>
          <div className="border-t-4 border-blue-400 mx-auto w-1/2 mb-8"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {kelas11Projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.name}
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-gray-400">Pemilik: {project.owner}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
                >
                  Lihat Proyek
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
