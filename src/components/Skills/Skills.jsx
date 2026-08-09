import { skillGroups } from "../../data";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Toolbox</p>
          <h2 className="section-title">Skills &amp; technologies</h2>
          <p className="section-subtitle">
            What I reach for when building - and what I&apos;m still sharpening.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map(({ id, group, items }) => (
            <div key={id} className="card skill-group reveal">
              <h3 className="skill-group-title">{group}</h3>
              <ul className="skill-list">
                {items.map(({ name, icon }) => (
                  <li key={name} className="skill-chip">
                    <span className="skill-icon">{icon}</span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
