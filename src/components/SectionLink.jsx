import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Links to a section of the home page without writing a fragment into the URL.
 *
 * Smoothly utilizes Lenis if active, falling back to window.scrollTo / scrollIntoView.
 */
const SectionLink = ({ section, className, children, onNavigate, ...rest }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = (event) => {
    // Let the browser handle anything that is not a plain left click.
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    if (pathname === "/") {
      if (section === "home") {
        if (window.__lenis) {
          window.__lenis.scrollTo(0, { duration: 1.15 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        const target = document.getElementById(section);
        if (target) {
          if (window.__lenis) {
            window.__lenis.scrollTo(target, { offset: -65, duration: 1.15 });
          } else {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    } else {
      navigate("/", { state: { scrollTo: section } });
    }

    onNavigate?.();
  };

  return (
    <a
      href={section === "home" ? "/" : `/#${section}`}
      className={className}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
};

SectionLink.propTypes = {
  section: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  onNavigate: PropTypes.func,
};

export default SectionLink;
