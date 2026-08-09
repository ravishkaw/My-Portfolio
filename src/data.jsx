import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaReact,
  FaJava,
  FaNode,
  FaGitAlt,
  FaDocker,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  MdEmail,
  MdPhoneAndroid,
  MdWhatsapp,
  MdLocationOn,
} from "react-icons/md";
import {
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiVite,
} from "react-icons/si";

export const profile = {
  name: "Ravishka Wijerathne",
  role: "Associate Software Engineer",
  company: "Pristine Solutions (Pvt) Ltd",
  location: "Colombo, Sri Lanka",
  tagline: "I build scalable, well-crafted software.",
  resumeUrl:
    "https://drive.google.com/file/d/1iw27BXIuom_5H1RBqT6ZbKy8leJcN6g2/view",
  email: "ravishkawj@gmail.com",
};

/* `section` is the element the link scrolls to and the one the navbar
   highlights. Home is a plain "/" - the top of the page needs no fragment. */
export const navLinks = [
  { id: 1, name: "Home", url: "/", section: "home" },
  { id: 2, name: "About", url: "/#about", section: "about" },
  { id: 3, name: "Journey", url: "/#journey", section: "journey" },
  { id: 4, name: "Skills", url: "/#skills", section: "skills" },
  { id: 5, name: "Projects", url: "/#projects", section: "projects" },
  { id: 6, name: "Contact", url: "/#contact", section: "contact" },
];

export const stats = [
  { id: 1, value: "3+", label: "Years writing code" },
  { id: 2, value: "10+", label: "Projects shipped" },
  { id: 3, value: "BIT", label: "UOC graduate" },
];

/* Highlighted cards shown on the home page */
export const highlights = [
  {
    id: 1,
    title: "Associate Software Engineer",
    org: "Pristine Solutions (Pvt) Ltd",
    period: "Present",
    description:
      "Building and maintaining production systems - from API design and database modelling through to the client applications on top.",
    icon: <FaBriefcase />,
  },
  {
    id: 2,
    title: "BIT - Information Technology",
    org: "University of Colombo School of Computing",
    period: "Completed Aug 2025",
    description:
      "Bachelor of Information Technology covering software engineering, full-stack development, databases and systems design.",
    icon: <FaGraduationCap />,
  },
  {
    id: 3,
    title: "Certified Front-End Developer",
    org: "Meta",
    period: "Certification",
    description:
      "Professional certification covering HTML, CSS, JavaScript and React for building dynamic, responsive interfaces.",
    icon: <FaCertificate />,
  },
];

/* Full timeline - newest first */
export const timeline = [
  {
    id: 1,
    date: "2025-08-15",
    dateLabel: "August 2025",
    title: "BIT (Bachelor of Information Technology)",
    org: "University of Colombo School of Computing (UCSC)",
    type: "education",
    description:
      "Completed my degree in Information Technology, with a focus on software engineering, full-stack development and database systems.",
  },
  {
    id: 2,
    date: "2025-01-01",
    dateLabel: "2025",
    title: "Associate Software Engineer",
    org: "Pristine Solutions (Pvt) Ltd",
    type: "work",
    description:
      "Joined the engineering team, contributing to production software across the stack and collaborating on feature delivery, code review and quality.",
  },
  {
    id: 3,
    date: "2024-08-15",
    dateLabel: "August 2024",
    title: "Higher Diploma in Information Technology",
    org: "University of Colombo School of Computing (UCSC)",
    type: "education",
    description:
      "Completed the Higher Diploma programme covering full-stack development, software engineering and database management.",
  },
  {
    id: 4,
    date: "2024-07-15",
    dateLabel: "July 2024",
    title: "Diploma in Information Technology",
    org: "University of Colombo School of Computing (UCSC)",
    type: "education",
    description:
      "Foundation in programming, software engineering practices and relational database design.",
  },
  {
    id: 5,
    date: "2023-01-01",
    dateLabel: "Certification",
    title: "Meta Front-End Developer Certificate",
    org: "Meta / Coursera",
    type: "certification",
    description:
      "Mastered HTML, CSS, JavaScript and React.js to build dynamic, responsive web applications.",
  },
];

export const skillGroups = [
  {
    id: 1,
    group: "Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
  {
    id: 2,
    group: "Frameworks",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 3,
    group: "Data",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    id: 4,
    group: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
];

export const contacts = [
  {
    id: 1,
    label: "Email",
    details: "ravishkawj@gmail.com",
    url: "mailto:ravishkawj@gmail.com",
    icon: <MdEmail />,
  },
  {
    id: 2,
    label: "Phone",
    details: "+94 77 504 8662",
    url: "tel:+94775048662",
    icon: <MdPhoneAndroid />,
  },
  {
    id: 3,
    label: "WhatsApp",
    details: "Chat on WhatsApp",
    url: "https://wa.me/message/TXZIG3WXVCNGD1",
    icon: <MdWhatsapp />,
  },
  {
    id: 4,
    label: "Location",
    details: "Colombo, Sri Lanka",
    url: null,
    icon: <MdLocationOn />,
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ravishka-wijerathne",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://www.github.com/ravishkaw",
    icon: <FaGithub />,
  },
  // {
  //   id: 3,
  //   name: "Facebook",
  //   url: "https://www.facebook.com/ravishka.wijerathne",
  //   icon: <FaFacebook />,
  // },
  // {
  //   id: 4,
  //   name: "Instagram",
  //   url: "https://www.instagram.com/ravishka_wijerathne",
  //   icon: <FaInstagram />,
  // },
];
