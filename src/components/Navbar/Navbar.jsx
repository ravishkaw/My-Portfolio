import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { navLinks } from "../../data";
import "./Navbar.css";

const Navbar = () => {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="nav-links-container">
      <ul className="nav-links">
        {navLinks.map((link) => {
          const { id, name, url, icon } = link;
          const isHashLink = url.includes("#") && url !== "/";
          const isHome = url === "/";

          return (
            <li key={id}>
              {isHashLink ? (
                <HashLink smooth to={url} className="nav-link">
                  <span className="nav-icon">{icon}</span>
                  <span className="nav-title">{name}</span>
                </HashLink>
              ) : (
                <Link
                  to={url}
                  className="nav-link"
                  onClick={isHome ? handleHomeClick : undefined}
                >
                  <span className="nav-icon">{icon}</span>
                  <span className="nav-title">{name}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
