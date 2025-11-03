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
                Hello! I am an Associate Software Engineer at Pristine Solutions (Pvt) Ltd and a BIT undergraduate student at the University of Colombo School of Computing (UCSC).
                
                I am passionate about building scalable, high-quality software and continuously improving my technical and problem-solving skills. As a self-starter, I enjoy exploring new technologies, frameworks, and tools — often teaching myself in my free time.

I believe in delivering my best in every project I take on, collaborating with teams effectively, and staying curious about the ever-evolving tech world. My goal is to keep growing as a developer and contribute to impactful projects that solve real-world problems.
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
