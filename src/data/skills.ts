/**
 * Technical skills grouped by category.
 *
 * Each skill renders in groups with small subtitles in the Skills section.
 */

export type SkillCategory =
  | "LANGUAGES"
  | "BACKEND & APIs"
  | "FRONTEND & MOBILE"
  | "DATABASES & ORM"
  | "AI & MACHINE LEARNING"
  | "CLOUD & INFRASTRUCTURE"
  | "MESSAGING & MEDIA PROCESSING";

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
    category: "LANGUAGES",
    description: "Core programming languages",
    items: [
      { name: "Java" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "SQL" },
    ],
  },
  {
    category: "BACKEND & APIs",
    description: "Frameworks, server-side development and API design",
    items: [
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "NestJS" },
      { name: "Swagger / OpenAPI" },
    ],
  },
  {
    category: "FRONTEND & MOBILE",
    description: "Interfaces, web and mobile development",
    items: [
      { name: "React" },
      { name: "Next.js" },
      { name: "React Native" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "DATABASES & ORM",
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
    category: "AI & MACHINE LEARNING",
    description: "Artificial intelligence and computer vision",
    items: [
      { name: "LLM APIs" },
      { name: "AI Agents" },
      { name: "YOLO" },
    ],
  },
  {
    category: "CLOUD & INFRASTRUCTURE",
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
    category: "MESSAGING & MEDIA PROCESSING",
    description: "Message brokers and media processing",
    items: [
      { name: "RabbitMQ" },
      { name: "FFmpeg" },
    ],
  },
];
