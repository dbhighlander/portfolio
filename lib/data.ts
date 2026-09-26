import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import carHubImg from "@/public/carhub.png";
import chatbotImg from "@/public/chatbot.png";
import educationSiteImg from "@/public/education-site.png";

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
    title: "Front-end Developer / Author",
    location: "Carnoustie, Scotland",
    linkname: "Amazon Listing",
    website:
      "https://www.amazon.co.uk/Managing-Stress-Tech-Industry-Situations/dp/B0HC41XZBP",
    description:
      "Improved front-end development skills focusing on personal projects using NextJS, TypeScript and modern CSS. Whilst caring for family, I completed my book Managing Stress in Tech and released on Amazon. ",
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
      "Focused on legacy ticketing systems written in PHP and older JavaScript libraries.  Implemented REST API for ticket transactions handling 10,000s of data",
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
    title: "CarHub",
    description: "A landing search page for an e-commerce car site. ",
    challenges:
      "State management, filtering, API integrations and asynchronous loading.",
    tags: ["TypeScript", "React", "Next.js", "CSS", "APIs", "Vercel"],
    siteUrl: "https://carhub-sepia-omega.vercel.app/",
    imageUrl: carHubImg,
    githubUrl: "https://github.com/dbhighlander/carhub-demo",
  },
  {
    title: "AI Chatbot Frontend",
    challenges:
      "Integrating cookies and persisting state, AI APIs, UI design ",
    description:
      "AI chatbot where users can talk to a Starwars character!  Aimed for a robust chat interface",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Cookies",
      "Golang",
      "AI",
      "Vercel",
    ],
    siteUrl: "https://star-wars-chat-frontend.vercel.app/",
    imageUrl: chatbotImg,
    githubUrl: "https://github.com/dbhighlander/star_wars_chat_frontend",
  },
  {
    title: "Education Site",
    description:
      "Prototype for a portal",
      challenges:
      "Taught myself Next.js and the ecosystem of modern React: SSR and CSR. SSR design patterns, Site Architecture",
    tags: ["React", "Next.js", "Tailwind", "React Charts", "Vercel"],
    siteUrl: "https://education-dashboard-six.vercel.app/admin",
    imageUrl: educationSiteImg,
    githubUrl: "https://github.com/dbhighlander/education-dashboard",
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
