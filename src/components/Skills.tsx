"use client";

import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPostgresql,
  SiGraphql,
  SiAmazonaws,
  SiDocker,
  SiVercel,
  SiGithubactions,
  SiGit,
  SiEslint,
  SiVitest,
  SiLinux,
} from "react-icons/si";
import { Database, Network } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";
import { t } from "@/data/translations";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/useLocale";

const skillVisuals: Record<
  string,
  { icon: React.ReactNode; color: string }
> = {
  TypeScript: { icon: <SiTypescript size={28} />, color: "#3178C6" },
  JavaScript: { icon: <SiJavascript size={28} />, color: "#F7DF1E" },
  Python: { icon: <SiPython size={28} />, color: "#3776AB" },
  SQL: { icon: <Database size={28} />, color: "#336791" },
  React: { icon: <SiReact size={28} />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs size={28} />, color: "#FFFFFF" },
  "Tailwind CSS": { icon: <SiTailwindcss size={28} />, color: "#06B6D4" },
  "Framer Motion": { icon: <SiFramer size={28} />, color: "#0055FF" },
  "Node.js": { icon: <SiNodedotjs size={28} />, color: "#339933" },
  "REST APIs": { icon: <Network size={28} />, color: "#89BF04" },
  PostgreSQL: { icon: <SiPostgresql size={28} />, color: "#4169E1" },
  GraphQL: { icon: <SiGraphql size={28} />, color: "#E10098" },
  AWS: { icon: <SiAmazonaws size={28} />, color: "#FF9900" },
  Docker: { icon: <SiDocker size={28} />, color: "#2496ED" },
  Vercel: { icon: <SiVercel size={28} />, color: "#FFFFFF" },
  "GitHub Actions": {
    icon: <SiGithubactions size={28} />,
    color: "#2088FF",
  },
  Git: { icon: <SiGit size={28} />, color: "#F05032" },
  ESLint: { icon: <SiEslint size={28} />, color: "#4B32C3" },
  "Vitest / Jest": { icon: <SiVitest size={28} />, color: "#6E9F18" },
  Linux: { icon: <SiLinux size={28} />, color: "#FCC624" },
};

const allSkills = skillGroups.flatMap((g) => g.items);

export function Skills() {
  const locale = useLocale();
  const texts = t(locale);

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={texts.skills.title}
          title={<span id="skills-title">{texts.skills.title}</span>}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {allSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ y: -4, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "flex flex-col items-center justify-center gap-3 p-5 aspect-square rounded-2xl",
                "border border-border bg-card/50 backdrop-blur-md",
                "cursor-default transition-colors duration-200",
                "hover:border-accent/40 hover:bg-surface-elevated/80",
              )}
            >
              <span
                className="transition-transform duration-200"
                style={{ color: skillVisuals[skill.name]?.color }}
              >
                {skillVisuals[skill.name]?.icon}
              </span>
              <span className="text-xs font-medium text-foreground text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
