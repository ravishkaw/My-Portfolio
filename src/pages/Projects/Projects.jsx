import { Link } from "react-router-dom";
import { FaArrowLeft, FaGithub } from "react-icons/fa";

import useFetchProjects from "../../components/Projects/FetchProjects";
import ProjectCard from "../../components/Projects/ProjectCard";
import useReveal from "../../hooks/useReveal";
import usePageMeta from "../../hooks/usePageMeta";
import "../../components/Projects/Projects.css";
import "./Projects.css";

const ProjectsPage = () => {
  const { loading, error, projects } = useFetchProjects("projects");
  useReveal([loading, projects.length]);
  usePageMeta({
    title: "Projects - Ravishka Wijerathne",
    description:
      "A complete archive of software projects built by Ravishka Wijerathne, from full-stack applications to smaller experiments.",
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
          <h1 className="section-title">All projects</h1>
          <p className="section-subtitle">
            Everything I&apos;ve built and published so far.
          </p>
        </div>

        {loading ? (
          <div className="loading" />
        ) : error || projects.length === 0 ? (
          <div className="card projects-empty">
            <p>
              {error
                ? "Projects couldn't be loaded right now."
                : "No projects published yet."}{" "}
              My code lives on GitHub in the meantime.
            </p>
            <a
              href="https://www.github.com/ravishkaw"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FaGithub /> View GitHub
            </a>
          </div>
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
