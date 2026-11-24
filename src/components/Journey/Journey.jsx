import { useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaCheck,
} from "react-icons/fa";
import { timeline } from "../../data";
import useReveal from "../../hooks/useReveal";
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

  useReveal([filter]);

  const counts = {
    all: timeline.length,
    work: timeline.filter((i) => i.type === "work").length,
    education: timeline.filter(
      (i) => i.type === "education" || i.type === "certification"
    ).length,
  };

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
              Career progression, engineering roles, and academic foundations.
            </p>
          </div>

          <div
            className="timeline-filters"
            role="tablist"
            aria-label="Filter milestones"
          >
            <button
              type="button"
              role="tab"
              aria-selected={filter === "all"}
              className={`timeline-filter-btn ${
                filter === "all" ? "is-active" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All <span className="timeline-filter-count">{counts.all}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === "work"}
              className={`timeline-filter-btn ${
                filter === "work" ? "is-active" : ""
              }`}
              onClick={() => setFilter("work")}
            >
              Experience{" "}
              <span className="timeline-filter-count">{counts.work}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filter === "education"}
              className={`timeline-filter-btn ${
                filter === "education" ? "is-active" : ""
              }`}
              onClick={() => setFilter("education")}
            >
              Education &amp; Certs{" "}
              <span className="timeline-filter-count">{counts.education}</span>
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
              <li
                key={id}
                className={`timeline-item reveal is-visible timeline-${type} ${
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
