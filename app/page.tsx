import About from "./components/About";
import Nav from "./components/Home";
import Footer from "./components/Footer";
import "./globals.css";
import Jurusan from "./components/Jurusan";
import KelasProject from "./components/KelasProject";


const Home = () => {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Jurusan/>
        <KelasProject/>
        <Footer/>
        
        
      </main>
    </div>
  );
};

export default Home;
