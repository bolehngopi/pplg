import About from "./components/About";
import Produk from "./components/Jurusan";
import Nav from "./components/Home";
import Footer from "./components/Footer";
import "./globals.css";


const Home = () => {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Produk />
        <Footer/>
        
        
      </main>
    </div>
  );
};

export default Home;
