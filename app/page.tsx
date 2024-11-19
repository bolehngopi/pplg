import About from "./components/About";
import Produk from "./components/Produk";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


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
