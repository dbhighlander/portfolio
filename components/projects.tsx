"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import style from "./projects.module.css";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className={`container section-container ${style.projectContainer}`}
    >
      <SectionHeading>My Projects</SectionHeading>
      <p className={style.subtitle}>Here are some live personal projects that demonstrate my skills.</p>
      <div className={style.projectsList}>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
