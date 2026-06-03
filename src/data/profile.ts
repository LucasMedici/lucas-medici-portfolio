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
  tagline: "Building reliable products with thoughtful engineering.",
  summary:
    "I am a software engineer focused on crafting performant web applications, " +
    "scalable backends, and developer experiences that feel polished. I enjoy " +
    "translating ambiguous problems into clean, well-typed code and shipping " +
    "iteratively with the people around me.",
  location: "Brazil",
  email: "lucasrpmedici@gmail.com",
  availability: "Open to new opportunities",
  avatarUrl: "/avatar.png",
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
