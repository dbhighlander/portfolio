"use client";

import style from "./header.module.css";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useActiveSectionAsScrollHeader } from "@/lib/hooks";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const activeLinkRef = useActiveSectionAsScrollHeader(activeSection);

  return (
    <header className={style.header}>
      <div className={style.motionWrapper}>
        <motion.div
          className={style.scrollableHeader}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        ></motion.div>

        <nav className={style.nav}>
          <ul className={style.ul}>
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className={style.li}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={style.link}
                  href={link.hash}
                  ref={activeSection === link.name ? activeLinkRef : undefined}
                  style={{
                    color:
                      activeSection === link.name
                        ? "var(--text-gray-950)"
                        : "var(--text-gray-200)",
                  }}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className={style.linkLozenge}
                    ></motion.span>
                  )}

                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
