import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import programmerImg from "../../assets/Programmer.svg";
// import programmerImg from "../../assets/myImg.png";
import { socialLinks } from "../../data";

const Hero = () => {
  return (
    <section className="sections hero-section">
      <div className="hero-left-column">
        <div className="hero-intro">
          <h3 className="hero-up-title">Hello,</h3>
          <h1 className="hero-title">
            I am <span className="hero-stroke-text">Ravishka</span>
          </h1>
          <h3 className="hero-sub-title">
            A passionate developer from Sri Lanka
          </h3>
        </div>

        <div className="hero-desc">
          <div className="typewriter-container">
            <h3>
              Life is simple ; {" "}
              <span className="typewriter-text">
                <Typewriter
                  words={["Eat", "Code", "Sleep", "Repeat !"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>
          </div>
        </div>

        <div className="hero-socials">
          {socialLinks.map((link) => {
            const { id, url, icon } = link;
            return (
              <div className="hero-social-icon" key={id}>
                <a href={url}>{icon}</a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hero-right-column">
        <img
          className="hero-img"
          src={programmerImg}
          alt="programmerImg"
          loading="lazy"
        />
      </div>
    </section>
  );
};
export default Hero;
