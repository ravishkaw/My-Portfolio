import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

// Pages
import ProjectsPage from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="main-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Skills />
                  <Projects />
                  <About />
                </>
              }
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact-me" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
