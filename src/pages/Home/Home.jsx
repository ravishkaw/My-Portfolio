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
      "Software Engineer building modern web applications, APIs, and enterprise integrations. Experience across TypeScript, React, Node.js, NestJS, and SAP ERP systems.",
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
