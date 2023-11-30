"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi'
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/contex/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section  ref={ref} id='home' className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div 
                    initial={{ opacity: 0, scale: 0}}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{
                        type: "tween",
                        duration: 0.2
                    }}
                    >
                    <Image 
                        src='https://images.unsplash.com/photo-1700396210227-381be82c057e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                        alt='Tharusha Image'
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className='h-24 w-24 rounded-full object-cover border-[0.35rem] 
                                border-white shadow-xl'     
                    />
                    <motion.span 
                        className='absolute bottom-0 right-0 text-4xl'
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: "125",
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >👋</motion.span>
                </motion.div>
            </div>
        </div>
        <motion.p
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
        <span className="font-bold">Hello, I'm Tharushaa.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">more than one year</span> of indusry experience. I enjoy
        building <span className="italic">REST & Web Applications</span>. My main focus is{" "}
        <span className="underline">React.JS & Node.JS</span>.
      </motion.p>

      <motion.div 
            className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}
        >
        <Link 
            href="#contact"
            className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
                        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                        onClick={() => {
                            setActiveSection("Contact");
                            setTimeOfLastClick(Date.now());
                          }}
        >
            Contact Me Here. <BsArrowRight className='opacity-70 group-hover:translate-x-1 transistion'/>
        </Link>
        <a 
            className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                        focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black dark:bg-white/10' 
            href='/Tharushaa_Samaraweera_CV.pdf' 
            download
        >
            Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a 
            className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full
                        focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black'
            href='https://www.linkedin.com/in/tharushaa17/'
            target="_blank"
        >
            <BsLinkedin/>
        </a>
        <a 
            className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]
                        focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black'
            href='https://github.com/Tharushaa17'
            target="_blank"
        >
            <FaGithubSquare/>
        </a>
      </motion.div>
    </section>
  )
}
