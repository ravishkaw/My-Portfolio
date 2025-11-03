import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
// import programmerImg from "../../assets/Programmer.svg";
import programmerImg from "../../assets/myImg.png";

import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="sections hero-section">
      <div className="hero-left-column">
        <header className="hero-intro">
          <h2 className="hero-up-title">Hello,</h2>
          <h1 className="hero-title">
            I am <span className="hero-stroke-text">Ravishka</span>
          </h1>
          <p className="hero-info">Innovating with Code, One Line at a Time</p>
        </header>

        <div className="hero-desc">
          <h2>
            Let's{" "}
            <span className="typewriter-text">
              <Typewriter
                words={["Create", "Innovate", "Inspire", "Build!"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>

        <div className="hero-btn-container">
          <button
            className="btn btn-hero btn-hero-contact"
            aria-label="Contact Me Button"
          >
            <a href="#about">Contact Me</a>
          </button>
          <button
            className="btn btn-hero btn-hero-resume"
            aria-label="Resume Button"
          >
            <a
              href="https://drive.google.com/file/d/1iw27BXIuom_5H1RBqT6ZbKy8leJcN6g2/view"
              target="_blank"
            >
              Resume{" "}
              <span className="resume-download-icon">
                <FaDownload />
              </span>
            </a>
          </button>
        </div>
      </div>

      <div className="hero-right-column">
        <img
          className="hero-img"
          src={programmerImg}
          alt="An illustration of a programmer coding on a laptop"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
