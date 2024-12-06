import React from "react";

const KenapaPilihPPLG = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <h2 className="text-center text-4xl font-extrabold text-blue-400 mb-12">
        Kenapa Memilih Jurusan PPLG?
      </h2>
      
      <div className="container mx-auto px-6 md:px-12 space-y-12">
        {/* Card untuk Kenapa Memilih PPLG */}
        <div className="relative group">
          <img
            src="/10.jpg" // Ganti dengan foto kelas
            alt="Foto Kelas"
            className="w-full h-80 object-cover rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105"
          />
          <a
            href="https://www.instagram.com/epplg21_/" // Ganti dengan link IG kelas
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-white text-2xl font-semibold">IG Kelas</span>
          </a>
        </div>

        {/* Card Alasan Kenapa Memilih PPLG */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Alasan Memilih PPLG</h3>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>Karna gaji nya umr (anomali).</li>
            <li>Karna kepencet (anomali).</li>
            <li>Karna ingin menggali teknologi (anomali).</li>
            <li>Karna gabut (anomali).</li>
            <li>Karna saya sangat antusias dengan teknologi (anomali).</li>
            <li>Karna gua ganteng (Anomali).</li>
            <li>Karna gua pengen (anomali).</li>
            <li>Karna gua pengen jadi programer (anomali).</li>
            <li>Karna mau dapet duit (anomali).</li>
            <li>Karna saya ingin tahu cara membuat game (anomali).</li>
          </ul>
        </div>

        {/* Card Cita-Cita Kelas 10 */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Cita-Cita dari Kelas 10</h3>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>Menjadi programmer sukses.</li>
            <li>Menjadi ahli di bidang teknologi informasi.</li>
            <li>Ingin membuat game yang populer.</li>
            <li>Ingin bekerja di perusahaan teknologi besar.</li>
            <li>Menciptakan startup teknologi.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KenapaPilihPPLG;
