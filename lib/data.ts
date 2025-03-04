import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import HealthMonitor from "../public/healthmonitor.png";
import YoutubeClone from "../public/youtubeclone.png";
import ShoeStore from "../public/shoestore.jpg";
import TaskApp from "../public/taskapp.png";
import RealEstate from "../public/realestate.png";

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
    title:
      "BSc (hons) Infomation Technology Specilize in Infomation Technology",
    location: "Sri Lanka Institute of Information Technology",
    description:
      "I graduated after 4 years of studying  during that time i have attempt some undergraduate projects and a Reserch as well.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2023",
  },
  {
    title: "Software Engineer",
    location: "Business Application Services Division - SLIIT",
    description:
      "I am working as a fullstack developer in non Academic Staff by Devaloping in house devalopments and Maintain internal systems. using ASP.NET, ASP.NET Core, JS, MSSQL",
    icon: React.createElement(CgWorkAlt),
    date: "2024 March - Present",
  },
  {
    title: "Associate Software Engineer",
    location: "Konekt Holdings (Pvt) Ltd",
    description:
      "I worked as a fullstack developer for this company and i have  participated for couple projects.in React Nodejs MongoDB I also upskilled as the full stack devalooper.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 June - 2023 July",
  },
  {
    title: "Intern Software Engineer",
    location: "D Help Hub (Pvt) Ltd",
    description:
      "I'm got a six month internship as full-stack developer and the project i have worked include React, Laravel.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 October - 2022 April",
  },
  {
    title: "Freelancer",
    location: "Work from Home",
    description:
      "I'm doing short term some small projects in Javascript, React, Nodejs, MongoDB and UI as part time, especially a Web Devalopments",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Real Estate APP",
    description:
      "This is a modern Real Estate Listing platform. Which buyers can come and see the listed properties while the registered useres able to list a Ads on it",
    tags: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "Mongodb",
      "Firebase",
      "O Auth 2.0",
    ],
    imageUrl: RealEstate,
  },
  {
    title: "Health Monitor",
    description:
      "This is my final year Reasearch and this Mobile App predict the proper exercises plan and meal Plan using scanned the blood reports & entered data.",
    tags: ["Java", "TensorFlow", "PyCharm", "Android Studio", "Flask"],
    imageUrl: HealthMonitor,
  },
  {
    title: "Youtube Clone UI Project",
    description:
      "This is a UI UX Application which allows to watch and search Youtube videos & refer the other infomations as well.",
    tags: ["React", "Javascript", "Rapid API", "Metirial-UI"],
    imageUrl: YoutubeClone,
  },
  {
    title: "Shoe Store UI Project",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Javascript", "React.js", "Tailwind CSS"],
    imageUrl: ShoeStore,
  },
  {
    title: "Task App",
    description:
      "This App can Add a Task and Update & Delete it as well as when the task is done we can make it as compleated.",
    tags: ["Javascript", "Node.js", "Express.js", "MongoDB", "CSS"],
    imageUrl: TaskApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Java",
  "C#",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Matrial UI",
  "MongoDB",
  "Redux",
  "Laravel",
  "MySQL",
  "Express.js",
  "Springboot",
  "ASP.NET",
  "ASP.NET Core",
  "Zoho Project Manegment",
] as const;
