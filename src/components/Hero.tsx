"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

import { GradientText } from "@/components/ui/GradientText";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} as const;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-10 px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col gap-8"
        >
          <motion.span
            variants={itemVariants}
            className={cn(
              "inline-flex items-center gap-2 self-start px-3 py-1 rounded-full",
              "text-xs font-medium tracking-widest uppercase",
              "bg-card backdrop-blur-md border border-border",
              "text-muted-foreground",
            )}
          >
            <Sparkles size={14} className="text-accent-teal" />
            {profile.availability}
          </motion.span>

          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-foreground"
          >
            Hi, I&apos;m <GradientText>{profile.name}</GradientText>.
            <br />
            <span className="text-foreground/90">{profile.tagline}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3"
          >
            <motion.a
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="#projects"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
                "text-sm font-medium text-background",
                "bg-gradient-to-r from-accent-teal via-accent-indigo to-accent-purple",
                "shadow-lg shadow-accent-indigo/20",
              )}
            >
              View projects
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="#contact"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
                "text-sm font-medium text-foreground",
                "bg-card backdrop-blur-md border border-border",
                "hover:border-accent-teal/60 transition-colors duration-300",
              )}
            >
              Contact me
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} aria-hidden />
              {profile.location}
            </span>
            <a
              href={profile.socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors duration-200"
            >
              <Github size={16} aria-hidden />
              {profile.socials.github.handle}
            </a>
            <a
              href={profile.socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors duration-200"
            >
              <Linkedin size={16} aria-hidden />
              {profile.socials.linkedin.handle}
            </a>
            <a
              href={profile.socials.email.href}
              className="inline-flex items-center gap-2 hover:text-foreground transition-colors duration-200"
            >
              <Mail size={16} aria-hidden />
              {profile.socials.email.handle}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
