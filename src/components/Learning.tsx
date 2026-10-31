"use client";

import { Section } from "@/components/ui/Section";
import { learningItems } from "@/data/learning";
import { t } from "@/data/translations";
import { useLocale } from "@/lib/useLocale";

export function Learning() {
  const locale = useLocale();
  const texts = t(locale).learning;

  return (
    <Section id="learning" title={texts.title}>
      <div className="flex flex-col gap-4">
        {learningItems.map((item) => {
          const content = item[locale];

          return (
            <div
              key={item.id}
              className="grid gap-1 md:grid-cols-[128px_minmax(0,1fr)] md:gap-8"
            >
              <p className="font-mono text-[13px] text-muted-foreground md:pt-[3px]">
                {content.period}
              </p>
              <div>
                <p className="font-medium">{content.title}</p>
                <p className="text-[15px] text-muted-foreground">
                  {content.provider}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
