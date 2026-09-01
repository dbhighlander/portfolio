"use client";

import style from "./header.module.css";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useActiveSectionAsScrollHeader, useArrowsInHeader } from "@/lib/hooks";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const activeLinkRef = useActiveSectionAsScrollHeader(activeSection);
  const navRef = useRef<HTMLElement>(null);

  const { canScrollLeft, canScrollRight, scrollNav } =
    useArrowsInHeader(navRef);

  return (
    <header className={style.header}>
      <div className={style.motionWrapper}>
        <motion.div
          className={style.scrollableHeader}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        ></motion.div>

        <nav ref={navRef} className={style.nav}>
          {canScrollLeft && (
            <button
              type="button"
              aria-label="Scroll navigation left"
              onClick={() => scrollNav("left")}
              className={`${style.arrow} ${style.leftArrow}`}
            >
              <FiChevronLeft size={18} />
            </button>
          )}
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
          {canScrollRight && (
            <button
              type="button"
              aria-label="Scroll navigation right"
              onClick={() => scrollNav("right")}
              className={`${style.arrow} ${style.rightArrow}`}
            >
              <FiChevronRight size={18} />
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
