import { Link } from "react-router-dom";
import { FaArrowLeft, FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

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
    title: "Achievements - Ravishka Wijerathne",
    description:
      "Degrees, certifications and professional milestones - including a BIT from the University of Colombo School of Computing, completed in August 2025.",
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
          <h1 className="section-title">Achievements</h1>
          <p className="section-subtitle">
            Degrees, certifications and roles, most recent first.
          </p>
        </div>

        <ol className="timeline">
          {timeline.map(({ id, dateLabel, title, org, type, description }) => (
            <li key={id} className={`timeline-item reveal timeline-${type}`}>
              <span className="timeline-marker">{typeIcon[type]}</span>
              <div className="card timeline-card">
                <span className="timeline-date">{dateLabel}</span>
                <h2 className="timeline-title">{title}</h2>
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

export default Achievements;
