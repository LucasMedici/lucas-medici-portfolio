"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences, type Experience } from "@/data/experiences";
import { cn } from "@/lib/cn";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title={<span id="experience-title">Where I&apos;ve worked</span>}
          description="A snapshot of teams I&apos;ve been part of and the kind of work I gravitate toward."
        />

        <ol className="mt-14 relative border-l border-border pl-6 md:pl-10 space-y-10">
          {experiences.map((entry, index) => (
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
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative"
    >
      <span
        aria-hidden
        className={cn(
          "absolute -left-[34px] md:-left-[46px] top-2",
          "size-4 rounded-full",
          "bg-gradient-to-br from-accent-teal to-accent-indigo",
          "ring-4 ring-background shadow-[0_0_18px_hsl(var(--accent-indigo)/0.6)]",
        )}
      />
      <GlassCard className="p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-center gap-2">
            <Briefcase size={20} className="text-accent-teal" aria-hidden />
            <h3 className="text-lg font-semibold text-foreground">
              {entry.role}{" "}
              <span className="text-muted-foreground font-normal">
                · {entry.company}
              </span>
            </h3>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-subtle-foreground">
            {entry.period}
          </span>
        </div>

        <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-subtle-foreground">
          <MapPin size={14} aria-hidden />
          {entry.location}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {entry.summary}
        </p>

        {entry.highlights.length > 0 ? (
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {entry.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-accent-teal/80"
                />
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        {entry.stack.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-2">
            {entry.stack.map((tech) => (
              <li
                key={tech}
                className={cn(
                  "px-2.5 py-1 rounded-full",
                  "text-[11px] font-medium font-mono tracking-wide",
                  "bg-card border border-border text-muted-foreground",
                )}
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </GlassCard>
    </motion.li>
  );
}
