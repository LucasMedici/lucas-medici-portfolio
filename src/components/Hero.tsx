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
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 pt-32 pb-20 md:grid-cols-12 md:pt-40 md:pb-28 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col gap-8 md:col-span-7"
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
            {profile.availability}
          </motion.span>

          <motion.h1
            id="hero-title"
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground"
          >
            Hi, I&apos;m {profile.name}.
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
                "bg-accent",
                "shadow-lg shadow-accent/20",
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
                "hover:border-accent/50 transition-colors duration-300",
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center md:justify-end md:col-span-5 w-full"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-indigo/20 via-accent/10 to-accent-teal/20 blur-2xl transition duration-1000" />
          
          {/* Glassmorphic Image Frame */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-3 backdrop-blur-md shadow-2xl">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-square w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-2xl bg-muted"
            >
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                fill
                priority
                className="object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
