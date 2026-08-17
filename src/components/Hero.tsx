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

import Image from "next/image";

import { profile } from "@/data/profile";
import { t } from "@/data/translations";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/useLocale";

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
  const locale = useLocale();
  const texts = t(locale).hero;
  const taglineLines = texts.tagline
    .split(". ")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => (line.endsWith(".") ? line : `${line}.`));

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 pt-24 pb-16 sm:gap-10 md:grid-cols-12 md:gap-12 md:pt-40 md:pb-28 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 flex w-full flex-col gap-6 md:order-1 md:col-span-7 md:gap-8"
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
            <Sparkles size={14} className="text-muted-foreground" />
            {texts.availability}
          </motion.span>

          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="text-[1.75rem] leading-[1.15] font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl md:leading-[1.1]"
          >
            {texts.greeting}
            <br className="hidden md:block" />
            <span className="mt-3 block text-foreground/90 md:mt-0 md:inline">
              <span className="flex flex-col gap-0.5 md:hidden">
                {taglineLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
              <span className="hidden md:inline">{texts.tagline}</span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base md:text-lg"
          >
            {texts.summary}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <motion.a
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="#projects"
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full sm:w-auto sm:py-2.5",
                "text-sm font-medium text-background",
                "bg-accent",
                "shadow-lg shadow-accent/20",
              )}
            >
              {texts.viewProjects}
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="#contact"
              className={cn(
                "inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full sm:w-auto sm:py-2.5",
                "text-sm font-medium text-foreground",
                "bg-card backdrop-blur-md border border-border",
                "hover:border-accent/50 transition-colors duration-300",
              )}
            >
              {texts.contactMe}
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-3 text-sm text-muted-foreground min-[420px]:grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3"
          >
            <span className="inline-flex min-w-0 items-center gap-2">
              <MapPin size={16} className="shrink-0" aria-hidden />
              {profile.location}
            </span>
            <a
              href={profile.socials.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-0 items-center gap-2 hover:text-foreground transition-colors duration-200"
            >
              <Github size={16} className="shrink-0" aria-hidden />
              <span className="truncate">{profile.socials.github.handle}</span>
            </a>
            <a
              href={profile.socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-0 items-center gap-2 hover:text-foreground transition-colors duration-200"
            >
              <Linkedin size={16} className="shrink-0" aria-hidden />
              <span className="truncate">{profile.socials.linkedin.handle}</span>
            </a>
            <a
              href={profile.socials.email.href}
              className="inline-flex min-w-0 items-center gap-2 hover:text-foreground transition-colors duration-200 min-[420px]:col-span-2 sm:col-span-1"
            >
              <Mail size={16} className="shrink-0" aria-hidden />
              <span className="truncate">{profile.socials.email.handle}</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative order-1 flex w-full justify-center md:order-2 md:col-span-5 md:justify-end"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-indigo/20 via-accent/10 to-accent-teal/20 blur-2xl transition duration-1000" />
          
          {/* Glassmorphic Image Frame */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-2.5 backdrop-blur-md shadow-2xl sm:p-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-square h-44 w-44 overflow-hidden rounded-2xl bg-muted sm:h-64 sm:w-64 md:h-80 md:w-80"
            >
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                fill
                priority
                className="object-cover transition-all duration-500"
                sizes="(max-width: 640px) 176px, (max-width: 768px) 256px, 320px"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
