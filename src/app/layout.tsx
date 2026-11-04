import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";

import { profile } from "@/data/profile";
import { localeScript } from "@/lib/localeScript";
import { siteDescription, siteTitle, siteUrl } from "@/lib/site";
import { themeScript } from "@/lib/themeScript";

import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: siteTitle,
    template: `%s · ${profile.name}`,
  },
  description: siteDescription,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Software Engineer",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Portfolio",
  ],
  // One URL for both languages: pt-BR is server-rendered and EN is a
  // client-side switch, so there are no per-language alternates to declare.
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName: profile.name,
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Google Search Console ownership (URL-prefix property, HTML tag method).
  verification: {
    google: "CA3PNvBN8FZaM_oS80XfrMlqZ_NWUf72K7qOPgjLe1k",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF7" },
    { media: "(prefers-color-scheme: dark)", color: "#131211" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${interTight.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeScript }} />
      </head>
      <body className="min-h-full bg-background font-sans text-base leading-[1.65] text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
