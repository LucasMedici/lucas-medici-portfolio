/**
 * Technical skills grouped by category.
 *
 * Each skill renders in groups with small subtitles in the Skills section.
 */

export type SkillCategory =
  | "Linguagens"
  | "Backend & APIs"
  | "Frontend & Mobile"
  | "Databases & ORM"
  | "Cloud & Infrastructure"
  | "Messaging & AI";

export interface Skill {
  readonly name: string;
}

export interface SkillGroup {
  readonly category: SkillCategory;
  readonly description: string;
  readonly items: readonly Skill[];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    category: "Linguagens",
    description: "Core programming languages",
    items: [
      { name: "Java" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "SQL" },
      { name: "C" },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Frameworks, server-side development and API design",
    items: [
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "NestJS" },
      { name: "REST APIs" },
      { name: "Swagger / OpenAPI" },
    ],
  },
  {
    category: "Frontend & Mobile",
    description: "Interfaces, web and mobile development",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Databases & ORM",
    description: "Data persistence, databases and ORMs",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Prisma" },
      { name: "JPA / Hibernate" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    description: "Cloud platforms, containerization and tooling",
    items: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Linux" },
      { name: "Supabase" },
      { name: "Vercel" },
      { name: "GitHub Actions" },
    ],
  },
  {
    category: "Messaging & AI",
    description: "Message brokers, artificial intelligence and media processing",
    items: [
      { name: "RabbitMQ" },
      { name: "YOLO" },
      { name: "LLM APIs" },
      { name: "AI Agents" },
      { name: "FFmpeg" },
    ],
  },
];
