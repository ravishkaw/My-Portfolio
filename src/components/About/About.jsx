import {
  FaArrowRight,
  FaLayerGroup,
  FaServer,
  FaProjectDiagram,
} from "react-icons/fa";
import SectionLink from "../SectionLink";

import { highlights, profile } from "../../data";
import "./About.css";

const focusAreas = [
  {
    id: "01",
    icon: <FaLayerGroup />,
    title: "Frontend & Web",
    desc: "Responsive, component-driven web applications built for speed and usability.",
  },
  {
    id: "02",
    icon: <FaServer />,
    title: "Backend & Data",
    desc: "REST APIs, microservices, and relational & document database architectures.",
  },
  {
    id: "03",
    icon: <FaProjectDiagram />,
    title: "Enterprise Systems",
    desc: "Connecting modern apps with ERP workflows and point-of-sale platforms.",
  },
];

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal" data-watermark="01 // ABOUT">
          <p className="section-eyebrow">
            <span className="section-index">01</span> &#47;&#47; About me
          </p>
          <h2 className="section-title">
            Engineer by trade,{" "}
            <span className="gradient-text">problem solver</span> at heart.
          </h2>
          <p className="section-subtitle">
            Building modern web applications, APIs, and enterprise integrations.
          </p>
        </div>

        <div className="about-grid">
          <div className="card about-story reveal reveal-left">
            <div className="about-window-bar">
              <div className="about-window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="about-window-path">~/ravishka/overview.md</span>
              <span className="about-window-tag">README</span>
            </div>

            <div className="about-story-body">
              <p className="about-lead">
                I&apos;m <strong>{profile.name}</strong>, a{" "}
                <strong>{profile.role}</strong> at{" "}
                <strong>{profile.company}</strong> and a BIT graduate of the{" "}
                <strong>University of Colombo</strong>.
              </p>

              <p>
                I work across the full software lifecycle—from designing
                database schemas and backend services to crafting responsive,
                intuitive frontends.
              </p>

              <p>
                My hands-on experience spans{" "}
                <strong>JavaScript &amp; TypeScript</strong> across{" "}
                <strong>React, Angular, Node.js (Express &amp; NestJS)</strong>,
                as well as <strong>.NET and Java</strong> backends, working with{" "}
                <strong>MS SQL Server, SAP HANA, and MongoDB</strong> alongside{" "}
                <strong>SAP Business One &amp; SAP Customer Checkout</strong>.
              </p>

              <div className="about-focus-grid">
                {focusAreas.map(({ id, icon, title, desc }) => (
                  <div key={id} className="about-focus-card">
                    <div className="about-focus-top">
                      <span className="about-focus-icon">{icon}</span>
                      <span className="about-focus-num">{id}</span>
                    </div>
                    <h3 className="about-focus-title">{title}</h3>
                    <p className="about-focus-desc">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="about-cta-group">
                <SectionLink section="journey" className="btn btn-primary">
                  View my journey <FaArrowRight />
                </SectionLink>
                <SectionLink section="contact" className="btn btn-ghost">
                  Get in touch
                </SectionLink>
              </div>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map(
              ({ id, title, org, period, badge, description, icon }, idx) => (
                <article
                  key={id}
                  className={`card highlight-card reveal reveal-right ${
                    idx === 0 ? "highlight-card-current" : ""
                  }`}
                >
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
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
