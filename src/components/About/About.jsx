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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            voluptatum nobis qui ipsum praesentium nostrum dignissimos nam
            debitis! Rem eum ipsum consequuntur autem temporibus natus similique
            debitis perspiciatis excepturi voluptatibus ab, ducimus dolores,
            vero, nemo soluta quos accusantium magni! Vel obcaecati eaque
            voluptates, possimus provident quae labore distinctio officiis
            beatae vero cum commodi. Nihil quo eaque quam veniam, sunt unde
            ducimus temporibus nemo eligendi quae reprehenderit cum, eveniet
            iusto repudiandae perspiciatis tenetur doloribus. Quo blanditiis
            ipsam dolorum, in molestias quibusdam, libero reprehenderit eum
            inventore autem distinctio reiciendis quas earum, nesciunt animi
            quisquam sequi dolore eius. Pariatur similique recusandae molestias
            excepturi.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
