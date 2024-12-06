"use client";

import Image from "next/image";
import { useState } from "react";

interface Person {
  id: number;
  name: string;
  role: string;
  bio: string;
  instagram: string;
  image: string;
}

const dataStruktur: Person[] = [
  {
    id: 1,
    name: "Ketua Kelas",
    role: "Ketua",
    bio: "Saya adalah Ketua Kelas PPLG dengan semangat untuk memimpin dan memberikan yang terbaik.",
    instagram: "https://instagram.com/ketua",
    image: "/images/ketua.jpg",
  },
  {
    id: 2,
    name: "Wakil Ketua",
    role: "Wakil Ketua",
    bio: "Sebagai Wakil Ketua, saya membantu ketua dalam berbagai tugas kelas.",
    instagram: "https://instagram.com/wakil",
    image: "/images/wakil.jpg",
  },
  {
    id: 3,
    name: "Sekretaris",
    role: "Sekretaris",
    bio: "Saya bertanggung jawab untuk mencatat segala kegiatan kelas.",
    instagram: "https://instagram.com/sekretaris",
    image: "/images/sekretaris.jpg",
  },
  {
    id: 4,
    name: "Bendahara",
    role: "Bendahara",
    bio: "Saya mengelola keuangan kelas dengan transparan.",
    instagram: "https://instagram.com/bendahara",
    image: "/images/bendahara.jpg",
  },
];

const StrukturKelas = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
  };

  const closeModal = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-900 text-white flex flex-col items-center justify-center py-10">
      <h1 className="text-4xl font-bold mb-8">Struktur Kelas PPLG</h1>

      {/* Daftar Anggota */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {dataStruktur.map((person) => (
          <div
            key={person.id}
            className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg text-center hover:bg-opacity-20 cursor-pointer"
            onClick={() => handlePersonClick(person)}
          >
            <Image
              src={person.image}
              alt={person.name}
              width={100}
              height={100}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-bold">{person.name}</h3>
            <p className="text-blue-300">{person.role}</p>
          </div>
        ))}
      </div>

      {/* Modal Biodata */}
      {selectedPerson && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Tutup modal jika area luar modal diklik
        >
          <div
            className="bg-white text-black rounded-lg p-6 w-11/12 max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup jika diklik di dalamnya
          >
            {/* Tombol Close */}
            <button
              className="absolute top-4 right-4 text-gray-500 text-2xl font-bold hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Konten Modal */}
            <div className="text-center">
              <Image
                src={selectedPerson.image}
                alt={selectedPerson.name}
                width={120}
                height={120}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-2xl font-bold">{selectedPerson.name}</h3>
              <p className="text-gray-700">{selectedPerson.role}</p>
              <p className="mt-4">{selectedPerson.bio}</p>
              <a
                href={selectedPerson.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
              >
                Kunjungi Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StrukturKelas;
