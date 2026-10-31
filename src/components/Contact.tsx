"use client";

import { Arrow } from "@/components/ui/Arrow";
import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { t } from "@/data/translations";
import { externalLinkProps, inlineLink } from "@/lib/styles";
import { useLocale } from "@/lib/useLocale";

export function Contact() {
  const locale = useLocale();
  const texts = t(locale).contact;
  const { email, linkedin, github } = profile.socials;

  const channels = [
    { label: texts.emailLabel, link: email, external: false },
    { label: linkedin.label, link: linkedin, external: true },
    { label: github.label, link: github, external: true },
  ];

  return (
    <Section
      id="contact"
      title={texts.title}
      description={texts.description}
      className="gap-7 pb-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5 rounded-xl bg-panel p-6">
        <div className="flex min-w-0 flex-[999_1_320px] flex-col gap-1">
          <p className="text-[17px] font-semibold">{texts.cardTitle}</p>
          <p className="text-tertiary-foreground">
            {texts.cardDescriptionPrefix}
            <a href={email.href} className={inlineLink}>
              {profile.email}
            </a>
            {texts.cardDescriptionSuffix}
          </p>
        </div>
        <a
          href={email.href}
          className="group/link inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-button px-5 font-medium text-button-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
          {texts.sendEmail} <Arrow direction="right" />
        </a>
      </div>

      <ul className="flex flex-col">
        {channels.map((channel) => (
          <li key={channel.link.href}>
            <a
              href={channel.link.href}
              className="group/link flex justify-between gap-4 border-b border-rule py-3.5 transition-colors hover:border-card-hover-border"
              {...(channel.external ? externalLinkProps : {})}
            >
              <span className="text-muted-foreground">{channel.label}</span>
              <span className="min-w-0 truncate">
                {channel.link.handle} <Arrow />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
