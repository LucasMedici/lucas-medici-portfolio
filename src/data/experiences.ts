/**
 * Professional experience entries rendered as a vertical timeline.
 *
 * Add new experiences to the top of the array (most recent first).
 */

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly location: string;
  readonly period: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
}

export const experiences: readonly Experience[] = [
  {
    id: "current-role",
    company: "Current Company",
    role: "Software Engineer",
    location: "Remote",
    period: "2024 — Present",
    summary:
      "Developing and maintaining production features across the stack with " +
      "a focus on TypeScript, observability, and clean architecture.",
    highlights: [
      "Designed and shipped end-to-end features used by thousands of users.",
      "Improved code quality by introducing typed boundaries and tests.",
      "Collaborated with product and design to refine user-facing flows.",
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "previous-role",
    company: "Previous Company",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "2023 — 2024",
    summary:
      "Contributed to internal tools and customer-facing dashboards while " +
      "ramping up on production engineering practices.",
    highlights: [
      "Implemented reusable UI components adopted across product teams.",
      "Reduced feedback loops by improving local development tooling.",
      "Wrote integration tests covering critical business workflows.",
    ],
    stack: ["TypeScript", "React", "Node.js", "Docker"],
  },
];
