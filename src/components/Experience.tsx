"use client";

import { Section } from "@/components/ui/Section";
import { t } from "@/data/translations";
import { useLocale } from "@/lib/useLocale";

export function ExperienceSection() {
  const locale = useLocale();
  const texts = t(locale).experience;

  return (
    <Section id="experience" title={texts.title}>
      {texts.entries.map((entry) => (
        <article
          key={entry.id}
          className="grid gap-2 md:grid-cols-[128px_minmax(0,1fr)] md:gap-8"
        >
          <p className="font-mono text-[13px] text-muted-foreground md:pt-[3px]">
            {entry.period}
          </p>
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.01em]">
                {entry.role}
              </h3>
              <p className="text-muted-foreground">{entry.company}</p>
            </div>
            <p>{entry.summary}</p>
            <ul className="flex list-disc flex-col gap-1.5 pl-[18px] text-secondary-foreground">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <p className="font-mono text-xs text-muted-foreground">
              {entry.stack.join(" · ")}
            </p>
          </div>
        </article>
      ))}
    </Section>
  );
}
