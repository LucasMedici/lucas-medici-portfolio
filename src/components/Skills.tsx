"use client";

import { Code } from "lucide-react";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiAmazonaws,
  SiDocker,
  SiExpress,
  SiFfmpeg,
  SiGithubactions,
  SiHibernate,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { Section } from "@/components/ui/Section";
import { skillGroups, skillName } from "@/data/skills";
import { t } from "@/data/translations";
import { useLocale } from "@/lib/useLocale";

/** Brand icons by skill id; skills without a brand mark fall back to a code glyph. */
const skillIcons: Readonly<Record<string, IconType>> = {
  java: FaJava,
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  "spring-boot": SiSpringboot,
  nodejs: SiNodedotjs,
  nestjs: SiNestjs,
  express: SiExpress,
  swagger: SiSwagger,
  react: SiReact,
  nextjs: SiNextdotjs,
  "react-native": SiReact,
  tailwind: SiTailwindcss,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  prisma: SiPrisma,
  hibernate: SiHibernate,
  "llm-apis": SiOpenai,
  aws: SiAmazonaws,
  docker: SiDocker,
  linux: SiLinux,
  supabase: SiSupabase,
  vercel: SiVercel,
  "github-actions": SiGithubactions,
  rabbitmq: SiRabbitmq,
  ffmpeg: SiFfmpeg,
};

/**
 * Brand colors revealed on hover. Black/white brands (Next.js, Vercel,
 * Express, Prisma) and generic items are left out and keep the text color.
 */
const brandColors: Readonly<Record<string, string>> = {
  java: "#007396",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  python: "#3776AB",
  "spring-boot": "#6DB33F",
  nodejs: "#5FA04E",
  nestjs: "#E0234E",
  swagger: "#85EA2D",
  react: "#61DAFB",
  "react-native": "#61DAFB",
  tailwind: "#06B6D4",
  postgresql: "#4169E1",
  mysql: "#4479A1",
  mongodb: "#47A248",
  hibernate: "#59666C",
  "llm-apis": "#74AA9C",
  aws: "#FF9900",
  docker: "#2496ED",
  linux: "#FCC624",
  supabase: "#3ECF8E",
  "github-actions": "#2088FF",
  rabbitmq: "#FF6600",
  ffmpeg: "#007808",
};

/** While its chip is hovered the icon grows and takes its brand color. */
const chipIconMotion =
  "transition-[transform,color] duration-300 ease-soft group-hover/chip:scale-[1.2] group-hover/chip:text-(--brand)";

export function Skills() {
  const locale = useLocale();
  const texts = t(locale).skills;

  return (
    <Section id="skills" title={texts.title}>
      <div className="flex flex-col gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="grid gap-2 md:grid-cols-[128px_minmax(0,1fr)] md:gap-8"
          >
            <p className="text-[15px] text-muted-foreground md:pt-[7px]">
              {texts.groups[group.category]}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const Icon = skillIcons[skill.id];

                return (
                  <li
                    key={skill.id}
                    style={{ "--brand": brandColors[skill.id] } as CSSProperties}
                    className="group/chip inline-flex items-center gap-2 rounded-lg border border-chip px-3 py-1.5 text-[15px] transition-[transform,background-color,border-color] duration-300 ease-soft hover:scale-[1.05] hover:border-card-hover-border hover:bg-card-hover"
                  >
                    {Icon ? (
                      <Icon size={17} aria-hidden className={chipIconMotion} />
                    ) : (
                      <Code size={17} aria-hidden className={chipIconMotion} />
                    )}
                    {skillName(skill, locale)}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
