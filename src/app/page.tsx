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
 * Composes static section blocks. Interactive concerns are isolated to client
 * components (Navbar, Hero, Experience, Skills, Projects, Learning, Contact).
 */
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <Learning />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
