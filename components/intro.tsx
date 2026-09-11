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
            src="/db.jfif"
            alt="David portrait"
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
        <span className="bold">David Burgess - Frontend Web Developer</span>
      </motion.h1>
      <motion.p
        className={style.subtitle}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
       I enjoy building well-crafted web applications, solving technical problems, and seeing them through from idea to completion. I'm looking for a <span className="bold">hands-on frontend developer role</span>, with the option of frontend-focused full-stack work.
      </motion.p>
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
          Contact<span className={style.hiddenMobile}> me here</span>{" "}
          <BsArrowRight />
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
