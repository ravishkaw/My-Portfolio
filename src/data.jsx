import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaJava,
  FaNode,
  FaGitAlt,
  FaDocker,
  FaGraduationCap,
  FaBriefcase,
  FaHtml5,
  FaServer,
  FaDatabase,
  FaCodeBranch,
  FaNetworkWired,
  FaCogs,
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
  SiNestjs,
  SiAngular,
  SiLinux,
  SiNginx,
  SiSap,
} from "react-icons/si";

export const profile = {
  name: "Ravishka Wijerathne",
  role: "Software Engineer",
  company: "Pristine Solutions (Pvt) Ltd",
  location: "Colombo, Sri Lanka",
  headline: "Software Engineer",
  tagline:
    "Building scalable web applications, reliable APIs, and enterprise integrations.",
  aboutIntro:
    "I'm a Software Engineer working across the stack to build modern web applications, APIs, and enterprise solutions.",
  aboutBody:
    "With a computer science background from UOC and hands-on experience across modern web frameworks and enterprise platforms, I focus on writing clean, maintainable code that solves real problems.",
  resumeUrl:
    "https://drive.google.com/file/d/1iw27BXIuom_5H1RBqT6ZbKy8leJcN6g2/view",
  email: "ravishkawj@gmail.com",
  status: "Software Engineer · Pristine Solutions",
};

export const navLinks = [
  { id: 1, name: "Home", url: "/", section: "home" },
  { id: 2, name: "About", url: "/#about", section: "about" },
  { id: 3, name: "Journey", url: "/#journey", section: "journey" },
  { id: 4, name: "Skills", url: "/#skills", section: "skills" },
  { id: 5, name: "Projects", url: "/#projects", section: "projects" },
  { id: 6, name: "Contact", url: "/#contact", section: "contact" },
];

export const stats = [
  {
    id: 1,
    value: "2+ Yrs",
    label: "Experience",
  },
  {
    id: 2,
    value: "Full-Stack",
    label: "Web & Enterprise",
  },
  {
    id: 3,
    value: "BIT (UOC)",
    label: "IT Graduate",
  },
];

export const fallbackProjects = [
  {
    id: "fallback-1",
    title: "Enterprise ERP Integration Service",
    description:
      "Backend integration service and REST API layer synchronizing business data and automated workflows between web applications and SAP Business One.",
    url: "https://github.com/ravishkaw",
    tags: ["TypeScript", "NestJS", "SAP Business One", "MongoDB"],
    featured: true,
  },
  {
    id: "fallback-2",
    title: "Retail POS Extension Suite",
    description:
      "Custom plugin extensions and REST integrations built for SAP Customer Checkout to streamline retail point-of-sale workflows.",
    url: "https://github.com/ravishkaw",
    tags: ["Java", "SAP CCO", "REST APIs", "SQL"],
    featured: true,
  },
  {
    id: "fallback-3",
    title: "Operations & Booking Web Portal",
    description:
      "Full-stack web application featuring role-based access, booking management, and administrative dashboards.",
    url: "https://github.com/ravishkaw",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    featured: true,
  },
];

export const highlights = [
  {
    id: 1,
    title: "Software Engineer",
    org: "Pristine Solutions (Pvt) Ltd",
    period: "Sep 2026 – Present",
    badge: "Promoted",
    description:
      "Building full-stack web applications, backend APIs, and SAP Business One integrations.",
    icon: <FaBriefcase />,
  },
  {
    id: 2,
    title: "Associate Software Engineer",
    org: "Pristine Solutions (Pvt) Ltd",
    period: "Aug 2025 – Sep 2026",
    badge: "Associate",
    description:
      "Developed enterprise integrations, custom SAP Customer Checkout (CCO) plugins, and REST APIs.",
    icon: <FaCogs />,
  },
  {
    id: 3,
    title: "Intern Software Engineer",
    org: "Synexis Technologies",
    period: "Jan 2025 – Aug 2025",
    badge: "Internship",
    description:
      "Built features across web applications, admin portals, and desktop software.",
    icon: <FaServer />,
  },
  {
    id: 4,
    title: "BIT - Information Technology",
    org: "University of Colombo",
    period: "Completed Aug 2025",
    badge: "Degree",
    description:
      "Bachelor of Information Technology covering software engineering, full-stack development, and databases.",
    icon: <FaGraduationCap />,
  },
];

