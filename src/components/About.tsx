"use client";

import { Section } from "@/components/ui/Section";
import { t } from "@/data/translations";
import { useLocale } from "@/lib/useLocale";

export function About() {
  const locale = useLocale();
  const texts = t(locale).about;

  return (
    <Section id="about" title={texts.title}>
      <div className="flex flex-col gap-4">
        {texts.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
