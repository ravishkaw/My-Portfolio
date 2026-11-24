import { Typewriter } from "react-simple-typewriter";
import SectionLink from "../SectionLink";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";

import { profile, socialLinks } from "../../data";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="section hero" id="home">
      {/* Ambient spotlight & orbital rings */}
      <div className="hero-spotlight" aria-hidden="true">
        <div className="hero-aurora hero-aurora-1" />
        <div className="hero-aurora hero-aurora-2" />
        <div className="hero-ring hero-ring-1" />
        <div className="hero-ring hero-ring-2" />
      </div>

      <div className="container hero-center">
        <div className="hero-status-pill">
          <span className="hero-status-pulse" aria-hidden="true" />
          <span>{profile.role}</span>
          <span className="hero-status-sep">·</span>
          <span className="hero-status-org">{profile.company}</span>
        </div>

        <h1 className="hero-title">
          Hi, I&apos;m <span className="gradient-text">Ravishka</span>.
          <br />
          Software Engineer.
        </h1>

        <p className="hero-desc">{profile.tagline}</p>

        <div className="hero-typer" aria-label="What I do">
          <span className="hero-typer-prompt">$</span>
          <span className="hero-typer-cmd">focus:</span>
          <span className="hero-typer-word">
            <Typewriter
              words={[
                "build modern web applications",
                "architect clean, scalable APIs",
                "integrate enterprise ERP systems",
                "ship reliable production software",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={55}
              deleteSpeed={32}
              delaySpeed={2000}
            />
          </span>
        </div>

        <div className="hero-actions">
          <SectionLink section="projects" className="btn btn-primary">
            View my work <FaArrowRight />
          </SectionLink>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Download resume <FaDownload />
          </a>
        </div>

        {/* Sleek Horizontal Glass Bar */}
        <div className="hero-glass-bar">
          <div className="hero-bar-item">
            <span className="hero-bar-label">Role</span>
            <span className="hero-bar-val">Software Engineer</span>
          </div>

          <span className="hero-bar-divider" aria-hidden="true" />

          <div className="hero-bar-item">
            <span className="hero-bar-label">Education</span>
            <span className="hero-bar-val">BIT (UOC)</span>
          </div>

          <span className="hero-bar-divider" aria-hidden="true" />

          <div className="hero-bar-item">
            <span className="hero-bar-label">Based in</span>
            <span className="hero-bar-val">{profile.location}</span>
          </div>

          <span className="hero-bar-divider" aria-hidden="true" />

          <ul className="hero-socials">
            {socialLinks.map(({ id, name, url, icon }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${name} profile`}
                  title={name}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SectionLink
        section="about"
        className="hero-scroll"
        aria-label="Scroll to about"
      >
        <HiOutlineChevronDown />
      </SectionLink>
    </section>
  );
};

export default Hero;
