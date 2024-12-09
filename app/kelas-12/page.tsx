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
            src="/12.png" // Ganti dengan foto kelas
            alt="Foto Kelas"
            className="w-full h-80 object-cover rounded-lg shadow-lg transform transition duration-500 group-hover:scale-105"
          />
          <a
            href="https://www.instagram.com/d.sonere/" // Ganti dengan link IG kelas
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
          <li>Karena akuh maw jadi hengker NASA (zahir sang sepuh).</li>
              <li>pelarian setelah ditolak dkv (jose).</li>
              <li>Iseng(Si Tamvan kls 12).</li>
              <li>karna gabut().</li>
              <li>karna saya sangat antusias dengan teknologi().</li>
              <li>karna gua ganteng().</li>
              <li>karna gua pengen().</li>
              <li>karna gua pengen jadi programer().</li>
              <li>karna mau dapet duit.</li>
              <li>karna saya ingin tahu cara membuat game.</li>
              <li>Karena keterpaksaan dan sekarang menjadi biasa.</li>
              <li>karena tertarik dengan coding terutama membuat web.</li>
              <li>aku suka coding bg.</li>
              <li>Karena ingin masuk sebagai programer.</li>
              <li>Karena peluang karier di berbagai bidang teknologi, seperti developer software, game, dan web, sangat besar. Selain itu, PPLG memberikan kesempatan untuk meningkatkan wawasan dan keterampilan, mulai dari mempelajari coding, desain, hingga pengembangan teknologi secara mendalam dan terstruktur..</li>

          </ul>
        </div>

        {/* Card Cita-Cita Kelas 10 */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Cita-Cita dari Kelas 12</h3>
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
