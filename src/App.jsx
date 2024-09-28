import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SkillsAchievements from "./components/SkillsAchievements/SkillsAchievements";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

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
                  <SkillsAchievements />
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
