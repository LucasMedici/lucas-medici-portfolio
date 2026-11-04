"use client";

import { Arrow } from "@/components/ui/Arrow";
import { profile } from "@/data/profile";
import { t } from "@/data/translations";
import { inlineLink } from "@/lib/styles";
import { useLocale } from "@/lib/useLocale";

export function Footer() {
  const locale = useLocale();
  const texts = t(locale).footer;
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-[720px] flex-wrap justify-between gap-3 pt-6 pb-14 font-mono text-xs text-muted-foreground">
      <p>
        © {year} {profile.name}. {texts.rights}
      </p>
      <a href="#top" className={inlineLink}>
        {texts.backToTop} <Arrow direction="up" />
      </a>
    </footer>
  );
}
