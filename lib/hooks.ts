"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

//When section scrolls into view, set the section name to the global active section
//sectionName - string
//threshold - percentage of section in view to trigger function
export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

//Attach scroll effect to move active link in header to currently scrolled section
export function useActiveSectionAsScrollHeader(activeSection: SectionName) {
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    activeLinkRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeSection]);

  return activeLinkRef;
}

//Conditionally show navigation arrows in header on narrow screens
//Note this is disabled in mobile because of the native touch scroll
//ref - RefObject to containing navigation bar
export function useArrowsInHeader(ref: React.RefObject<HTMLElement | null>) {
  const [isOverflowing, setIsOverflowing] = useState(false);//ul is overflowing containing nav
  const [canScrollLeft, setCanScrollLeft] = useState(false);//user can move links left
  const [canScrollRight, setCanScrollRight] = useState(false);//user can move links right
  type Direction = "left" | "right";

  const checkOverflow = () => {
    const nav = ref.current;

    if (!nav) return;

    const { scrollLeft, clientWidth, scrollWidth } = nav;

    setIsOverflowing(scrollWidth > clientWidth);
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  //move the links in a direction
  const scrollNav = (direction: Direction) => {
    ref.current?.scrollBy({
      left: direction === "left" ? -150 : 150,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    //Attach overflow check to resize handler
    const nav = ref.current;

    if (!nav) return;

    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(nav);

    nav.addEventListener("scroll", checkOverflow);

    return () => {
      observer.disconnect();
      nav.removeEventListener("scroll", checkOverflow);
    };
  }, []);

  return {
    canScrollLeft: canScrollLeft && isOverflowing,
    canScrollRight: canScrollRight && isOverflowing,
    scrollNav,
  };
}
