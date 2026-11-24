import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import useFetchProjects from "../../components/Projects/FetchProjects";
import ProjectCard from "../../components/Projects/ProjectCard";
import useReveal from "../../hooks/useReveal";
import usePageMeta from "../../hooks/usePageMeta";
import "../../components/Projects/Projects.css";
import "./Projects.css";

const ProjectsPage = () => {
  const { loading, projects } = useFetchProjects("projects");
  useReveal([loading, projects.length]);
  usePageMeta({
    title: "Projects - Ravishka Wijerathne",
    description:
      "A complete archive of software projects built by Ravishka Wijerathne, from full-stack applications to enterprise integrations.",
    path: "/projects",
  });

  return (
    <section className="section page-section">
      <div className="container">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back home
        </Link>

        <div className="section-head">
          <p className="section-eyebrow">Archive</p>
          <h1 className="section-title">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="section-subtitle">
            Everything I&apos;ve architected, built, and shipped so far.
          </p>
        </div>

        {loading ? (
          <div className="loading" />
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
