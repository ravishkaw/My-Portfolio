import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Links to a section of the home page without writing a fragment into the URL.
 *
 * A normal click is intercepted and turned into a scroll, so browsing the
 * one-page content never fills the address bar (or the history) with
 * /#about, /#skills and so on. The href is still a real URL, so
 * middle-click, ctrl-click and "open in new tab" keep working - those load
 * the page fresh, where ScrollManager honours the fragment.
 *
 * From another route (/projects, /achievements) it navigates home first and
 * passes the target section through router state.
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
      const target = document.getElementById(section);
      if (target && section !== "home") {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
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
