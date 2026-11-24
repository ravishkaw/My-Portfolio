import { Link } from "react-router-dom";
import { HiArrowUp } from "react-icons/hi";

import { navLinks, profile, socialLinks } from "../../data";
import SectionLink from "../SectionLink";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  const toTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Identity */}
          <div className="footer-about">
            <Link to="/" className="brand footer-logo">
              <img src={logo} alt="Logo" className="brand-logo" />
              <span className="brand-name">{profile.name}</span>
            </Link>
            <p className="footer-blurb">
              {profile.role} at {profile.company}. Architecting scalable backend
              systems and robust enterprise integrations from {profile.location}.
            </p>
          </div>

          {/* Sitemap */}
          <nav className="footer-col" aria-label="Footer">
            <h2 className="footer-heading">Explore</h2>
            <ul>
              {navLinks.map(({ id, name, section }) => (
                <li key={id}>
                  <SectionLink section={section}>{name}</SectionLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h2 className="footer-heading">More</h2>
            <ul>
              <li>
                <Link to="/projects">All projects</Link>
              </li>
              <li>
                <Link to="/achievements">Achievements &amp; Career</Link>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="footer-col">
            <h2 className="footer-heading">Elsewhere</h2>
            <ul className="footer-social-list">
              {socialLinks.map(({ id, name, url, icon }) => (
                <li key={id}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <span className="footer-social-icon">{icon}</span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </p>
          <p className="footer-built">
            Engineered with modern web architectures and precision.
          </p>
          <button type="button" className="footer-top" onClick={toTop}>
            Back to top <HiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
