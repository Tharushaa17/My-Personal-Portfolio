"use client"
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './Section-Heading';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/contex/active-section-context';

export default function About() {
  const {ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  if(inView) {
    setActiveSection("About");
  }
  
  return (
    <motion.section
    ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
            Iam a Graduate in{" "}
            <span className="font-medium">BSc (hons) Infomation Technology with Infomation 
            Technology Specilization </span>from Sri Lanka Institute of Information Technology (SLIIT), 
            I had passion for programming. I started coding and participate to undergraduate, 
            freelance projects and learned and devaloped my skills as a{" "}<span className="font-medium">full-
            stack devaloper</span>.{" "} Then i joined to the industry and contributed my skills to the couple 
            of companies as a <span className="font-medium">Intern, Asscoiate Software Engineer and now as a Software Engineer</span>.{" "}
            <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I 
            <span className="underline"> love</span> the feeling of applying technical solution to the real world 
            problems. My core stacks are {" "} <span className="font-medium">ASP.NET, ASP.Net Core, React, Express.js, Node.js, and MongoDB, MSSQL</span>
            . I am also familiar with Laravel and Java. I am always looking to learn new technologies. I am 
            currently working as a Software Engineer.
        </p>

        <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing chess, watching movies, and 
            playing with my dog. I also enjoy{" "}<span className="font-medium"> learning new things</span>. 
            I am currently learning about{" "}<span className="font-medium"> investing</span>.
        </p>
    </motion.section>
  )
}
