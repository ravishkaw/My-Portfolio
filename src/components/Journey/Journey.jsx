import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";
import { timeline } from "../../data";
import "./Journey.css";

const typeIcon = {
  work: <FaBriefcase />,
  education: <FaGraduationCap />,
  certification: <FaCertificate />,
};

const Journey = () => {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Journey</p>
          <h2 className="section-title">Experience &amp; education</h2>
          <p className="section-subtitle">
            The milestones that got me here - most recent first.
          </p>
        </div>

        <ol className="timeline">
          {timeline.map(({ id, dateLabel, title, org, type, description }) => (
            <li key={id} className={`timeline-item reveal timeline-${type}`}>
              <span className="timeline-marker">{typeIcon[type]}</span>
              <div className="card timeline-card">
                <span className="timeline-date">{dateLabel}</span>
                <h3 className="timeline-title">{title}</h3>
                <p className="timeline-org">{org}</p>
                <p className="timeline-desc">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Journey;
