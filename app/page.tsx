import Intro from "@/components/intro";
import styles from "./page.module.css";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className={styles.content}>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience/>
      <Contact />
    </main>
  );
}
