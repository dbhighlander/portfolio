"use client";
import style from "./intro.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className={`container  ${style.introContainer}`}
      id="home"
      ref={ref}
    >
      <div className={style.imageWrapper}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Ricardo portrait"
            width={192}
            height={192}
            quality={75}
            priority={true}
            className={style.portfolioImage}
          />
        </motion.div>
      </div>
      <motion.h1
        className={style.introText}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="bold">Hello, I'm David</span> - a web developer with{" "}
        <span className="bold">many years</span> of experience. My focus is
        React (Next.js), JavaScript (TypeScript) and CSS.
      </motion.h1>
      <motion.div
        className={style.buttonList}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className={style.contactLink}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact<span className={style.hiddenMobile}> me here</span> <BsArrowRight />
        </Link>
        <a className={style.downloadButton} href="/CV.pdf" download>
          <span className={style.hiddenMobile}>Download </span>CV <HiDownload />
        </a>
        <a
          className={style.linkedinButton}
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className={style.githubButton}
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
