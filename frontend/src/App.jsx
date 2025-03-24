import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Experience from "./components/Experience"
import Travelgallery from "./components/Travelgallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
const bgColor = {
  background: "linear-gradient(to bottom, #ffffff, #f0f2f5)"
};

function App() {
  return (
    <div style={bgColor}>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Travelgallery />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;