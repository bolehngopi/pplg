import About from "@/components/About";
import Hero from "@/components/Hero";
import "./globals.css";
import Jurusan from "@/components/Jurusan";
import KelasProject from "@/components/KelasProject";


const Home = () => {
  return (
    <>
      <Hero />
      <Jurusan />
      <About />
      <KelasProject />
    </>
  );
};

export default Home;
