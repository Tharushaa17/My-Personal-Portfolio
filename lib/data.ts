import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import HealthMonitor from "@/public/HealthMonitor.png";
import YoutubeClone from "@/public/YoutubeClone.png";
import ShoeStore from "@/public/ShoeStore.jpg";
import TaskApp from "@/public/TaskApp.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
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
    tags: [ "Javascript", "React.js", "Tailwind CSS" ],
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
  "Zoho Project Manegment",
] as const;