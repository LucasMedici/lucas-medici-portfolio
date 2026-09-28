"use client";

import { m } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Experience } from "@/data/experiences";
import { t } from "@/data/translations";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/useLocale";

export function ExperienceSection() {
  const locale = useLocale();
  const texts = t(locale).experience;

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={texts.eyebrow}
          title={<span id="experience-title">{texts.title}</span>}
          description={texts.description}
        />

        <ol className="relative mt-10 space-y-6 border-l border-border pl-5 md:mt-14 md:space-y-10 md:pl-10">
          {texts.entries.map((entry, index) => (
            <TimelineEntry key={entry.id} entry={entry} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
}

interface TimelineEntryProps {
  readonly entry: Experience;
  readonly index: number;
}

function TimelineEntry({ entry, index }: TimelineEntryProps) {
  return (
    <m.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative"
    >
      <span
        aria-hidden
        className={cn(
          "absolute -left-[26px] top-2 md:-left-[46px]",
          "size-3 rounded-full md:size-4",
          "bg-border-strong",
          "ring-4 ring-background",
        )}
      />
      <GlassCard className="p-4 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-center gap-2">
            <Briefcase
              size={20}
              className="hidden shrink-0 text-foreground sm:block"
              aria-hidden
            />
            <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
              {entry.role}{" "}
              <span className="mt-0.5 block text-sm font-normal text-muted-foreground sm:mt-0 sm:inline sm:text-lg">
                <span className="hidden sm:inline">· </span>
                {entry.company}
              </span>
            </h3>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-subtle-foreground">
            {entry.period}
          </span>
        </div>

        {entry.location ? (
          <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-subtle-foreground">
            <MapPin size={14} aria-hidden />
            {entry.location}
          </p>
        ) : null}

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4">
          {entry.summary}
        </p>

        {entry.highlights.length > 0 ? (
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground sm:mt-4 sm:space-y-2">
            {entry.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-muted-foreground/50"
                />
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        {entry.stack.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
            {entry.stack.map((tech) => (
              <li
                key={tech}
                className={cn(
                  "rounded-full px-2 py-0.5 sm:px-2.5 sm:py-1",
                  "text-[10px] font-medium font-mono tracking-wide sm:text-[11px]",
                  "border border-border bg-card text-muted-foreground",
                )}
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </GlassCard>
    </m.li>
  );
}
