"use client";

import Image from "next/image";

import { Arrow } from "@/components/ui/Arrow";
import { profile } from "@/data/profile";
import { t } from "@/data/translations";
import { externalLinkProps, inlineLink } from "@/lib/styles";
import { useLocale } from "@/lib/useLocale";

export function Hero() {
  const locale = useLocale();
  const texts = t(locale);
  const currentCompany = texts.experience.entries[0].company;

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto flex max-w-[720px] flex-col gap-7 pt-10 pb-[72px] md:pt-16"
    >
      <div className="flex flex-wrap items-center gap-6 md:gap-8">
        {/* Slight grow on hover — the one bit of motion in the hero. */}
        <Image
          src={profile.avatarUrl}
          alt={texts.hero.photoAlt}
          width={224}
          height={224}
          priority
          sizes="(min-width: 768px) 224px, 136px"
          className="size-[136px] rounded-full object-cover transition-transform duration-500 ease-soft hover:scale-[1.04] md:size-56"
        />
        <div className="flex flex-col gap-1">
          <h1
            id="hero-title"
            className="text-[32px] font-semibold leading-[1.15] tracking-[-0.02em] md:text-[40px]"
          >
            {profile.name}
          </h1>
          <p className="text-muted-foreground">
            {texts.hero.role} · {texts.hero.location}
          </p>
        </div>
      </div>

      <p className="text-[19px] leading-[1.55] md:text-[21px]">
        {texts.hero.summary} {texts.hero.currentRolePrefix}{" "}
        <a href="#experience" className={inlineLink}>
          {currentCompany}
        </a>
        .
      </p>

      <div className="flex flex-wrap gap-5 text-[15px]">
        <a
          href={profile.socials.github.href}
          className={inlineLink}
          {...externalLinkProps}
        >
          {profile.socials.github.label} <Arrow />
        </a>
        <a
          href={profile.socials.linkedin.href}
          className={inlineLink}
          {...externalLinkProps}
        >
          {profile.socials.linkedin.label} <Arrow />
        </a>
        <a href={profile.socials.email.href} className={inlineLink}>
          {profile.email}
        </a>
      </div>
    </section>
  );
}
