/**
 * Technical skills grouped by category.
 *
 * Each skill renders as an animated badge in the Skills section.
 */

export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Infrastructure"
  | "Tooling";

export interface Skill {
  readonly name: string;
  readonly level: "Learning" | "Proficient" | "Advanced";
}

export interface SkillGroup {
  readonly category: SkillCategory;
  readonly description: string;
  readonly items: readonly Skill[];
}

export const skillGroups: readonly SkillGroup[] = [
  {
    category: "Languages",
    description: "Day-to-day languages I reach for to solve problems.",
    items: [
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Python", level: "Proficient" },
      { name: "SQL", level: "Proficient" },
    ],
  },
  {
    category: "Frontend",
    description: "Building responsive, accessible interfaces with modern React.",
    items: [
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Proficient" },
    ],
  },
  {
    category: "Backend",
    description: "API design, data modeling and service-oriented architectures.",
    items: [
      { name: "Node.js", level: "Advanced" },
      { name: "REST APIs", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "GraphQL", level: "Learning" },
    ],
  },
  {
    category: "Infrastructure",
    description: "Shipping and operating software on the cloud with confidence.",
    items: [
      { name: "AWS", level: "Proficient" },
      { name: "Docker", level: "Proficient" },
      { name: "Vercel", level: "Advanced" },
      { name: "GitHub Actions", level: "Proficient" },
    ],
  },
  {
    category: "Tooling",
    description: "Engineering hygiene, testing and developer experience.",
    items: [
      { name: "Git", level: "Advanced" },
      { name: "ESLint", level: "Advanced" },
      { name: "Vitest / Jest", level: "Proficient" },
      { name: "Linux", level: "Proficient" },
    ],
  },
];
