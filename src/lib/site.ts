import { profile } from "@/data/profile";
import { t } from "@/data/translations";

/**
 * Site-wide SEO values shared by the metadata, robots, sitemap, JSON-LD and
 * Open Graph image.
 *
 * The server always renders pt-BR (see `getServerLocale` in useLocale.ts),
 * so crawlers and link previews read the Portuguese copy.
 */

/** Production origin. Override with NEXT_PUBLIC_SITE_URL (e.g. a custom domain). */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lucasmedici.vercel.app",
);

const ptBr = t("pt-br");

// COPY(owner): composed from approved copy (profile.name + hero.role).
// Pending the owner's approval for the meta/OG title — see issue #5.
export const siteTitle = `${profile.name} — ${ptBr.hero.role}`;

// COPY(owner): reuses the approved pt-BR hero.summary as the meta/OG
// description. Pending the owner's approval — see issue #5.
export const siteDescription = ptBr.hero.summary;

export const siteRole = ptBr.hero.role;
export const siteLocation = ptBr.hero.location;
export const currentCompany = ptBr.experience.entries[0].company;

/** schema.org Person + WebSite graph rendered as JSON-LD on the home page. */
export function personJsonLd(): Record<string, unknown> {
  const personId = new URL("/#person", siteUrl).href;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: siteUrl.href,
        image: new URL(profile.avatarUrl, siteUrl).href,
        jobTitle: siteRole,
        description: siteDescription,
        worksFor: { "@type": "Organization", name: currentCompany },
        homeLocation: { "@type": "Country", name: siteLocation },
        sameAs: [profile.socials.github.href, profile.socials.linkedin.href],
      },
      {
        "@type": "WebSite",
        "@id": new URL("/#website", siteUrl).href,
        name: profile.name,
        url: siteUrl.href,
        inLanguage: "pt-BR",
        publisher: { "@id": personId },
      },
    ],
  };
}

/** Serializes JSON-LD safely for a <script> tag (escapes `<`). */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
