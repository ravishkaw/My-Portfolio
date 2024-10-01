import { useEffect } from "react";
import useFetchProjects from "../../components/Projects/FetchProjects";
import "./Achievements.css";

const Achievements = () => {
  const { loading, projects } = useFetchProjects("projects");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="sections">
      <h1 className="title">Achievements</h1>
      <div className="title-underline"></div>
      <h2 style={{ textAlign: "center", color:"gray" }}>This page is under construction !</h2>

      {/* {loading ? (
        <div className="loading"></div>
      ) : (
        <div className="projects-center">
          {projects.map((project) => {
            const { id, title, url, img } = project;
            return (
              <a
                key={id}
                href={url}
                rel="norefferer"
                target="_blank"
                className="project"
              >
                <img src={img} alt={title} className="img" />
                <h5>{title}</h5>
              </a>
            );
          })}
        </div>
      )} */}
    </section>
  );
};

export default Achievements;
