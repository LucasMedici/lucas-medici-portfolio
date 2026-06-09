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

const iconMap: Record<string, React.ReactNode> = {
  TypeScript: <SiTypescript size={28} />,
  JavaScript: <SiJavascript size={28} />,
  Python: <SiPython size={28} />,
  SQL: <Database size={28} />,
  React: <SiReact size={28} />,
  "Next.js": <SiNextdotjs size={28} />,
  "Tailwind CSS": <SiTailwindcss size={28} />,
  "Framer Motion": <SiFramer size={28} />,
  "Node.js": <SiNodedotjs size={28} />,
  "REST APIs": <Network size={28} />,
  PostgreSQL: <SiPostgresql size={28} />,
  GraphQL: <SiGraphql size={28} />,
  AWS: <SiAmazonaws size={28} />,
  Docker: <SiDocker size={28} />,
  Vercel: <SiVercel size={28} />,
  "GitHub Actions": <SiGithubactions size={28} />,
  Git: <SiGit size={28} />,
  ESLint: <SiEslint size={28} />,
  "Vitest / Jest": <SiVitest size={28} />,
  Linux: <SiLinux size={28} />,
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
              <span className="text-muted-foreground/80">
                {iconMap[skill.name]}
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
