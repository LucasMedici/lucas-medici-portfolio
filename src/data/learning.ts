/**
 * Continuous learning items (courses, certifications, books, talks).
 */

export type LearningKind =
  | "course"
  | "certification"
  | "book"
  | "talk"
  | "degree";

export type LearningStatus = "in-progress" | "completed" | "planned";

export interface LearningItem {
  readonly id: string;
  readonly title: string;
  readonly provider: string;
  readonly kind: LearningKind;
  readonly status: LearningStatus;
  readonly period: string;
  readonly description: string;
  readonly url?: string;
}

export const learningItems: readonly LearningItem[] = [
  {
    id: "computer-science-degree",
    title: "Bachelor's in Computer Science",
    provider: "University",
    kind: "degree",
    status: "completed",
    period: "2020 — 2024",
    description:
      "Foundations in algorithms, distributed systems, software engineering " +
      "practices and applied mathematics.",
  },
  {
    id: "system-design",
    title: "Designing Data-Intensive Applications",
    provider: "Martin Kleppmann",
    kind: "book",
    status: "in-progress",
    period: "2025",
    description:
      "Deepening my understanding of storage engines, distributed consensus " +
      "and stream processing.",
  },
  {
    id: "aws-certification",
    title: "AWS Certified Solutions Architect — Associate",
    provider: "Amazon Web Services",
    kind: "certification",
    status: "planned",
    period: "2026",
    description:
      "Targeting a deeper, formally validated grasp of AWS architecture best " +
      "practices.",
  },
  {
    id: "advanced-typescript",
    title: "Total TypeScript",
    provider: "Matt Pocock",
    kind: "course",
    status: "completed",
    period: "2024",
    description:
      "Advanced TypeScript patterns, generic constraints and library author " +
      "ergonomics.",
  },
];
