/**
 * Technical skills grouped by category.
 *
 * Group labels are localized in `translations.ts`. Brand names stay the same
 * in every language; generic items carry a per-locale name.
 */

import type { Locale } from "@/lib/useLocale";

export type SkillCategory =
  | "LANGUAGES"
  | "BACKEND & APIs"
  | "FRONTEND & MOBILE"
  | "DATABASES & ORM"
  | "AI & MACHINE LEARNING"
  | "CLOUD & INFRASTRUCTURE"
  | "MESSAGING & MEDIA PROCESSING";

export interface Skill {
  /** Stable identifier, also used to look up the icon. */
  readonly id: string;
  readonly name: string | Readonly<Record<Locale, string>>;
}

export interface SkillGroup {
  readonly category: SkillCategory;
  readonly items: readonly Skill[];
}

export function skillName(skill: Skill, locale: Locale): string {
  return typeof skill.name === "string" ? skill.name : skill.name[locale];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    category: "LANGUAGES",
    items: [
      { id: "java", name: "Java" },
      { id: "typescript", name: "TypeScript" },
      { id: "javascript", name: "JavaScript" },
      { id: "python", name: "Python" },
      { id: "sql", name: "SQL" },
    ],
  },
  {
    category: "BACKEND & APIs",
    items: [
      { id: "spring-boot", name: "Spring Boot" },
      { id: "nodejs", name: "Node.js" },
      { id: "nestjs", name: "NestJS" },
      { id: "express", name: "Express" },
      { id: "swagger", name: "Swagger" },
    ],
  },
  {
    category: "FRONTEND & MOBILE",
    items: [
      { id: "react", name: "React" },
      { id: "nextjs", name: "Next.js" },
      { id: "react-native", name: "React Native" },
      { id: "tailwind", name: "Tailwind" },
    ],
  },
  {
    category: "DATABASES & ORM",
    items: [
      { id: "postgresql", name: "PostgreSQL" },
      { id: "mysql", name: "MySQL" },
      { id: "mongodb", name: "MongoDB" },
      { id: "prisma", name: "Prisma" },
      { id: "hibernate", name: "Hibernate" },
    ],
  },
  {
    category: "AI & MACHINE LEARNING",
    items: [
      { id: "llm-apis", name: { en: "LLM APIs", "pt-br": "APIs de LLM" } },
      { id: "ai-agents", name: { en: "AI agents", "pt-br": "Agentes" } },
      { id: "yolo", name: "YOLO" },
    ],
  },
  {
    category: "CLOUD & INFRASTRUCTURE",
    items: [
      { id: "aws", name: "AWS" },
      { id: "docker", name: "Docker" },
      { id: "linux", name: "Linux" },
      { id: "supabase", name: "Supabase" },
      { id: "vercel", name: "Vercel" },
      { id: "github-actions", name: "GitHub Actions" },
    ],
  },
  {
    category: "MESSAGING & MEDIA PROCESSING",
    items: [
      { id: "rabbitmq", name: "RabbitMQ" },
      { id: "ffmpeg", name: "FFmpeg" },
    ],
  },
];
