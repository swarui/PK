import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Experience from "./components/Experience"
import Travelgallery from "./components/Travelgallery"
import Contact from "./components/Contact"
const bgColor = {
  background: "#F0F9F8",
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
    </div>
  );
}

export default App;