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
import { MdEmail, MdPhoneAndroid, MdWhatsapp } from "react-icons/md";
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

// More achivements
export const achievementsData = [
  {
    date: "2024-08-15",
    title: "Higher Diploma in IT",
    description:
      "Successfully completed a comprehensive Higher Diploma program, focusing on full-stack development, software engineering, and database management at the University of Colombo School of Computing (UCSC).",
  },
  {
    date: "2024-07-15",
    title: "Diploma in IT",
    description:
      "Successfully completed a comprehensive Diploma program, focusing on f software engineering, and database at the University of Colombo School of Computing (UCSC).",
  },
  // {
  //   date: "2021-11-20",
  //   title: "Completed React Course",
  //   description: "Completed an advanced course in React with excellent grades.",
  // },
  // {
  //   date: "2021-11-20",
  //   title: "Completed React Course",
  //   description: "Completed an advanced course in React with excellent grades.",
  // },
  // {
  //   date: "2021-11-20",
  //   title: "Completed React Course",
  //   description: "Completed an advanced course in React with excellent grades.",
  // },
  // {
  //   date: "2021-11-20",
  //   title: "Completed React Course",
  //   description: "Completed an advanced course in React with excellent grades.",
  // },
  // {
  //   date: "2021-11-20",
  //   title: "Completed React Course",
  //   description: "Completed an advanced course in React with excellent grades.",
  // },
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
  // {
  //   id: 3,
  //   name: "node",
  //   icon: <FaNode />,
  // },
  // {
  //   id: 4,
  //   name: "express",
  //   icon: <SiExpress />,
  // },
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

export const contacts = [
  {
    id: 1,
    details: "ravishkawj@gmail.com",
    url: "mailto:ravishkawj@gmail.com",
    icon: <MdEmail />,
  },
  {
    id: 2,
    details: "+94 77 504 8662",
    url: "tel:+94775048662",
    icon: <MdPhoneAndroid />,
  },
  {
    id: 3,
    details: "Chat on WhatsApp",
    url: "https://wa.me/message/TXZIG3WXVCNGD1",
    icon: <MdWhatsapp />,
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
    url: "https://www.github.com/ravishkaw",
    icon: <FaGithub />,
  },
  {
    id: 3,
    name: "facebook",
    url: "https://www.facebook.com/ravishka.wijerathne",
    icon: <FaFacebook />,
  },
  {
    id: 4,
    name: "instagram",
    url: "https://www.instagram.com/ravishka_wijerathne",
    icon: <FaInstagram />,
  },
];
