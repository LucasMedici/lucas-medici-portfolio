/**
 * Static profile data shown across the portfolio.
 *
 * Update this file (and the sibling files in `src/data/`) to refresh
 * portfolio content without touching components.
 */

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly handle: string;
}

export interface Profile {
  readonly name: string;
  readonly headline: string;
  readonly tagline: string;
  readonly summary: string;
  readonly location: string;
  readonly email: string;
  readonly availability: string;
  readonly avatarUrl: string;
  readonly resumeUrl?: string;
  readonly socials: {
    readonly github: SocialLink;
    readonly linkedin: SocialLink;
    readonly email: SocialLink;
  };
}

export const profile: Profile = {
  name: "Lucas Medici",
  headline: "Software Engineer",
  tagline: "Designing systems. Building solutions. Shipping software.",
  summary:
    "I'm a Software Engineer who builds end-to-end software systems and digital " +
    "products, from understanding requirements and defining architecture to " +
    "implementing, integrating, and delivering software to production.",
  location: "Brazil",
  email: "lucasrpmedici@gmail.com",
  availability: "Welcome",
  avatarUrl: "/foto2.jpg",
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/LucasMedici",
      handle: "@LucasMedici",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lucasmedici",
      handle: "in/lucasmedici",
    },
    email: {
      label: "Email",
      href: "mailto:lucasrpmedici@gmail.com",
      handle: "lucasrpmedici@gmail.com",
    },
  },
};
