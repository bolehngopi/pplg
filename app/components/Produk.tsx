import Image from "next/image";

// Define a type for the product data structure
interface Produk {
  id: number;
  title: string;
  description: string;
  image?: string; // Optional since video might not have an image
  video?: string; // Optional since some products have images, others have videos
}

const Produk = () => {
  const produkList: Produk[] = [
    {
      id: 1,
      title: "Gelang Manik-Manik",
      description: "Gelang cantik dari manik-manik berwarna-warni.",
      image: "/1.jpg",  // Pastikan menggunakan path yang benar
    },
    {
      id: 2,
      title: "Tasbih",
      description: "Tasbih yang menarik dengan warna yang menarik.",
      image: "/2.jpg",
    },
    {
      id: 3,
      title: "Gantungan Handphone",
      description: "Gantungan Handphone yang bagus dan menarik untuk di taro di Handphone.",
      image: "/3.jpg",
    },
    {
      id: 4,
      title: "Gelang ",
      description: "Gelang yang menarik dengan warna dasar berwarna pink yang menarik untuk perempuan.",
      image: "/4.jpg",
    },
    {
      id: 5,
      title: "Gantungan ",
      description: "Gantungan yang menarik yang bisa di jadikan sebagai lat gantung seperti kunci dan lain lain nya .",
      image: "/5.jpg",
    },
    {
      id: 6,
      title: "Cuplikan Pembuatan Produk",
      description: "Cuplikan video pembuatan kerajinan tangan.",
      video: "/ppkw.mp4",  // Video khusus pembuatan
    },
  ];

  return (
    <section
      id="produk"
      className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-900 text-white flex flex-col items-center px-6"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider text-center mt-10 mb-8">
        <span className="text-blue-300">Produk</span> Kelas PPLG
      </h1>
      <div className="max-w-4xl bg-white bg-opacity-10 rounded-xl p-6 shadow-lg mb-10 text-center">
        <h2 className="text-3xl font-semibold text-blue-300 mb-4">Tentang Produk</h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Ini adalah beberapa kerajinan yang dibuat oleh anak-anak kelas PPLG{" "}
          <span className="font-bold text-blue-300">pengelolaan dari bahan-bahan dasar</span>.
        </p>
      </div>

      {/* Menampilkan produk gambar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-5xl">
        {produkList.slice(0, 5).map((produk) => (
          <div
            key={produk.id}
            className="bg-white bg-opacity-10 rounded-xl shadow-lg p-4 hover:scale-105 transform transition duration-300"
          >
            <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
              {produk.image && (
                <Image
                  src={produk.image}  // Hanya menampilkan gambar
                  alt={produk.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              )}
            </div>
            <div className="p-4 text-center">
              <h3 className="text-2xl font-bold text-blue-300">{produk.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{produk.description}</p>
            </div>
          </div>
        ))}

        {/* Card khusus untuk video */}
        {produkList.slice(5).map((produk) => (
          <div
            key={produk.id}
            className="bg-white bg-opacity-10 rounded-xl shadow-lg p-4 hover:scale-105 transform transition duration-300"
          >
            <div className="p-4 text-center">
              <h3 className="text-2xl font-bold text-blue-300">{produk.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{produk.description}</p>
            </div>
            {produk.video && (
              <div className="mt-3">
                <video
                  src={produk.video}
                  controls
                  className="rounded-md w-full border-2 border-blue-300"
                  style={{ maxHeight: "300px" }}
                ></video>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produk;
