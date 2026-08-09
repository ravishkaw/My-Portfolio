import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { highlights, profile } from "../../data";
import "./About.css";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">About me</p>
          <h2 className="section-title">
            Engineer by trade, <span className="gradient-text">learner</span> by
            habit.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I&apos;m {profile.name}, an {profile.role} at {profile.company}{" "}
              and a BIT graduate of the University of Colombo School of
              Computing. I completed my degree in August 2025.
            </p>
            <p>
              I enjoy the whole span of building software - modelling the data,
              designing the API, reasoning about how the pieces fit together,
              and then making the interface on top feel fast and obvious. I&apos;m
              not tied to one layer or one language; the interesting part is the
              problem. Most of what I know outside the classroom came from
              building things and reading other people&apos;s code.
            </p>
            <p>
              I&apos;m a self-starter: I pick up new frameworks and tools in my
              own time, and I&apos;d rather understand why something works than
              copy it. My goal is to keep growing as a developer and work on
              projects that solve real problems for real people.
            </p>

            <Link to="/#contact" className="btn btn-ghost about-cta">
              Get in touch <FaArrowRight />
            </Link>
          </div>

          <div className="about-highlights">
            {highlights.map(({ id, title, org, period, description, icon }) => (
              <article key={id} className="card highlight-card reveal">
                <div className="highlight-icon">{icon}</div>
                <div>
                  <div className="highlight-top">
                    <h3 className="highlight-title">{title}</h3>
                    <span className="highlight-period">{period}</span>
                  </div>
                  <p className="highlight-org">{org}</p>
                  <p className="highlight-desc">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
