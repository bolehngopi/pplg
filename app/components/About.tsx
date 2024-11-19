// pages/about.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-900 text-white flex flex-col justify-center items-center px-6 py-12"
    >
      {/* Gambar dengan hover efek */}
      <div className="relative group w-full max-w-lg mb-8">
        <Image
          src="/pplg.jpg"
          alt="Kelas PPLG"
          width={500}
          height={300}
          className="w-full rounded-lg shadow-lg object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
          <p className="text-white text-lg mb-4">Ikuti kami di Instagram!</p>
          <a
            href="https://www.instagram.com/pplgclassf_/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-400 transition duration-300"
          >
            Lihat Instagram
          </a>
        </div>
      </div>

      {/* Judul Section */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider text-center mb-8">
        Tentang <span className="text-blue-300">Kelas PPLG</span>
      </h1>

      {/* Container Konten */}
      <div className="max-w-4xl bg-white bg-opacity-10 rounded-xl p-8 shadow-lg backdrop-blur-lg">
        <p className="text-lg md:text-xl leading-relaxed text-center mb-6">
          ✨ Selamat datang di{" "}
          <span className="text-blue-300 font-bold">Kelas PPLG</span> SMK 21
          Jakarta! Kami adalah komunitas belajar yang berfokus pada{" "}
          <i>Pengembangan Perangkat Lunak dan Gim</i>. Di sini, kami belajar,
          menciptakan, dan berinovasi untuk menjawab tantangan dunia teknologi
          masa depan.
        </p>

        {/* Paragraf 2 */}
        <p className="text-lg md:text-xl leading-relaxed text-center mb-6">
          🔧 Dengan semangat kebersamaan dan kreativitas, kami mendalami
          teknologi modern seperti:{" "}
          <span className="text-blue-300 font-bold">Backend Development</span>,{" "}
          <span className="text-blue-300 font-bold">Pengembangan Gim</span>, dan{" "}
          <span className="text-blue-300 font-bold">Pemrograman Web</span>.
        </p>

        {/* Penutup */}
        <p className="text-lg md:text-xl leading-relaxed text-center mb-6">
          🚀 Mari bersama-sama menciptakan masa depan teknologi yang cerah dan
          penuh inovasi! Salam hangat dari kami,{" "}
          <span className="text-blue-300 font-bold">
            Kelas PPLG SMK 21 Jakarta
          </span>
          .
        </p>

        {/* Tombol Arahkan ke Struktur Kelas */}
        <div className="text-center">
          <button
            onClick={() => router.push("/struktur")}
            className="bg-blue-500 text-white py-2 px-6 rounded-xl hover:bg-blue-400 transition duration-300"
          >
            Lihat lebih banyak
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
