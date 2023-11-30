"use client"

import React from "react";
import { experiencesData } from "@/lib/data";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component"
import SectionHeading from "./Section-Heading";
import { useTheme } from "@/contex/theme-context";
import { useSectionInView } from "@/lib/hooks";

export default function Expiriance() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb:-40">
      <SectionHeading>My Experiance</SectionHeading>
      <VerticalTimeline >
        {experiencesData.map((items, index)=>(
          <React.Fragment key={index}>
            <VerticalTimelineElement
             contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={items.date}
            icon={items.icon}
            iconStyle={{
              background:
                theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
            >
              <h3 className="font-semibold capitalize">{items.title}</h3>
              <p className="font-normal !mt-0">{items.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{items.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}