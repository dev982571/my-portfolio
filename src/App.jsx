import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Slider from "./components/slider";

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Slider />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  );
}

export default App;