import useFetchProjects from "./FetchProjects";
import "./Projects.css";

const Projects = () => {
  const { loading, projects } = useFetchProjects("portfolioHomeProjects");

  return (
    <section className="sections">
      <h1 className="title">Projects</h1>
      <div className="title-underline"></div>

      {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="home-projects">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
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
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
