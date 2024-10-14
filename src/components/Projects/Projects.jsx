import { Link } from "react-router-dom";
import useFetchProjects from "./FetchProjects";
import "./Projects.css";

const Projects = () => {
  const { loading, projects } = useFetchProjects("portfolioHomeProjects");

  return (
    <section className="sections" id="projects">
      <h1 className="title">Projects</h1>
      <div className="title-underline"></div>

      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="home-projects">
          {projects.map((project) => (
            <a href={project.url} target="_blank" key={project.id}>
              <div className="project-card">
                <div className="card-img">
                  <img
                    className="project-card-img "
                    src={project.img}
                    alt={project.title}
                  />
                </div>

                <div className="card-info">
                  <h4>{project.title}</h4>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
      <div className="btn-container">
        <Link to="/projects" className="show-more-proj-btn">
          Show More
        </Link>
      </div>
    </section>
  );
};

export default Projects;
