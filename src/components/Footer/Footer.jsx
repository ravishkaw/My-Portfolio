import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import logo from "../../assets/logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logo} alt="logo" className="nav-logo" />
        <div className="footer-contact">
          <h3>
            Contact{" "}
            <span className="new-window-icon">
              <FaArrowUpRightFromSquare />
            </span>
          </h3>
          <p>
            <a href="mailto:ravishkawj@gmail.com">ravishkawj@gmail.com</a>
          </p>
          <p>
            <a href="tel:+94775048662">+94 77 504 8662</a> {/* Optional */}
          </p>
        </div>

        <div className="footer-social">
          <h3>Follow Me</h3>
          <ul className="social-icons">
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p> &copy; {new Date().getFullYear()} Ravishka Wijerathne</p>
      </div>
    </footer>
  );
};

export default Footer;
