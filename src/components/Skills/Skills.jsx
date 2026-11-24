import { skillGroups } from "../../data";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Toolbox</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, and tools I use to build software.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map(({ id, group, domain, items }) => (
            <div key={id} className="card skill-group reveal">
              <div className="skill-group-head">
                <span className="skill-domain-tag">{domain}</span>
                <h3 className="skill-group-title">{group}</h3>
              </div>
              <ul className="skill-list">
                {items.map(({ name, icon }) => (
                  <li key={name} className="skill-chip">
                    <span className="skill-icon">{icon}</span>
                    <span className="skill-name">{name}</span>
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
