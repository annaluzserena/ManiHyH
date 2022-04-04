import './assets/css/app.css';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Products from "./components/Products";
import Catalogue from "./components/Catalogue";
import CarouselHolder from './components/Carousel';
import Download from "./components/Download";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const catalogueRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
        <Main/>
        <About/>
        <Products/>
        <Catalogue/>
        <CarouselHolder/>
        <Download/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
