import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpo,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export const CV_LINK =
  "https://drive.google.com/file/d/1rvWWHmi8tlCAh3HwX6EVulD0TtTPPKrG/view?usp=sharing";

export const LINKS = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const SOCIALS = [
  { icon: <FaGithub />, path: "https://github.com/muhammadputraage" },
  { icon: <FaLinkedin />, path: "https://linkedin.com/in/muhammadputraage" },
  { icon: <FaInstagram />, path: "https://instagram.com/mputraage" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@putramonk1495" },
];

export const SERVICES = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites focused on speed, design, and user experience.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps with native feel and seamless performance.",
    href: "",
  },
];

export const ABOUT = {
  title: "About me",
  description:
    "Passionate frontend engineer crafting beautiful, functional interfaces with modern technologies.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammad Putra Age",
    },
    {
      fieldName: "Email",
      fieldValue: "muhammadputraage@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bahasa Indonesia",
    },
    {
      fieldName: "Availability",
      fieldValue: "Remote, Worldwide",
    },
  ],
};

export const EXPERIENCE = {
  title: "My experience",
  description:
    "Hands-on experience building real-world projects, collaborating with teams, and solving complex challenges.",
  items: [
    {
      company: "Runchise (runchise.com)",
      position: "Frontend Engineer",
      duration: "2023 - Present",
    },
    {
      company: "Stockbit (stockbit.com)",
      position: "Frontend Engineer",
      duration: "2022 - 2023",
    },
    {
      company: "AGIT (ag-it.com)",
      position: "Frontend Engineer Intern",
      duration: "2021 - 2022",
    },
  ],
};

export const EDUCATION = {
  title: "My education",
  description:
    "Studied information systems with emphasis on software development, UI/UX, and digital technologies.",
  items: [
    {
      institution: "Institut Teknologi Kalimantan",
      degree: "Bachelor of Information Systems",
      duration: "2017 - 2021",
    },
  ],
};

export const SKILLS = {
  title: "My skills",
  description:
    "Experienced in web and mobile development using modern frameworks, tools, and best practices.",
  items: [
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next js",
    },
    {
      icon: <SiExpo />,
      name: "expo",
    },
    {
      icon: <SiNodedotjs />,
      name: "node js",
    },
    {
      icon: <SiExpress />,
      name: "express js",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
  ],
};

export const PROJECTS = [
  {
    num: "01",
    category: "Web Development",
    title: "PrepWise - AI Interview Platform",
    description:
      "AI-powered interview preparation platform with real-time feedback and guidance.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Firebase" },
    ],
    image: "/projects/prepwise.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Web Development",
    title: "3D Developer Portfolio Website",
    description:
      "Immersive 3D portfolio showcasing skills, projects, and creative visual experience.",
    stack: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Three.js" }],
    image: "/projects/3d-portfolio.png",
    live: "",
    github: "",
  },
];

export const INFO = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "muhammadputraage@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "Linkedin",
    value: "Muhammad Putra Age",
  },
  {
    icon: <FaGithub />,
    title: "Github",
    value: "muhammadputraage",
  },
];
