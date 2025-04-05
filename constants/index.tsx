import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officiis.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, officiis.",
    href: "",
  },
];

export const ABOUT = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim doloribus omnis nam!",
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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim doloribus omnis nam!",
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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim doloribus omnis nam!",
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
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim doloribus omnis nam!",
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
