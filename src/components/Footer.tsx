import { Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background/60 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="text-xs text-subtle-foreground">
          © {year} {profile.name}. Built with Next.js, Tailwind CSS &amp; Framer
          Motion.
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a
              href={profile.socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={profile.socials.github.label}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Github size={20} aria-hidden />
            </a>
          </li>
          <li>
            <a
              href={profile.socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={profile.socials.linkedin.label}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Linkedin size={20} aria-hidden />
            </a>
          </li>
          <li>
            <a
              href={profile.socials.email.href}
              aria-label={profile.socials.email.label}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <Mail size={20} aria-hidden />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
