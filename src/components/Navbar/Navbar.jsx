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
    setShowLinks(false); 
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
            <li className="nav-link">
              <Link to="/" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/projects"
                onClick={() => {
                  setShowLinks(false);
                  handleHomeClick();
                }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/contact-me" onClick={() => setShowLinks(false)}>
                Contact
              </Link>
            </li>
            <li className="nav-link">
              <button className="btn nav-btn-resume">
                <a href="/path/to/resume.pdf" download>
                  Resume <FaDownload />
                </a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
