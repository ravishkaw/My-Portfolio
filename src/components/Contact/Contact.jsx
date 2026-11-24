import { useState } from "react";
import { FaArrowRight, FaRegCopy, FaCheck } from "react-icons/fa";
import { contacts, socialLinks, profile } from "../../data";
import "./Contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="card contact-panel reveal">
          <div className="contact-copy">
            <p className="section-eyebrow">
              <span className="section-index">04</span> &#47;&#47; Contact
            </p>
            <h2 className="section-title">
              Let&apos;s build something{" "}
              <span className="gradient-text">remarkable</span>.
            </h2>
            <p className="section-subtitle">
              Whether it&apos;s an engineering role, an enterprise integration
              challenge, or a collaboration—my inbox is always open.
            </p>

            <div className="contact-cta-row">
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-primary contact-cta"
              >
                Send an email <FaArrowRight />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="btn btn-ghost contact-copy-btn"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <FaCheck className="contact-copied-icon" /> Copied!
                  </>
                ) : (
                  <>
                    <FaRegCopy /> Copy email
                  </>
                )}
              </button>
            </div>

            <ul className="contact-socials">
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

          <ul className="contact-list">
            {contacts.map(({ id, label, details, url, icon }) => {
              const content = (
                <>
                  <span className="contact-icon">{icon}</span>
                  <span className="contact-meta">
                    <span className="contact-label">{label}</span>
                    <span className="contact-value">{details}</span>
                  </span>
                </>
              );

              return (
                <li key={id}>
                  {url ? (
                    <a
                      href={url}
                      target={url.startsWith("http") ? "_blank" : undefined}
                      rel={
                        url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="contact-item"
                    >
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
