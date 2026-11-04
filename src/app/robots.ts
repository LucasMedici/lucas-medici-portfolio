import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

/**
 * Production allows every crawler. Vercel preview/development builds are
 * blocked so they never compete with the production URL in search results.
 */
export default function robots(): MetadataRoute.Robots {
  const vercelEnv = process.env.VERCEL_ENV;
  const isPreview = vercelEnv !== undefined && vercelEnv !== "production";

  if (isPreview) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", siteUrl).href,
  };
}
