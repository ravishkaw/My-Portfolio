import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";

import { profile, socialLinks, stats } from "../../data";
import portrait from "../../assets/myImg.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">
            Hi, I&apos;m <span className="gradient-text">Ravishka</span>.
            <br />I build software that lasts.
          </h1>

          <p className="hero-role">
            {profile.role} at{" "}
            <span className="hero-role-company">{profile.company}</span>
          </p>

          <p className="hero-desc">
            {/* A software engineer based in {profile.location}.  */}
            I work across the
            stack. I care about
            clean architecture, readable code and software that holds up in
            production.
          </p>

          <p className="hero-typer">
            <span className="hero-typer-prompt">$</span> Let&apos;s{" "}
            <span className="hero-typer-word">
              <Typewriter
                words={["create", "innovate", "ship", "build!"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={75}
                deleteSpeed={45}
                delaySpeed={1400}
              />
            </span>
          </p>

          <div className="hero-actions">
            <Link to="/#projects" className="btn btn-primary">
              View my work <FaArrowRight />
            </Link>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Download resume <FaDownload />
            </a>
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

      <Link to="/#about" className="hero-scroll" aria-label="Scroll to about">
        <HiOutlineChevronDown />
      </Link>
    </section>
  );
};

export default Hero;
