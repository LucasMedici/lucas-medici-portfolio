"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { t } from "@/data/translations";
import { useLocale } from "@/lib/useLocale";

export function About() {
  const locale = useLocale();
  const texts = t(locale).about;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={texts.eyebrow}
          title={<span id="about-title">{texts.title}</span>}
        />

        <div className="mt-10 flex max-w-3xl flex-col gap-6">
          {texts.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
