import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceSection } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Learning } from "@/components/Learning";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

/**
 * Portfolio home page (Server Component).
 *
 * Composes the section blocks in reading order. Sections are client
 * components only because their copy follows the visitor's locale.
 */
export default function HomePage() {
  return (
    <div className="px-5">
      <Navbar />
      <main id="main">
        <Hero />
        <ExperienceSection />
        <Projects />
        <Learning />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
