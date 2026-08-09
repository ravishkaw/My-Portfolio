import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub } from "react-icons/fa";

import useFetchProjects from "./FetchProjects";
import ProjectCard from "./ProjectCard";
import useReveal from "../../hooks/useReveal";
import "./Projects.css";

const Projects = () => {
  const { loading, error, projects } = useFetchProjects("portfolioHomeProjects");
  useReveal([loading, projects.length]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head projects-head reveal">
          <div>
            <p className="section-eyebrow">Work</p>
            <h2 className="section-title">Featured projects</h2>
            <p className="section-subtitle">
              A selection of things I&apos;ve designed, built and shipped.
            </p>
          </div>
          <Link to="/projects" className="btn btn-ghost projects-head-cta">
            All projects <FaArrowRight />
          </Link>
        </div>

        {loading ? (
          <div className="loading" />
        ) : error || projects.length === 0 ? (
          <div className="card projects-empty">
            <p>
              {error
                ? "Projects couldn't be loaded right now."
                : "No projects published yet."}{" "}
              You can browse my code on GitHub in the meantime.
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

export default Projects;
