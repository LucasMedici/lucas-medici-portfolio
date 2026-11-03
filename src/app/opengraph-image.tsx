import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";
import {
  siteDescription,
  siteLocation,
  siteRole,
  siteTitle,
  siteUrl,
} from "@/lib/site";

// COPY(owner): alt text reuses the meta title — pending approval (issue #5).
export const alt = siteTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Light-theme tokens from globals.css, as hex for Satori. */
const colors = {
  background: "#ffffff", // --background
  foreground: "#111111", // --foreground
  tertiary: "#444444", // --tertiary-foreground
  muted: "#555555", // --muted-foreground
  rule: "#eaeaea", // --rule
  accent: "#c2400c", // --accent, hsl(17 88.3% 40.4%)
} as const;

const fontsDir = join(process.cwd(), "src/assets/fonts");

/**
 * Share preview (1200×630) in the redesign's minimal style: plain background,
 * Inter Tight, the accent used only for one short mark. Generated at build time.
 */
export default async function OpengraphImage() {
  const [regular, semibold] = await Promise.all([
    readFile(join(fontsDir, "inter-tight-latin-400-normal.woff")),
    readFile(join(fontsDir, "inter-tight-latin-600-normal.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "88px 96px 72px",
          backgroundColor: colors.background,
          color: colors.foreground,
          fontFamily: "Inter Tight",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 56,
              height: 6,
              marginBottom: 40,
              backgroundColor: colors.accent,
            }}
          />
          <div
            style={{
              fontSize: 96,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 40,
              fontWeight: 400,
              color: colors.muted,
            }}
          >
            {`${siteRole} · ${siteLocation}`}
          </div>
          <div
            style={{
              marginTop: 48,
              maxWidth: 940,
              fontSize: 32,
              fontWeight: 400,
              lineHeight: 1.45,
              color: colors.tertiary,
            }}
          >
            {siteDescription}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            paddingTop: 28,
            borderTop: `2px solid ${colors.rule}`,
            fontSize: 26,
            color: colors.muted,
          }}
        >
          {siteUrl.host}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter Tight", data: regular, weight: 400, style: "normal" },
        { name: "Inter Tight", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
