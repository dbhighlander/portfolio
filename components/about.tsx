"use client";

import React, { useEffect } from "react";
import style from "./about.module.css";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className={`container section-container ${style.aboutContainer}`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className={style.aboutParagraph}>
        After working for many years as a full-stack developer, I've switched to
        front-end development. My core stack is{" "}
        <span className="bold">React</span>,{" "}
        <span className="bold">Next.js, JavaScript(TypeScript)</span>,{" "}
        <span className="bold">CSS</span> and{" "}
        <span className="bold">Tailwind</span>. I do however have substantial
        experience working on the backend with <span className="bold">PHP</span> and <span className="bold">MySQL</span> and various cloud technologies in <span className="bold">AWS</span>. I always feel at
        home working on technical challenges and learning new things.
      </p>
      <p className={style.aboutParagraph}>
        When I'm not coding, I enjoy getting outdoors, playing with the dog and
        watching films. Currently got into playing online chess and welcome any
        tips!
      </p>
    </motion.section>
  );
}
