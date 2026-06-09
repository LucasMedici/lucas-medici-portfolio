import { Code2, Compass, Layers } from "lucide-react";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

interface Pillar {
  readonly icon: typeof Code2;
  readonly title: string;
  readonly description: string;
}

const pillars: readonly Pillar[] = [
  {
    icon: Code2,
    title: "Type-safe by default",
    description:
      "Strict TypeScript and well-modeled data make refactors predictable and bugs scarce.",
  },
  {
    icon: Layers,
    title: "Pragmatic architecture",
    description:
      "I favor simple designs that scale gracefully — clear boundaries over premature abstractions.",
  },
  {
    icon: Compass,
    title: "Continuous learning",
    description:
      "I stay curious about new tools, deepen fundamentals, and share what I learn with my team.",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title={<span id="about-title">A bit about me</span>}
          description={profile.summary}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <GlassCard
                key={pillar.title}
                className="p-6 flex flex-col gap-4"
              >
                <div
                  className="inline-flex size-11 items-center justify-center rounded-xl bg-surface-elevated text-foreground border border-border"
                  aria-hidden
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
