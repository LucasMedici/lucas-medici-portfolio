"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";

import { profile } from "@/data/profile";
import { t } from "@/data/translations";
import { cn } from "@/lib/cn";
import { type Locale, setLocale, useLocale } from "@/lib/useLocale";
import { setTheme, useTheme } from "@/lib/useTheme";

const navHrefs = [
  "#experience",
  "#projects",
  "#learning",
  "#skills",
  "#about",
  "#contact",
] as const;

/** Language names stay in their own language, whatever the current locale. */
const languages: readonly {
  readonly locale: Locale;
  readonly short: string;
  readonly name: string;
  readonly htmlLang: string;
}[] = [
  { locale: "pt-br", short: "PT", name: "Português", htmlLang: "pt-BR" },
  { locale: "en", short: "EN", name: "English", htmlLang: "en" },
];

function LanguageSwitch({ locale, label }: { readonly locale: Locale; readonly label: string }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-full border border-chip p-0.5"
    >
      {languages.map((language) => {
        const active = language.locale === locale;

        return (
          <button
            key={language.locale}
            type="button"
            lang={language.htmlLang}
            aria-label={language.name}
            aria-pressed={active}
            onClick={() => setLocale(language.locale)}
            className={cn(
              "inline-flex h-10 min-w-10 items-center justify-center rounded-full px-2.5 font-mono text-xs md:h-8 md:min-w-8",
              "transition-colors",
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {language.short}
          </button>
        );
      })}
    </div>
  );
}

function ThemeToggle({ toDark, toLight }: { readonly toDark: string; readonly toLight: string }) {
  const theme = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? toLight : toDark}
      className={cn(
        "group/theme inline-flex size-11 items-center justify-center rounded-full border border-chip md:size-9",
        "text-muted-foreground transition-colors hover:text-foreground",
      )}
    >
      {isDark ? (
        <Sun
          size={18}
          aria-hidden
          className="transition-transform duration-500 ease-soft group-hover/theme:rotate-45"
        />
      ) : (
        <Moon
          size={18}
          aria-hidden
          className="transition-transform duration-500 ease-soft group-hover/theme:-rotate-12"
        />
      )}
    </button>
  );
}

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

export function Navbar() {
  const locale = useLocale();
  const texts = t(locale);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 8,
    () => false,
  );
  const navItems = navHrefs.map((href) => ({
    href,
    label: texts.nav[href.slice(1) as keyof typeof texts.nav],
  }));

  useEffect(() => {
    document.documentElement.lang = locale === "pt-br" ? "pt-BR" : "en";
  }, [locale]);

  const closeMenu = (): void => setMenuOpen(false);

  return (
    // Sticky with a solid background (no blur). It keeps a constant height so
    // the page never jumps; only the bottom hairline appears once scrolled.
    <header
      className={cn(
        "sticky top-0 z-40 -mx-5 border-b bg-background px-5 transition-colors duration-300",
        scrolled || menuOpen ? "border-rule" : "border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[720px] items-center justify-between gap-4">
        <a href="#top" className="font-semibold">
          {profile.name}
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <nav
            aria-label={texts.menu.label}
            className="hidden items-center gap-4 text-sm md:flex"
          >
            {navItems.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <span aria-hidden className="hidden h-5 w-px bg-rule md:block" />

          <LanguageSwitch locale={locale} label={texts.language.groupLabel} />
          <ThemeToggle toDark={texts.theme.toDark} toLight={texts.theme.toLight} />

          <button
            type="button"
            aria-label={texts.menu.label}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-chip text-foreground md:hidden"
          >
            {menuOpen ? (
              <X size={20} aria-hidden />
            ) : (
              <Menu size={20} aria-hidden />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label={texts.menu.label}
          className="mx-auto flex max-h-[calc(100dvh-4rem)] max-w-[720px] flex-col overflow-y-auto border-t border-rule pb-4 md:hidden"
        >
          {navItems.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="flex min-h-[52px] items-center justify-between border-b border-rule text-lg"
            >
              {link.label}
              <span aria-hidden className="text-muted-foreground">
                →
              </span>
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
