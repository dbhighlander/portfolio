import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { LuBookOpen } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Retrained Front-end Developer / Author",
    location: "Carnoustie, Scotland",
    linkname: "Amazon Listing",
    website: "https://www.amazon.co.uk/Managing-Stress-Tech-Industry-Situations/dp/B0HC41XZBP",
    description:
      "Whilst caring for family, I completed my book Managing Stress in Tech and released on Amazon. Upskilled in front-end development focusing on projects using NextJS, TypeScript and modern CSS.",
    icon: React.createElement(FaReact),
    date: "2025 - Present",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    linkname: "Aline Digital",
    website: "https://aline.digital",
    description:
      "Worked across the full-stack on a legacy PHP chatbot application, and numerous client projects.  Learned classic React using classes/hooks and improved front-end skills with CSS and responsive design.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2025",
  },
  {
    title: "Web Developer",
    location: "St Andrews, Scotland",
    website: "https://www.teamcard.com",
    linkname: "teamcard",
    description:
      "Focused on legacy ticketing systems written in PHP and older JavaScript libraries",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2019",
  },
    {
    title: "MSc Computing Science and IT",
    location: "University of St Andrews, Scotland",
    website: "",
    description:
      "Completed 1 year postgraduate specialising in practical web applications.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2014",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Jest",
  "Tailwind",
  "Framer Motion",
  "PHP",
  "MySQL",
  "Golang",
  "AWS",
  "Linux",
  "Git",
] as const;