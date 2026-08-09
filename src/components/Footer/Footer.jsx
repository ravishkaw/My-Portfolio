import { Link } from "react-router-dom";
import { HiArrowUp } from "react-icons/hi";
// import { FaRegCopy, FaCheck } from "react-icons/fa";
// import { useState } from "react";

import { navLinks, profile, socialLinks } from "../../data";
import SectionLink from "../SectionLink";
import "./Footer.css";

const Footer = () => {
  //  const [copied, setCopied] = useState(false);

  //  const copyEmail = async () => {
  //    try {
  //      await navigator.clipboard.writeText(profile.email);
  //      setCopied(true);
  //      setTimeout(() => setCopied(false), 2000);
  //    } catch {
  //      window.location.href = `mailto:${profile.email}`;
  //    }
  //  };
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Identity */}
          <div className="footer-about">
            <Link to="/" className="brand footer-logo">
              <span className="brand-mark">RW</span>
              <span className="brand-name">{profile.name}</span>
            </Link>
            <p className="footer-blurb">
              {profile.role} at {profile.company}. Building software across the
              stack from {profile.location}.
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
                <Link to="/achievements">Achievements</Link>
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
            Designed &amp; built with React, Claude and a lot of coffee.
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
