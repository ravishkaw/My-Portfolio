import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/logo.svg";
import { FaBars, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowLinks(false); // Close the menu if it’s open
  };

  const getContainerClass = () =>
    showLinks
      ? "nav-links-container nav-show-container"
      : "nav-links-container";

  return (
    <header>
      <nav className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button
            onClick={handleClick}
            className="nav-toggle-button"
            aria-expanded={showLinks}
          >
            <FaBars />
          </button>
        </div>

        <div className={getContainerClass()}>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="nav-link"
                onClick={() => {
                  setShowLinks(false);
                  handleHomeClick();
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact-me"
                className="nav-link"
                onClick={() => setShowLinks(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/path/to/resume.pdf"
                download
                className="btn nav-btn-resume"
              >
                Resume <FaDownload />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
