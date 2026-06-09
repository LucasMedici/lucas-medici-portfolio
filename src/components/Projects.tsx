"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project, type ProjectLink } from "@/data/projects";
import { cn } from "@/lib/cn";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative scroll-mt-24 px-6 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title={<span id="projects-title">Selected work</span>}
          description="Projects that reflect how I think, build, and ship — from quick experiments to production-ready systems."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <GlassCard className="h-full overflow-hidden flex flex-col">
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-accent/10 via-accent-indigo/5 to-accent-teal/10">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
              <Code size={40} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5 p-6 flex-1">
        <header className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold text-foreground">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground">{project.tagline}</p>
          </div>
          {project.featured ? (
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-surface-elevated text-foreground border border-border-strong"
              aria-label="Featured project"
            >
              <Star size={12} aria-hidden />
              Featured
            </span>
          ) : null}
        </header>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.highlights.length > 0 ? (
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {project.highlights.map((highlight) => (
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

        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium font-mono tracking-wide bg-card border border-border text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.links.length > 0 ? (
          <footer className="mt-auto flex flex-wrap items-center gap-3 pt-2 border-t border-border">
            {project.links.map((link) => (
              <ProjectLinkButton key={link.href} link={link} />
            ))}
          </footer>
        ) : null}
        </div>
      </GlassCard>
    </motion.div>
  );
}

interface ProjectLinkButtonProps {
  readonly link: ProjectLink;
}

function ProjectLinkButton({ link }: ProjectLinkButtonProps) {
  const Icon = link.type === "repo" ? Github : link.type === "live" ? ExternalLink : ArrowUpRight;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5",
        "text-xs font-medium text-muted-foreground",
        "hover:text-foreground transition-colors duration-200",
      )}
    >
      <Icon size={14} aria-hidden />
      {link.label}
    </a>
  );
}
