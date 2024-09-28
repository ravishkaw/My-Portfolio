import { skills, achievements } from "../../data";
import "./SkillsAchievements.css";

const SkillsAchievements = () => {
  return (
    <section className="sections">
      <h1 className="title">My Achievements & Skills</h1>
      <div className="title-underline"></div>

      <div className="skills-achievements-container">
        <div className="achievements-container">
          <h2 className="sub-title">Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement) => {
              const { id, title, description, icon } = achievement;
              return (
                <div key={id} className="achievement-item">
                  <div className="achievement-icon">{icon}</div>
                  <p className="achievement-title">{title}</p>
                  <p className="achievement-description">{description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="skills-container">
          <h2 className="sub-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => {
              const { id, name, icon } = skill;
              return (
                <div key={id} className="skill-item">
                  <div className="skill-icon">{icon}</div>
                  <p className="skill-name">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsAchievements;
