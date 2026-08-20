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
  {
    id: "project-four",
    name: "Side Project",
    tagline: "A small tool that scratches a personal itch.",
    description:
      "Describe a product you built solo or with a small crew. Cover the " +
      "core problem, the target audience and what makes it stand out.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Explain the main feature and how it works.",
      "Share the tech choices that made development fast.",
      "Describe what you learned about product and distribution.",
    ],
    featured: false,
    links: [
      {
        type: "live",
        label: "Live demo",
        href: "https://github.com/LucasMedici",
      },
      {
        type: "repo",
        label: "Source",
        href: "https://github.com/LucasMedici",
      },
    ],
  },
  {
    id: "project-five",
    name: "Product Engineering",
    tagline: "An end-to-end system shipped to real users.",
    description:
      "Showcase a larger system you built or led. Walk through the API " +
      "design, data model and the operational concerns you accounted for.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    highlights: [
      "Describe the system architecture at a high level.",
      "Quantify scale, reliability or performance wins.",
      "Detail a hard bug or incident you resolved.",
    ],
    featured: false,
    links: [
      {
        type: "case-study",
        label: "Case study",
        href: "https://github.com/LucasMedici",
      },
    ],
  },
];
