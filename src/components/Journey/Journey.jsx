import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
} from "react-icons/fa";
import { timeline } from "../../data";
import "./Journey.css";

const typeIcon = {
  work: <FaBriefcase />,
  education: <FaGraduationCap />,
  certification: <FaCertificate />,
};

// Keep Home concise: show only key badged milestones without full bullets/tags.
const keyMilestones = timeline.filter((item) => item.badge);

const Journey = () => {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div
          className="section-head journey-head reveal"
          data-watermark="02 // JOURNEY"
        >
          <div>
            <p className="section-eyebrow">
              <span className="section-index">02</span> &#47;&#47; Journey
            </p>
            <h2 className="section-title">
              Experience &amp; <span className="gradient-text">Milestones</span>
            </h2>
            <p className="section-subtitle">
              Key engineering roles and academic foundations.
            </p>
          </div>

          <Link to="/achievements" className="btn btn-ghost journey-head-cta">
            Full timeline <FaArrowRight />
          </Link>
        </div>

        <ol className="timeline timeline-compact">
          {keyMilestones.map(
            ({ id, dateLabel, title, org, type, badge, description }) => (
              <li
                key={id}
                className={`timeline-item reveal timeline-${type} ${
                  id === 1 ? "timeline-current" : ""
                }`}
              >
                <span className="timeline-marker">{typeIcon[type]}</span>
                <div className="card timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <span className="timeline-date">{dateLabel}</span>
                      <h3 className="timeline-title">{title}</h3>
                      <p className="timeline-org">{org}</p>
                    </div>
                    {badge && <span className="timeline-badge">{badge}</span>}
                  </div>

                  <p className="timeline-desc">{description}</p>
                </div>
              </li>
            )
          )}
        </ol>
      </div>
    </section>
  );
};

export default Journey;
