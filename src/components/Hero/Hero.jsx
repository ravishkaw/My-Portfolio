import { Typewriter } from "react-simple-typewriter";
import SectionLink from "../SectionLink";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { HiOutlineChevronDown, HiSparkles } from "react-icons/hi";
import {
  SiTypescript,
  SiReact,
  SiNestjs,
  SiNodedotjs,
  SiSap,
  SiMongodb,
} from "react-icons/si";

import { profile, socialLinks, stats } from "../../data";
import portrait from "../../assets/myImg.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-status-pill">
            <span className="hero-status-pulse" />
            <HiSparkles className="hero-status-icon" />
            <span>Promoted to Software Engineer · Sep 2026</span>
          </div>

          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">Ravishka</span>.
            <br />
            Software Engineer.
          </h1>

          <p className="hero-role">
            {profile.role} at{" "}
            <span className="hero-role-company">{profile.company}</span>
          </p>

          <p className="hero-desc">{profile.tagline}</p>

          <div className="hero-typer">
            <span className="hero-typer-prompt">$</span>
            <span className="hero-typer-cmd">focus:</span>
            <span className="hero-typer-word">
              <Typewriter
                words={[
                  "build modern web applications",
                  "integrate enterprise SAP ecosystems",
                  "design high-performance APIs",
                  "ship clean, reliable code",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={35}
                delaySpeed={1800}
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

          <div className="hero-stack-preview">
            <span className="hero-stack-label">Stack:</span>
            <div className="hero-stack-icons">
              <span className="hero-stack-badge" title="TypeScript">
                <SiTypescript /> TypeScript
              </span>
              <span className="hero-stack-badge" title="React">
                <SiReact /> React
              </span>
              <span className="hero-stack-badge" title="NestJS">
                <SiNestjs /> NestJS
              </span>
              <span className="hero-stack-badge" title="Node.js">
                <SiNodedotjs /> Node.js
              </span>
              <span className="hero-stack-badge" title="SAP B1 / CCO">
                <SiSap /> SAP ERP
              </span>
              <span className="hero-stack-badge" title="MongoDB">
                <SiMongodb /> MongoDB
              </span>
            </div>
          </div>

          <ul className="hero-socials">
            {socialLinks.map(({ id, name, url, icon }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${name} profile`}
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="hero-portrait-wrap">
            <div className="hero-glow" aria-hidden="true" />
            <img
              className="hero-portrait"
              src={portrait}
              alt={`Portrait of ${profile.name}`}
            />
          </div>

          <ul className="hero-stats">
            {stats.map(({ id, value, label }) => (
              <li key={id} className="hero-stat">
                <span className="hero-stat-value">{value}</span>
                <span className="hero-stat-label">{label}</span>
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
