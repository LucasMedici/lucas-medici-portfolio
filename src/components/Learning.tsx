"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Code,
  GraduationCap,
  Mic,
  PlayCircle,
  Shield,
  Sparkles,
} from "lucide-react";
import type { ComponentType } from "react";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  learningItems,
  type LearningItem,
  type LearningKind,
  type LearningStatus,
} from "@/data/learning";
import { t } from "@/data/translations";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/useLocale";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const kindIcon: Record<LearningKind, IconComponent> = {
  course: PlayCircle,
  certification: Award,
  book: BookOpen,
  talk: Mic,
  degree: GraduationCap,
  code: Code,
  shield: Shield,
  sparkles: Sparkles,
};

const statusStyles: Record<LearningStatus, string> = {
  graduated:
    "bg-surface-elevated text-foreground border-border-strong",
  completed:
    "bg-surface-elevated text-foreground border-border-strong",
  "in-progress":
    "bg-card text-foreground/80 border-border-strong",
  planned: "bg-card text-muted-foreground border-border",
};

export function Learning() {
  const locale = useLocale();
  const tr = t(locale).learning;

  return (
    <section
      id="learning"
      aria-labelledby="learning-title"
      className="relative scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={tr.eyebrow}
          title={<span id="learning-title">{tr.title}</span>}
          description={tr.description}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {learningItems.map((item, index) => (
            <LearningCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface LearningCardProps {
  readonly item: LearningItem;
  readonly index: number;
}

function LearningCard({ item, index }: LearningCardProps) {
  const locale = useLocale();
  const tr = t(locale).learning;
  const content = item[locale] ?? item.en;
  const Icon = kindIcon[item.kind];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <GlassCard className="h-full p-6 flex gap-4">
        <div
          className="size-11 shrink-0 inline-flex items-center justify-center rounded-xl bg-surface-elevated text-foreground border border-border"
          aria-hidden
        >
          <Icon size={20} />
        </div>
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold text-foreground">
              {content.title}
            </h3>
            <span
              className={cn(
                "shrink-0 whitespace-nowrap inline-flex items-center px-2 py-0.5 rounded-full mt-0.5",
                "text-[10px] font-medium uppercase tracking-wider border",
                statusStyles[item.status],
              )}
            >
              {tr.status[item.status]}
            </span>
          </div>
          <p className="text-xs text-subtle-foreground font-mono uppercase tracking-widest">
            {content.provider} · {content.period}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {content.description}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
