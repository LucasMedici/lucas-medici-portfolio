"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups, type Skill } from "@/data/skills";
import { cn } from "@/lib/cn";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
} as const;

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title={<span id="skills-title">The tools I work with</span>}
          description="A curated set of technologies I rely on to ship and maintain quality software."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <GlassCard
              key={group.category}
              interactive={false}
              className="p-6"
            >
              <header className="flex flex-col gap-1">
                <h3 className="text-base font-semibold text-foreground">
                  {group.category}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {group.description}
                </p>
              </header>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {group.items.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </motion.ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const levelStyles: Record<Skill["level"], string> = {
  Advanced:
    "bg-accent-teal/10 text-accent-teal border-accent-teal/30",
  Proficient:
    "bg-accent-indigo/10 text-foreground/90 border-accent-indigo/30",
  Learning:
    "bg-white/5 text-muted-foreground border-white/10",
};

interface SkillBadgeProps {
  readonly skill: Skill;
}

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "px-3 py-1.5 rounded-full",
        "text-xs font-medium tracking-wide",
        "border backdrop-blur-md",
        levelStyles[skill.level],
      )}
    >
      <span>{skill.name}</span>
      <span className="ml-1.5 text-[10px] opacity-70">· {skill.level}</span>
    </motion.li>
  );
}
