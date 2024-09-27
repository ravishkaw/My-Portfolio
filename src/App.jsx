import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="main-container">
          <Hero />
          <Skills />
          <Projects />
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default App;
