import "./About.css";
import AboutImg from "../../assets/about-2.svg";

const About = () => {
  return (
    <section className="sections">
      <h1 className="title">About Me</h1>
      <div className="title-underline"></div>
      <div className="about-container">
        <div className="about-img-container">
          <img src={AboutImg} alt="about-img" className="about-img" />
        </div>
        <div className="about-info">
          <p>
            Hello! I am currently an undergraduate student University of Colombo
            School of Computing. I am passionate about software development, and I am constantly working on improving my
            skills. I am a self-starter and take a proactive
            approach to learning, often teaching myself new programming
            languages and technologies in my free time. I am committed to always
            giving my best effort. I am excited to continue learning and growing
            as a programmer, and I am looking forward to seeing where my career
            in the field will take me.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
