import { useEffect } from "react";
import { achievementsData } from "../../data";
import "./Achievements.css";

const Achievements = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="sections">
      <h1 className="title">Achievements</h1>
      <div className="title-underline"></div>
      <div className="timeline">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <h3>{achievement.date}</h3>
              <h4>{achievement.title}</h4>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
