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
        I'm an experienced developer that's spent the last 10 years helping
        build commerical applications. My core stack is{" "}
        <span className="bold">React</span>,{" "}
        <span className="bold">Next.js, JavaScript(TypeScript)</span>,{" "}
        <span className="bold">CSS</span> and{" "}
        <span className="bold">Tailwind</span>. While I have backend experience
        with <span className="bold">PHP</span>, <span className="bold">Go</span>{" "}
        and <span className="bold">MySQL</span> and various cloud technologies
        in <span className="bold">AWS</span>, I feel I do my best work on the
        front-end. This is where I aim to take my career next.
      </p>

      <p className={style.aboutParagraph}>
        At this stage of my career, I'm deliberately looking for a{" "}
        <span className="bold">sustainable, hands-on development role </span>{" "}
        with a sensible workload and clear expectations. I'm more interested in
        doing good work in a role I can enjoy and sustain long-term than in
        pursuing management, leadership or career progression for its own sake.
      </p>
      <p className={style.aboutParagraph}>
        When I'm not coding, I enjoy getting outdoors, playing with the dog and
        watching films. Currently got into playing online chess and welcome any
        tips!
      </p>
    </motion.section>
  );
}
