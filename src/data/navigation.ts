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
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];
