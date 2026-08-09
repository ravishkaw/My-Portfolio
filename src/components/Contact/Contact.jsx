import { FaArrowRight } from "react-icons/fa";
import { contacts, socialLinks, profile } from "../../data";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="card contact-panel reveal">
          <div className="contact-copy">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title">
              Let&apos;s build something{" "}
              <span className="gradient-text">together</span>.
            </h2>
            <p className="section-subtitle">
              Whether it&apos;s a role, a project or just a question about code
              - my inbox is always open.
            </p>

            <a href={`mailto:${profile.email}`} className="btn btn-primary contact-cta">
              Say hello <FaArrowRight />
            </a>

            <ul className="contact-socials">
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

          <ul className="contact-list">
            {contacts.map(({ id, label, details, url, icon }) => {
              const content = (
                <>
                  <span className="contact-icon">{icon}</span>
                  <span>
                    <span className="contact-label">{label}</span>
                    <span className="contact-value">{details}</span>
                  </span>
                </>
              );

              return (
                <li key={id}>
                  {url ? (
                    <a href={url} className="contact-item">
                      {content}
                    </a>
                  ) : (
                    <div className="contact-item contact-item-static">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
