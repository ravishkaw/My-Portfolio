import { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaCertificate, FaCheck } from "react-icons/fa";
import { timeline } from "../../data";
import "./Journey.css";

const typeIcon = {
  work: <FaBriefcase />,
  education: <FaGraduationCap />,
  certification: <FaCertificate />,
};

const Journey = () => {
  const [filter, setFilter] = useState("all");

  const filteredTimeline = timeline.filter((item) => {
    if (filter === "work") return item.type === "work";
    if (filter === "education")
      return item.type === "education" || item.type === "certification";
    return true;
  });

  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">Journey</p>
          <h2 className="section-title">Experience &amp; Milestones</h2>
          <p className="section-subtitle">
            Career progression, engineering roles, and academic foundations.
          </p>

          <div className="timeline-filters">
            <button
              type="button"
              className={`timeline-filter-btn ${
                filter === "all" ? "is-active" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All Milestones
            </button>
            <button
              type="button"
              className={`timeline-filter-btn ${
                filter === "work" ? "is-active" : ""
              }`}
              onClick={() => setFilter("work")}
            >
              Work Experience
            </button>
            <button
              type="button"
              className={`timeline-filter-btn ${
                filter === "education" ? "is-active" : ""
              }`}
              onClick={() => setFilter("education")}
            >
              Education &amp; Certs
            </button>
          </div>
        </div>

        <ol className="timeline">
          {filteredTimeline.map(
            ({
              id,
              dateLabel,
              title,
              org,
              type,
              badge,
              description,
              bullets,
              tags,
            }) => (
              <li key={id} className={`timeline-item reveal timeline-${type}`}>
                <span className="timeline-marker">{typeIcon[type]}</span>
                <div className="card timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <span className="timeline-date">{dateLabel}</span>
                      <h3 className="timeline-title">{title}</h3>
                      <p className="timeline-org">{org}</p>
                    </div>
                    {badge && (
                      <span className="timeline-badge">{badge}</span>
                    )}
                  </div>

                  <p className="timeline-desc">{description}</p>

                  {bullets && bullets.length > 0 && (
                    <ul className="timeline-bullets">
                      {bullets.map((bullet, idx) => (
                        <li key={idx} className="timeline-bullet">
                          <FaCheck className="timeline-bullet-icon" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {tags && tags.length > 0 && (
                    <div className="timeline-tags">
                      {tags.map((tag) => (
                        <span key={tag} className="timeline-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
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
