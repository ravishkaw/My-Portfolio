import { FaArrowRight } from "react-icons/fa";
import SectionLink from "../SectionLink";

import { highlights, profile } from "../../data";
import "./About.css";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-eyebrow">About me</p>
          <h2 className="section-title">
            Engineer by trade,{" "}
            <span className="gradient-text">problem solver</span> at heart.
          </h2>
          <p className="section-subtitle">
            Building modern web applications and enterprise integrations.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p className="about-lead">
              I&apos;m <strong>{profile.name}</strong>, a{" "}
              <strong>{profile.role}</strong> at{" "}
              <strong>{profile.company}</strong> and a BIT graduate of the{" "}
              <strong>University of Colombo School of Computing (UCSC)</strong>.
            </p>

            <p>
              As a Software Engineer, I work across the whole application
              lifecycle. I enjoy taking projects from concept to
              deployment-designing the data layer, building clean APIs, and
              crafting intuitive, responsive user interfaces on top.
            </p>

            <p>
              My hands-on experience includes developing SAP Business One
              Service Layer integration packages, creating custom SAP Customer
              Checkout (CCO) plugins (such as batch item splitting and receipt
              recalculations), and building modern web applications with
              TypeScript, React, NestJS, and Node.js.
            </p>

            <p>
              I thrive on continuous learning and writing code that is clean,
              maintainable, and reliable in production.
            </p>

            <div className="about-cta-group">
              <SectionLink section="journey" className="btn btn-primary">
                View my journey <FaArrowRight />
              </SectionLink>
              <SectionLink section="contact" className="btn btn-ghost">
                Get in touch
              </SectionLink>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map(
              ({ id, title, org, period, badge, description, icon }) => (
                <article key={id} className="card highlight-card reveal">
                  <div className="highlight-icon">{icon}</div>
                  <div className="highlight-body">
                    <div className="highlight-top">
                      <h3 className="highlight-title">{title}</h3>
                      <span className="highlight-period">{period}</span>
                    </div>
                    <div className="highlight-meta">
                      <span className="highlight-org">{org}</span>
                      {badge && (
                        <span className="highlight-badge">{badge}</span>
                      )}
                    </div>
                    <p className="highlight-desc">{description}</p>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
