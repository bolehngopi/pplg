import { kelas10Projects, kelas11Projects, kelas12Projects } from "@/data";
import { Metadata } from "next";
import React from "react";

const ProjectSection: React.FC<{ title: string; projects: { link?: string; image?: string; name: string; description: string; owner: string; }[] }> = ({ title, projects }) => {
  return (
    <div className="my-8 text-center">
      <h2 className="text-3xl font-semibold text-blue-400 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link || '#'}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">{project.name}</h3>
              <p className="text-lg text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400">Pemilik: {project.owner}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20">
      <div className="container mx-auto px-6 md:px-12 space-y-16">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-400">Proyek Siswa</h1>
          <p className="text-lg text-gray-300 mt-4">
            Berikut adalah beberapa hasil proyek luar biasa yang telah dikerjakan oleh siswa kami. Klik kartu proyek untuk melihat hasilnya langsung di Vercel!
          </p>
        </header>

        <ProjectSection title="Kelas 10" projects={kelas10Projects} />
        <ProjectSection title="Kelas 11" projects={kelas11Projects} />
        <ProjectSection title="Kelas 12" projects={kelas12Projects} />
      </div>
    </div>
  );
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projects",
    description: "Kumpulan project luar biasa yang telah dikerjakan oleh siswa PPLG.",
  };
}

export default Projects;
