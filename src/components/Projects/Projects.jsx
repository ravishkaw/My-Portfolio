import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import useFetchProjects from "./FetchProjects";
import ProjectCard from "./ProjectCard";
import useReveal from "../../hooks/useReveal";
import "./Projects.css";

const Projects = () => {
  const { loading, projects } = useFetchProjects("portfolioHomeProjects");
  useReveal([loading, projects.length]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div
          className="section-head projects-head reveal"
          data-watermark="03 // WORK"
        >
          <div>
            <p className="section-eyebrow">
              <span className="section-index">03</span> &#47;&#47; Work
            </p>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              A selection of applications, enterprise integrations, and systems
              I&apos;ve designed, built, and shipped.
            </p>
          </div>
          <Link to="/projects" className="btn btn-ghost projects-head-cta">
            All projects <FaArrowRight />
          </Link>
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

export default Projects;
