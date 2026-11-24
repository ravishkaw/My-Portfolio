import {
  FaCode,
  FaLayerGroup,
  FaDatabase,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";
import { skillGroups } from "../../data";
import "./Skills.css";

const groupIcons = {
  1: <FaCode />,
  2: <FaLayerGroup />,
  3: <FaDatabase />,
  4: <FaProjectDiagram />,
  5: <FaTools />,
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head reveal" data-watermark="02 // STACK">
          <p className="section-eyebrow">
            <span className="section-index">02</span> &#47;&#47; Toolbox
          </p>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Languages, frameworks, databases, and enterprise platforms I use to
            ship production software.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map(({ id, group, domain, items }, idx) => (
            <div key={id} className="card skill-group reveal">
              <div className="skill-group-head">
                <div className="skill-group-title-wrap">
                  <span className="skill-group-icon">
                    {groupIcons[id] || <FaCode />}
                  </span>
                  <div>
                    <span className="skill-domain-tag">{domain}</span>
                    <h3 className="skill-group-title">{group}</h3>
                  </div>
                </div>
                <span className="skill-count-pill">0{idx + 1}</span>
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
