"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  Github,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects, type Project, type ProjectLink } from "@/data/projects";
import { cn } from "@/lib/cn";

const SLIDE_PADDING = "pr-6";
const PEEK = 0.5;
const SLIDE_GAP_PX = 24;

function usePerView() {
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const md = window.matchMedia("(min-width: 48rem)");
    const xl = window.matchMedia("(min-width: 80rem)");

    const update = () => {
      if (xl.matches) setPerView(3);
      else if (md.matches) setPerView(2);
      else setPerView(1);
    };

    update();
    md.addEventListener("change", update);
    xl.addEventListener("change", update);
    return () => {
      md.removeEventListener("change", update);
      xl.removeEventListener("change", update);
    };
  }, []);

  return perView;
}

export function Projects() {
  const perView = usePerView();
  const reducedMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, projects.length - perView);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const update = () => setViewportWidth(el.offsetWidth);
    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const clampedIndex = Math.min(index, maxIndex);

  const slideWidth =
    viewportWidth > 0 ? viewportWidth / (perView + PEEK) : 0;
  const x = -clampedIndex * slideWidth;
  const showControls = maxIndex > 0;

  const hasPrev = clampedIndex > 0;
  const hasNext = clampedIndex < maxIndex;

  const goTo = (target: number) =>
    setIndex(Math.max(0, Math.min(target, maxIndex)));

  const prev = () => goTo(clampedIndex - 1);
  const next = () => goTo(clampedIndex + 1);

  const fade = PEEK * slideWidth + SLIDE_GAP_PX;

  const maskImage =
    hasPrev || hasNext
      ? `linear-gradient(to right, ${
          hasPrev
            ? `transparent 0, black ${fade}px`
            : "black 0"
        }, black calc(100% - ${hasNext ? fade : 0}px), ${
          hasNext ? "transparent 100%)" : "black 100%)"
        }`
      : undefined;

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

        <div className="relative mt-12">
          <div
            ref={viewportRef}
            className="overflow-hidden pt-3"
            style={{
              WebkitMaskImage: maskImage,
              maskImage,
            }}
          >
            <motion.div
              className="flex"
              animate={{ x }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 300, damping: 34 }
              }
              drag={reducedMotion ? false : "x"}
              dragConstraints={{ left: -maxIndex * slideWidth, right: 0 }}
              dragElastic={0.05}
              onDragEnd={(_, info) => {
                const threshold = Math.max(48, slideWidth * 0.15);
                if (info.offset.x <= -threshold) next();
                else if (info.offset.x >= threshold) prev();
              }}
              style={{ touchAction: "pan-y" }}
            >
              {projects.map((project, projectIndex) => {
                const inWindow =
                  projectIndex >= clampedIndex &&
                  projectIndex <= clampedIndex + perView;

                return (
                  <div
                    key={project.id}
                    className={cn(
                      "min-w-0 shrink-0",
                      projectIndex < projects.length - 1 && SLIDE_PADDING,
                    )}
                    style={{ width: slideWidth }}
                    inert={inWindow ? undefined : true}
                  >
                    <ProjectCard project={project} index={projectIndex} />
                  </div>
                );
              })}
            </motion.div>
          </div>

          {showControls ? (
            <>
              <CarouselButton
                onClick={prev}
                disabled={!hasPrev}
                label="Previous projects"
                className="absolute left-0 top-1/2 -translate-y-1/2"
              >
                <ChevronLeft size={20} aria-hidden />
              </CarouselButton>

              <CarouselButton
                onClick={next}
                disabled={!hasNext}
                label="Next projects"
                className="absolute right-0 top-1/2 -translate-y-1/2"
              >
                <ChevronRight size={20} aria-hidden />
              </CarouselButton>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

interface CarouselButtonProps {
  readonly onClick: () => void;
  readonly disabled: boolean;
  readonly label: string;
  readonly className?: string;
  readonly children: ReactNode;
}

function CarouselButton({
  onClick,
  disabled,
  label,
  className,
  children,
}: CarouselButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full",
        "border border-border-strong bg-surface/80 text-foreground",
        "backdrop-blur-md shadow-lg shadow-black/30",
        "transition-all duration-200",
        "hover:border-accent/50 hover:bg-surface-elevated hover:text-accent",
        "disabled:pointer-events-none disabled:opacity-35",
        className,
      )}
    >
      {children}
    </button>
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
