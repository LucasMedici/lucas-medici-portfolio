/**
 * Featured projects showcased on the home page.
 */

export interface ProjectLink {
  readonly type: "repo" | "live" | "case-study";
  readonly label: string;
  readonly href: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly image?: string;
  readonly stack: readonly string[];
  readonly highlights: readonly string[];
  readonly featured: boolean;
  readonly links: readonly ProjectLink[];
}

export const projects: readonly Project[] = [
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    tagline: "The site you are reading right now.",
    description:
      "A premium, type-safe portfolio built with Next.js App Router, Tailwind " +
      "CSS v4 and Framer Motion. Designed to be fast, accessible and easy to " +
      "extend through a typed data layer.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Server Components by default with isolated client islands.",
      "Strict TypeScript types for every section's content.",
      "Hand-tuned animations with reduced-motion respect.",
    ],
    featured: true,
    links: [
      {
        type: "repo",
        label: "Source",
        href: "https://github.com/LucasMedici/lucas-medici-portfolio",
      },
    ],
  },
  {
    id: "project-two",
    name: "Project Showcase",
    tagline: "A representative production-grade application.",
    description:
      "Replace this entry with a flagship project. Describe the problem you " +
      "solved, the architecture decisions you made and the measurable impact " +
      "your work delivered.",
    stack: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    highlights: [
      "Describe a meaningful technical challenge you solved.",
      "Quantify the impact (latency, conversion, scale, reliability).",
      "Mention what you would do differently next time.",
    ],
    featured: true,
    links: [
      {
        type: "repo",
        label: "Source",
        href: "https://github.com/LucasMedici",
      },
    ],
  },
  {
    id: "project-three",
    name: "Open Source Contribution",
    tagline: "Giving back to the tools we use every day.",
    description:
      "Highlight a meaningful open source contribution, library or hobby " +
      "project. Tell readers what it does and why it matters to you.",
    stack: ["TypeScript", "Node.js"],
    highlights: [
      "Explain the contribution and its scope.",
      "Link to the relevant pull request or release.",
      "Share what you learned along the way.",
    ],
    featured: false,
    links: [
      {
        type: "repo",
        label: "Source",
        href: "https://github.com/LucasMedici",
      },
    ],
  },
];
