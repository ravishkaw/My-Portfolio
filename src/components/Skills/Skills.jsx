import { skills } from "../../data";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="sections">
      <h1 className="title">My Skills</h1>
      <div className="title-underline"></div>

      <div className="skills-container">
        {skills.map((skill) => {
          const { id, name, icon } = skill;
          return <div key={id} className="skill-icon">{icon}</div>;
        })}
      </div>
    </section>
  );
};

export default Skills;
