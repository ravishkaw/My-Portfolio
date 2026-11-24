import PropTypes from "prop-types";
import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";

const ProjectCard = ({ title, url, img, description, tags = [] }) => {
  let hostLabel = "github.com/ravishkaw";
  try {
    if (url) {
      const parsed = new URL(url);
      hostLabel = parsed.hostname.replace(/^www\./, "");
    }
  } catch {
    /* keep default */
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card project-card reveal is-visible"
    >
      {/* Browser Window Top Chrome */}
      <div className="project-chrome" aria-hidden="true">
        <div className="project-chrome-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="project-chrome-url">{hostLabel}</span>
        <span className="project-chrome-arrow">
          <FaArrowUpRightFromSquare />
        </span>
      </div>

      <div className="project-thumb">
        {img ? (
          <img src={img} alt={`Screenshot of ${title}`} loading="lazy" />
        ) : (
          <div className="project-thumb-fallback">
            <div className="project-thumb-grid" aria-hidden="true" />
            <div className="project-thumb-icon">
              <FaCode />
            </div>
            <span className="project-thumb-label">
              {tags[0] || "Engineering"}
            </span>
          </div>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        {description && <p className="project-desc">{description}</p>}
        {tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
