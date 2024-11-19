"use client";

const Struktur = () => {
  return (
    <section
      id="struktur"
      className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-900 text-white flex flex-col justify-center items-center px-6 py-12"
    >
      {/* Header Utama */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider text-center mb-10">
        Perkenalan <span className="text-blue-300">Kelas PPLG</span>
      </h1>

      {/* Tentang Kelas */}
      <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg backdrop-blur-lg max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-blue-300 mb-6">
          Selamat Datang di Kelas PPLG SMKN 21 Jakarta
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Kami adalah siswa <span className="font-bold text-blue-300">Kelas PPLG</span>, 
          bagian dari SMKN 21 Jakarta. Kami belajar dan berkarya di bidang 
          <span className="font-bold text-blue-300"> Pengembangan Perangkat Lunak dan Gim</span>.
          Dengan penuh semangat, kami mengembangkan kemampuan teknis, kreativitas, dan kerja tim.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Visi kami adalah menciptakan solusi inovatif melalui teknologi, dan misi kami 
          adalah terus belajar, tumbuh, dan memberi dampak positif bagi masyarakat.
        </p>
      </div>

      {/* Motto dan Semangat */}
      <div className="bg-white bg-opacity-10 rounded-xl p-8 shadow-lg backdrop-blur-lg max-w-4xl mt-10">
        <h3 className="text-2xl font-bold text-blue-300 mb-6">
          Motto Kami
        </h3>
        <p className="text-lg md:text-xl leading-relaxed text-center">
          <span className="italic font-bold text-blue-300">
            &quot;Belajar, Berkarya, dan Berinovasi Demi Masa Depan yang Lebih Baik.&quot;
          </span>
        </p>
      </div>
    </section>
  );
};

export default Struktur;
