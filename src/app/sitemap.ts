import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/**
 * Single-page site: one entry. Both languages live on the same URL, so no
 * `alternates.languages` are declared.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl.href,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
