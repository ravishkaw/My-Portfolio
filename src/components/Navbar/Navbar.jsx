import { useState } from "react";
import { FaBars } from "react-icons/fa";

import "./Navbar.css";

import logo from "../../assets/logo.svg";
import { FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
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
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>
              <button className="btn nav-btn-resume">
                Resume
                <FaDownload />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
