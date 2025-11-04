import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SkillsAchievements from "./components/SkillsAchievements/SkillsAchievements";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

// Pages
import ProjectsPage from "./pages/Projects/Projects";
import Achievements from "./pages/Achievements/Achievements";

const App = () => {
  return (
    <HashRouter>
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
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </HashRouter>
  );
};

export default App;
