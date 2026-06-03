"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navLinks } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  const closeMobile = (): void => setMobileOpen(false);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium text-muted-foreground",
                  "transition-colors duration-200",
                  "hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={cn(
            "hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full",
            "text-sm font-medium text-foreground",
            "bg-card backdrop-blur-md border border-border",
            "transition-colors duration-300 hover:border-accent/50",
          )}
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
          className={cn(
            "md:hidden inline-flex items-center justify-center",
            "size-10 rounded-full",
            "bg-card backdrop-blur-md border border-border",
            "text-foreground",
          )}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen ? (
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-border bg-background/90 backdrop-blur-xl"
        >
          <ul className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMobile}
                  className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={closeMobile}
                className="block py-2 text-base font-medium text-foreground"
              >
                Get in touch →
              </a>
            </li>
          </ul>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