export const timeline = [
  {
    id: 1,
    date: "2026-09-01",
    dateLabel: "Sep 2026 – Present",
    title: "Software Engineer",
    org: "Pristine Solutions (Pvt) Ltd",
    type: "work",
    badge: "Promoted",
    description:
      "Promoted to Software Engineer, working across web applications, backend APIs, and enterprise integrations.",
    bullets: [
      "Build full-stack web applications and backend services with TypeScript, React, Node.js, and NestJS.",
      "Develop SAP Business One integrations and automated business workflows.",
      "Design and maintain databases across MongoDB and SAP HANA.",
    ],
    tags: [
      "TypeScript",
      "NestJS",
      "Node.js",
      "React",
      "SAP Business One",
      "MongoDB",
    ],
  },
  {
    id: 2,
    date: "2025-08-01",
    dateLabel: "Aug 2025 – Sep 2026",
    title: "Associate Software Engineer",
    org: "Pristine Solutions (Pvt) Ltd",
    type: "work",
    badge: "Associate",
    description:
      "Developed enterprise integrations, POS extensions, and backend APIs.",
    bullets: [
      "Built custom plugins and extensions for SAP Customer Checkout (CCO).",
      "Developed REST APIs and data synchronization services for client systems.",
      "Collaborated on feature delivery, testing, and production deployments.",
    ],
    tags: [
      "SAP Customer Checkout",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "SQL",
    ],
  },
  {
    id: 3,
    date: "2025-08-15",
    dateLabel: "August 2025",
    title: "BIT (Bachelor of Information Technology)",
    org: "University of Colombo",
    type: "education",
    badge: "Degree",
    description:
      "Graduated with a Bachelor of Information Technology degree from UOC.",
    bullets: [
      "Focused on software engineering, full-stack development, database systems, and application design.",
    ],
    tags: [
      "Software Engineering",
      "Web Development",
      "Databases",
      "Data Structures",
    ],
  },
  {
    id: 4,
    date: "2025-01-01",
    dateLabel: "Jan 2025 – Aug 2025",
    title: "Intern Software Engineer",
    org: "Synexis Technologies",
    type: "work",
    badge: "Internship",
    description:
      "Contributed to web portals, travel applications, and desktop software.",
    bullets: [
      "Built frontend and backend features for web portals and desktop applications.",
      "Assisted with deployments, bug fixes, and testing.",
    ],
    tags: ["Web Applications", "Desktop Apps", "Full-Stack", "JavaScript"],
  },
  {
    id: 5,
    date: "2024-08-15",
    dateLabel: "August 2024",
    title: "Higher Diploma in Information Technology",
    org: "University of Colombo",
    type: "education",
    description:
      "Covered full-stack development, software engineering practices, and database management.",
    tags: ["Full-Stack", "OOP", "Database Management"],
  },
  {
    id: 6,
    date: "2024-07-15",
    dateLabel: "July 2024",
    title: "Diploma in Information Technology",
    org: "University of Colombo",
    type: "education",
    description:
      "Fundamentals of programming, software engineering, and database design.",
    tags: ["Programming", "SQL", "Data Structures"],
  },
  {
    id: 7,
    date: "2023-01-01",
    dateLabel: "Certification",
    title: "Meta Front-End Developer Certificate",
    org: "Meta / Coursera",
    type: "certification",
    description:
      "Professional certification covering HTML5, CSS3, modern JavaScript, and React.",
    tags: ["React", "JavaScript", "Responsive Design"],
  },
];

/* Clean, simplified skill groups */
export const skillGroups = [
  {
    id: 1,
    group: "Languages",
    domain: "Core Development",
    items: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "SQL / SQLScript", icon: <FaDatabase /> },
      { name: "Java", icon: <FaJava /> },
      { name: "HTML5 / CSS3", icon: <FaHtml5 /> },
    ],
  },
  {
    id: 2,
    group: "Frameworks & Web",
    domain: "Application Development",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: 3,
    group: "Enterprise Ecosystems",
    domain: "ERP & Integrations",
    items: [
      { name: "SAP Business One", icon: <SiSap /> },
      { name: "SAP Customer Checkout", icon: <SiSap /> },
      { name: "Service Layer APIs", icon: <FaNetworkWired /> },
      { name: "B1iF Integrations", icon: <FaCodeBranch /> },
    ],
  },
  {
    id: 4,
    group: "Databases",
    domain: "Data & Storage",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SAP HANA DB", icon: <SiSap /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    id: 5,
    group: "Tools & Environment",
    domain: "Workflow & Platform",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "Nginx", icon: <SiNginx /> },
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
];
