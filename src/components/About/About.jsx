import "./About.css";
import AboutImg from "../../assets/about-2.svg";
import { contacts, socialLinks } from "../../data";

const About = () => {
  return (
    <section className="sections" id="about">
      <h1 className="title">About Me</h1>
      <div className="title-underline"></div>
      <div className="about-contact-container">
        <div className="about-img-container">
          <img src={AboutImg} alt="About Ravishka" className="about-img" />
        </div>
        <div className="about-right-column">
          <div className="about-container">
            <div className="about-info">
              <p>
                Hello! I am currently a BIT undergraduate student at the
                University of Colombo School of Computing. I am passionate about
                software development, and I am constantly working on improving
                my skills. I am a self-starter and take a proactive approach to
                learning, often teaching myself new programming languages and
                technologies in my free time. I am committed to always giving my
                best effort. I am excited to continue learning and growing as a
                programmer, and I am looking forward to seeing where my career
                in the field will take me.
              </p>
            </div>
          </div>

          <div className="contact-container">
            <h2>Contact Me</h2>
            <div>
              {contacts.map((contact) => {
                const { id, details, url, icon } = contact;
                return (
                  <a href={url} key={id} className="contact-details">
                    {icon}
                    {details}
                  </a>
                );
              })}
            </div>
            <div className="about-socials">
              {socialLinks.map((link) => {
                const { id, url, icon, name } = link; 
                return (
                  <div className="hero-social-icon" key={id}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${name} profile`}
                    >
                      {icon}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
