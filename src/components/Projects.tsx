"use client";

import Image from "next/image";

import { Arrow } from "@/components/ui/Arrow";
import { SectionTitle } from "@/components/ui/Section";
import { projects, type Project } from "@/data/projects";
import { t } from "@/data/translations";
import { externalLinkProps, inlineLink } from "@/lib/styles";
import { type Locale, useLocale } from "@/lib/useLocale";

interface ProjectCardProps {
  readonly project: Project;
  readonly index: number;
  readonly locale: Locale;
}

function ProjectCard({ project, index, locale }: ProjectCardProps) {
  const content = project[locale];
  const primaryLink = project.links[0];

  return (
    <article className="group relative flex flex-col gap-[18px] rounded-[14px] border border-chip p-3 pb-[18px] transition-colors duration-300 hover:border-card-hover-border hover:bg-card-hover md:p-4 md:pb-[22px]">
      <div className="relative aspect-video overflow-hidden rounded-[10px] border border-media-border bg-media">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(min-width: 768px) 450px, 100vw"
            className="object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.04]"
          />
        ) : null}
      </div>

      <div className="flex items-baseline gap-4">
        <p className="shrink-0 font-mono text-[13px] text-accent">
          {String(index + 1).padStart(2, "0")}
        </p>
        <div className="flex min-w-0 flex-col gap-1.5">
          <h3 className="text-xl font-semibold leading-[1.2] tracking-[-0.015em] md:text-[23px]">
            {/* Stretched link: the whole card opens the main repository. */}
            <a
              href={primaryLink?.href}
              className="decoration-underline decoration-2 underline-offset-4 after:absolute after:inset-0 after:rounded-[14px] group-hover:underline"
              {...externalLinkProps}
            >
              {content.name}{" "}
              <Arrow className="text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
            </a>
          </h3>
          <p className="text-tertiary-foreground">{content.tagline}</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            {project.stack.join(" · ")}
          </p>
          {project.links.length > 1 ? (
            <p className="relative z-10 mt-1 flex flex-wrap gap-4 text-sm">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={inlineLink}
                  {...externalLinkProps}
                >
                  {link.label} <Arrow />
                </a>
              ))}
            </p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

/**
 * Projects break out of the 720px text column into a wider two-column grid
 * so the screenshots carry more weight than the rest of the page.
 */
export function Projects() {
  const locale = useLocale();
  const texts = t(locale).projects;
  const featured = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="mx-auto max-w-[960px] scroll-mt-20 pb-14"
    >
      <div className="mx-auto flex max-w-[720px] flex-col gap-3 border-t border-rule pt-10">
        <SectionTitle id="projects-title">{texts.title}</SectionTitle>
        <p className="text-secondary-foreground">{texts.description}</p>
      </div>
      <div className="grid gap-7 pt-10 md:grid-cols-2">
        {featured.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
