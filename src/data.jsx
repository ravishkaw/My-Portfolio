import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaAward,
  FaReact,
  FaNode,
  FaJava,
  FaTrophy,
  FaCertificate,
} from "react-icons/fa";
import { GoHome, GoPerson, GoProjectRoadmap, GoStar } from "react-icons/go";
import { SiExpress, SiJavascript, SiSpringboot } from "react-icons/si";

export const navLinks = [
  {
    id: 1,
    name: "home",
    url: "/",
    icon: <GoHome />,
  },
  {
    id: 2,
    name: "achivements",
    url: "/#achievements",
    icon: <GoStar />,
  },
  {
    id: 3,
    name: "projects",
    url: "/#projects",
    icon: <GoProjectRoadmap />,
  },
  {
    id: 4,
    name: "about",
    url: "/#about",
    icon: <GoPerson />,
  },
];

export const achievements = [
  {
    id: 1,
    title: "Higher Diploma in IT",
    company: "UCSC",
    description:
      "Successfully completed a comprehensive Higher Diploma program, focusing on full-stack development, software engineering, and database management at the University of Colombo School of Computing (UCSC).",
    icon: <FaAward />,
  },
  {
    id: 2,
    title: "Certified Front-End Developer",
    company: "Meta",
    description:
      "Awarded a prestigious Front-End Developer certification from Meta, mastering HTML, CSS, JavaScript, and React.js to create dynamic, responsive web applications.",
    icon: <FaCertificate />,
  },
];

export const skills = [
  {
    id: 1,
    name: "js",
    icon: <SiJavascript />,
  },
  {
    id: 2,
    name: "react",
    icon: <FaReact />,
  },
  {
    id: 3,
    name: "node",
    icon: <FaNode />,
  },
  {
    id: 4,
    name: "express",
    icon: <SiExpress />,
  },
  {
    id: 5,
    name: "java",
    icon: <FaJava />,
  },
  {
    id: 6,
    name: "springboot",
    icon: <SiSpringboot />,
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "linkedin",
    url: "https://www.linkedin.com/in/ravishka-wijerathne",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    name: "github",
    url: "",
    icon: <FaGithub />,
  },
  {
    id: 3,
    name: "facebook",
    url: "",
    icon: <FaFacebook />,
  },
  {
    id: 4,
    name: "instagram",
    url: "",
    icon: <FaInstagram />,
  },
];
