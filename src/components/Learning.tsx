"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GraduationCap,
  Mic,
  PlayCircle,
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
import { cn } from "@/lib/cn";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

const kindIcon: Record<LearningKind, IconComponent> = {
  course: PlayCircle,
  certification: Award,
  book: BookOpen,
  talk: Mic,
  degree: GraduationCap,
};

const statusStyles: Record<LearningStatus, string> = {
  completed:
    "bg-accent-teal/10 text-accent-teal border-accent-teal/30",
  "in-progress":
    "bg-accent-indigo/10 text-accent-indigo border-accent-indigo/30",
  planned: "bg-card text-muted-foreground border-border",
};

const statusLabel: Record<LearningStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  planned: "Planned",
};

export function Learning() {
  return (
    <section
      id="learning"
      aria-labelledby="learning-title"
      className="relative scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Learning"
          title={<span id="learning-title">Always sharpening the saw</span>}
          description="Books, courses and certifications I&apos;m exploring to keep growing as an engineer."
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
          className="size-11 shrink-0 inline-flex items-center justify-center rounded-xl bg-accent-purple/10 text-accent-purple border border-accent-purple/30"
          aria-hidden
        >
          <Icon size={20} />
        </div>
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-base font-semibold text-foreground truncate">
              {item.title}
            </h3>
            <span
              className={cn(
                "inline-flex items-center px-2 py-0.5 rounded-full",
                "text-[10px] font-medium uppercase tracking-wider border",
                statusStyles[item.status],
              )}
            >
              {statusLabel[item.status]}
            </span>
          </div>
          <p className="text-xs text-subtle-foreground font-mono uppercase tracking-widest">
            {item.provider} · {item.period}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
