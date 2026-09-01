"use client";
import { projectsData } from "@/lib/data";
import style from "./project.module.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      className={style.projectCardContainer}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className={style.projectCard}>
        <div className={style.projectInfo}>
          <h3 className={style.projectTitle}>{title}</h3>
          <p className={style.projectDescription}>{description}</p>
          <ul className={style.tagList}>
            {tags.map((tag, index) => (
              <li key={index} className={style.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className={style.projectImageWrapper}>
          <Image
            className={style.projectImage}
            src={imageUrl}
            alt="Projects I worked on"
            quality={95}
          />
        </div>
      </section>
    </motion.div>
  );
}

export default Project;
