"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
      className="relative min-h-screen bg-gray-900 text-white"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/pro-background.jpg")',
          filter: "brightness(0.5) blur(2px)",
        }}
      />

      <div
        className={`relative z-10 transition-all duration-1000 ease-in-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 space-y-16">
          {/* Judul Halaman */}
          <h2 className="text-center text-5xl md:text-6xl font-extrabold mb-12 tracking-wide text-gray-100 drop-shadow-lg">
            Tentang <span className="text-blue-300">PPLG</span>
          </h2>

          {/* Apa itu PPLG */}
          <div className="relative group bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 xl:p-12 shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-blue-300 mb-6">
              Apa itu PPLG?
            </h3>
            <p className="text-lg text-gray-300">
              PPLG (Pengembangan Perangkat Lunak dan Gim) adalah program
              pendidikan berbasis teknologi yang mempersiapkan siswa untuk
              menjadi inovator masa depan dalam perangkat lunak dan gim.
            </p>
          </div>

          {/* Visi & Misi */}
          <div className="relative bg-blue-700 to-gray-900 rounded-2xl p-6 xl:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <h3 className="text-center text-4xl font-bold text-white mb-10">
              <span className="text-blue-300">Visi</span> & Misi Kami
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Visi */}
              <div>
                <h4 className="text-3xl font-semibold text-blue-300 mb-4">
                  Visi
                </h4>
                <p className="text-lg text-gray-300">
                  Menjadi program pendidikan terbaik dalam pengembangan perangkat
                  lunak dan gim yang melahirkan talenta unggul dan inovatif.
                </p>
              </div>

              {/* Misi */}
              <div>
                <h4 className="text-3xl font-semibold text-blue-300 mb-4">
                  Misi
                </h4>
                <ul className="list-disc pl-6 space-y-4 text-lg text-gray-300">
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

          {/* Kenapa Memilih PPLG */}
          <div className="relative group bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 xl:p-12 shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-blue-300 mb-6">
              Kenapa Memilih PPLG?
            </h3>
            <p className="text-lg text-gray-300">
              PPLG menawarkan pendidikan yang berorientasi pada proyek, memungkinkan
              siswa untuk mempelajari teknologi terkini dan membangun masa depan
              yang cerah di bidang teknologi.
            </p>
            <div className="mt-6 flex flex-wrap space-x-4 justify-center items-center gap-6">
              <Link
                href={'/kelas-10'}
                className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-full shadow-md hover:bg-gray-700 transition"
              >
                Lihat Kelas 10
              </Link>
              <Link
                href={'/kelas-11'}
                className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition"
              >
                Lihat Kelas 11
              </Link>
              <Link
                href={'/kelas-12'}
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition"
              >
                Lihat Kelas 12
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
