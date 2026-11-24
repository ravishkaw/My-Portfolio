import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaCheck,
} from "react-icons/fa";

import { timeline } from "../../data";
import useReveal from "../../hooks/useReveal";
import usePageMeta from "../../hooks/usePageMeta";
import "../../components/Journey/Journey.css";
import "../Projects/Projects.css";

const typeIcon = {
  work: <FaBriefcase />,
  education: <FaGraduationCap />,
  certification: <FaCertificate />,
};

const Achievements = () => {
  useReveal();
  usePageMeta({
    title: "Achievements & Experience - Ravishka Wijerathne",
    description:
      "Software Engineer milestones, enterprise SAP integrations, backend architectures, and Bachelor of Information Technology degree from UOC.",
    path: "/achievements",
  });

  return (
    <section className="section page-section">
      <div className="container">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back home
        </Link>

        <div className="section-head">
          <p className="section-eyebrow">Milestones</p>
          <h1 className="section-title">Achievements &amp; Career</h1>
          <p className="section-subtitle">
            Degrees, certifications, engineering roles, and promotions.
          </p>
        </div>

        <ol className="timeline">
          {timeline.map(
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
                      <h2 className="timeline-title">{title}</h2>
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

export default Achievements;
