import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollManager from "./components/ScrollManager";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgressBar from "./components/ScrollProgressBar/ScrollProgressBar";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/Projects/Projects";
import AchievementsPage from "./pages/Achievements/Achievements";
import NotFound from "./pages/NotFound/NotFound";

const App = () => (
  <BrowserRouter>
    <SmoothScroll />
    <ScrollProgressBar />
    <CursorGlow />
    <ScrollManager />
    <Navbar />
    <main id="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
