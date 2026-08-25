"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import type { ComponentType } from "react";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile, type SocialLink } from "@/data/profile";
import { t } from "@/data/translations";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/useLocale";

type IconComponent = ComponentType<{ size?: number; className?: string }>;

interface SocialTile {
  readonly key: keyof typeof profile.socials;
  readonly link: SocialLink;
  readonly icon: IconComponent;
  readonly external: boolean;
}

const socialTiles: readonly SocialTile[] = [
  {
    key: "email",
    link: profile.socials.email,
    icon: Mail,
    external: false,
  },
  {
    key: "linkedin",
    link: profile.socials.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    key: "github",
    link: profile.socials.github,
    icon: Github,
    external: true,
  },
];

export function Contact() {
  const locale = useLocale();
  const tr = t(locale).contact;

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          align="center"
          eyebrow={tr.eyebrow}
          title={<span id="contact-title">{tr.title}</span>}
          description={tr.description}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {socialTiles.map((tile) => {
            const Icon = tile.icon;
            return (
              <motion.a
                key={tile.key}
                href={tile.link.href}
                target={tile.external ? "_blank" : undefined}
                rel={tile.external ? "noopener noreferrer" : undefined}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "group block rounded-2xl",
                  "bg-card backdrop-blur-md border border-border",
                  "shadow-xl shadow-black/20",
                  "transition-colors duration-300 hover:border-accent/40",
                )}
              >
                <div className="p-6 flex items-center gap-4">
                  <div
                    className="size-11 inline-flex items-center justify-center rounded-xl bg-surface-elevated text-foreground border border-border"
                    aria-hidden
                  >
                    <Icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono uppercase tracking-widest text-subtle-foreground">
                      {tile.link.label}
                    </span>
                    <span className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors duration-200">
                      {tile.link.handle}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <GlassCard
          interactive={false}
          className="mt-10 p-8 md:p-10 flex flex-col items-center text-center gap-5"
        >
          <Send size={24} className="text-foreground" aria-hidden />
          <h3 className="text-2xl font-semibold tracking-tight text-foreground">
            {tr.cardTitle}
          </h3>
          <p className="max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground">
            {tr.cardDescriptionPrefix}
            <a
              href={profile.socials.email.href}
              className="font-medium text-foreground underline underline-offset-4 decoration-accent/60 hover:decoration-accent"
            >
              {profile.email}
            </a>
            {tr.cardDescriptionSuffix}
          </p>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            href={profile.socials.email.href}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
              "text-sm font-medium text-background",
              "bg-accent",
              "shadow-lg shadow-accent/20",
            )}
          >
            <Mail size={16} aria-hidden />
            {tr.sendEmail}
          </motion.a>
        </GlassCard>
      </div>
    </section>
  );
}
