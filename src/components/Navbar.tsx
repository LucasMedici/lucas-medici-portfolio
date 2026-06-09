"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

import { profile } from "@/data/profile";
import { t } from "@/data/translations";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/useLocale";

const navHrefs = ["#about", "#experience", "#projects", "#learning", "#skills", "#contact"] as const;

type Locale = "en" | "pt-br";

function LanguageToggle() {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved) setLocale(saved);
  }, []);

  const switchTo = (l: Locale) => {
    setLocale(l);
    localStorage.setItem("locale", l);
    window.dispatchEvent(new CustomEvent("locale-change", { detail: l }));
  };

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card backdrop-blur-md overflow-hidden">
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={cn(
          "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all duration-200",
          locale === "en"
            ? "bg-accent/15 text-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </button>
      <span className="w-px h-4 bg-border" />
      <button
        type="button"
        onClick={() => switchTo("pt-br")}
        className={cn(
          "px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all duration-200",
          locale === "pt-br"
            ? "bg-accent/15 text-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        PT
      </button>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const locale = useLocale();
  const labels = t(locale).nav;
  const navItems = navHrefs.map((href) => ({
    href,
    label: labels[href.slice(1) as keyof typeof labels],
  }));

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
          className="text-2xl font-bold tracking-tight text-foreground"
        >
          {profile.name}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((link) => (
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

        <div className="hidden md:flex items-center">
          <LanguageToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((prev) => !prev)}
            className={cn(
              "inline-flex items-center justify-center",
              "size-10 rounded-full",
              "bg-card backdrop-blur-md border border-border",
              "text-foreground",
            )}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
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
            {navItems.map((link) => (
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
          </ul>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
