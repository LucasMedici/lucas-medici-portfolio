/**
 * Anchor-based navigation entries used by the navbar and footer.
 */

export interface NavLink {
  readonly href: string;
  readonly label: string;
}

export const navLinks: readonly NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#learning", label: "Learning" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
