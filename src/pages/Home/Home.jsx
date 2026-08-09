import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Journey from "../../components/Journey/Journey";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import useReveal from "../../hooks/useReveal";
import usePageMeta from "../../hooks/usePageMeta";

const Home = () => {
  useReveal();
  usePageMeta({
    title: "Ravishka Wijerathne - Software Engineer",
    description:
      "Software engineer based in Colombo, Sri Lanka. BIT graduate of UCSC, building software across the stack with Java, Spring Boot, JavaScript and SQL.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
