import PropTypes from "prop-types";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ProjectCard = ({ title, url, img, description, tags = [] }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="card project-card reveal"
  >
    <div className="project-thumb">
      {img ? (
        <img src={img} alt={`Screenshot of ${title}`} loading="lazy" />
      ) : (
        <div className="project-thumb-fallback">{title?.charAt(0)}</div>
      )}
      <span className="project-open">
        <FaArrowUpRightFromSquare />
      </span>
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

ProjectCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default ProjectCard;
