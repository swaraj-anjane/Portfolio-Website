import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";
import LoadingScreen from "./components/loading-screen";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <LoadingScreen />
      <Footer />
    </div>
  );
}

export default App;


