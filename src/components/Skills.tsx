"use client";

import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiAmazonaws,
  SiDocker,
  SiVercel,
  SiGithubactions,
  SiLinux,
  SiMongodb,
  SiSpringboot,
  SiNestjs,
  SiSwagger,
  SiMysql,
  SiPrisma,
  SiSupabase,
  SiRabbitmq,
  SiOpenai,
  SiFfmpeg,
} from "react-icons/si";
import { Database, Network, Bot, Cloud, MessageSquare, Film, Box, Server, Code } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";
import { t } from "@/data/translations";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/useLocale";

const skillVisuals: Record<
  string,
  { icon: React.ReactNode; color: string }
> = {
  "Java": { icon: <FaJava size={28} />, color: "#007396" },
  "TypeScript": { icon: <SiTypescript size={28} />, color: "#3178C6" },
  "JavaScript": { icon: <SiJavascript size={28} />, color: "#F7DF1E" },
  "Python": { icon: <SiPython size={28} />, color: "#3776AB" },
  "SQL": { icon: <Database size={28} />, color: "#336791" },
  "C": { icon: <Code size={28} />, color: "#A8B9CC" },
  "Spring Boot": { icon: <SiSpringboot size={28} />, color: "#6DB33F" },
  "Node.js": { icon: <SiNodedotjs size={28} />, color: "#339933" },
  "Express": { icon: <Server size={28} />, color: "#FFFFFF" },
  "NestJS": { icon: <SiNestjs size={28} />, color: "#E0234E" },
  "Swagger / OpenAPI": { icon: <SiSwagger size={28} />, color: "#85EA2D" },
  "React": { icon: <SiReact size={28} />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs size={28} />, color: "#FFFFFF" },
  "React Native": { icon: <SiReact size={28} />, color: "#61DAFB" },
  "Tailwind CSS": { icon: <SiTailwindcss size={28} />, color: "#06B6D4" },
  "PostgreSQL": { icon: <SiPostgresql size={28} />, color: "#4169E1" },
  "MySQL": { icon: <SiMysql size={28} />, color: "#4479A1" },
  "MongoDB": { icon: <SiMongodb size={28} />, color: "#47A248" },
  "Prisma": { icon: <SiPrisma size={28} />, color: "#2D3748" },
  "JPA / Hibernate": { icon: <Database size={28} />, color: "#59666C" },
  "AWS": { icon: <SiAmazonaws size={28} />, color: "#FF9900" },
  "Docker": { icon: <SiDocker size={28} />, color: "#2496ED" },
  "Linux": { icon: <SiLinux size={28} />, color: "#FCC624" },
  "Supabase": { icon: <SiSupabase size={28} />, color: "#3ECF8E" },
  "Vercel": { icon: <SiVercel size={28} />, color: "#FFFFFF" },
  "GitHub Actions": { icon: <SiGithubactions size={28} />, color: "#2088FF" },
  "RabbitMQ": { icon: <SiRabbitmq size={28} />, color: "#FF6600" },
  "YOLO": { icon: <Box size={28} />, color: "#0088CC" },
  "LLM APIs": { icon: <SiOpenai size={28} />, color: "#74AA9C" },
  "AI Agents": { icon: <Bot size={28} />, color: "#A855F7" },
  "FFmpeg": { icon: <SiFfmpeg size={28} />, color: "#007808" },
};

export function Skills() {
  const locale = useLocale();
  const texts = t(locale);

  const isPt = locale === "pt-br";

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

        {skillGroups.map((group) => (
          <div key={group.category} className="mt-14">
            <h3 className="text-sm font-semibold text-foreground/80 tracking-wider uppercase mb-6">
              {isPt && group.category === "LANGUAGES" ? "LINGUAGENS" : group.category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {group.items.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1.5 p-2.5 rounded-xl",
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
                  <span className="text-[11px] font-medium text-foreground text-center leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
