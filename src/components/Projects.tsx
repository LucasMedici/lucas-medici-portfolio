"use client";

import { m } from "framer-motion";
import {
  ArrowUpRight,
  Code,
  ExternalLink,
  Github,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import CMSSliderPro from "@/components/ui/CMSSliderPro";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project, type ProjectLink } from "@/data/projects";
import { cn } from "@/lib/cn";
import { useLocale } from "@/lib/useLocale";
import { t } from "@/data/translations";

function useSliderLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const md = window.matchMedia("(min-width: 48rem)");
    const xl = window.matchMedia("(min-width: 80rem)");

    const update = () => {
      setIsMobile(!md.matches);
      setItemsPerView(xl.matches ? 3 : md.matches ? 2 : 1);
    };

    update();
    md.addEventListener("change", update);
    xl.addEventListener("change", update);
    return () => {
      md.removeEventListener("change", update);
      xl.removeEventListener("change", update);
    };
  }, []);

  return { isMobile, itemsPerView };
}

export function Projects() {
  const locale = useLocale();
  const tr = t(locale).projects;
  const { isMobile, itemsPerView } = useSliderLayout();

  const cards = (
    <div className="flex w-full">
      {projects.map((project, projectIndex) => (
        <ProjectCard key={project.id} project={project} index={projectIndex} />
      ))}
    </div>
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="relative scroll-mt-24 px-4 sm:px-6 py-20 md:py-28 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow={tr.eyebrow}
          title={<span id="projects-title">{tr.title}</span>}
          description={tr.description}
        />

        <div className="mt-12">
          <CMSSliderPro
            layout={{ items: itemsPerView, gap: isMobile ? 16 : 24 }}
            playback={{ loop: true }}
            navigation={{ draggable: true, keyboard: true }}
            appear={{ type: "None" }}
            arrows={{
              show: !isMobile,
              type: "Split",
              variant: "Both",
              size: 44,
              radius: 999,
              fill: "var(--color-foreground)",
              backdrop: "color-mix(in srgb, var(--color-surface) 80%, transparent)",
              borderColor: "var(--color-border-strong)",
              inset: -16,
              shadow: true,
              shadowColor: "rgba(0,0,0,0.3)",
              shadowBlur: 15,
            }}
            dots={{
              type: isMobile ? "Dots" : "None",
              alignment: "Bottom Center",
              size: 6,
              gap: 8,
              activeFill: "var(--color-accent)",
              fill: "color-mix(in srgb, var(--color-muted-foreground) 30%, transparent)",
              opacity: 1,
              backdrop: "transparent",
              blur: 0,
              inset: 24,
            }}
            content={cards}
          />
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
  const locale = useLocale();
  const content = project[locale] ?? project.en;
  const isPt = locale === "pt-br";

  return (
    <m.div
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
              alt={`${content.name} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
              <Code size={40} />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 flex-1">
          <header className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground">
                {content.name}
              </h3>
              {project.featured ? (
                <span
                  className="inline-flex shrink-0 items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-surface-elevated text-foreground border border-border-strong"
                  aria-label={isPt ? "Projeto em destaque" : "Featured project"}
                >
                  <Star size={12} aria-hidden />
                  {isPt ? "Destaque" : "Featured"}
                </span>
              ) : null}
            </div>
            <p className="text-sm text-muted-foreground">{content.tagline}</p>
          </header>

          <p className="text-sm leading-relaxed text-muted-foreground">
            {content.description}
          </p>

          {content.highlights.length > 0 ? (
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {content.highlights.map((highlight) => (
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
    </m.div>
  );
}

interface ProjectLinkButtonProps {
  readonly link: ProjectLink;
}

function ProjectLinkButton({ link }: ProjectLinkButtonProps) {
  const Icon =
    link.type === "repo"
      ? Github
      : link.type === "live"
        ? ExternalLink
        : ArrowUpRight;
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
