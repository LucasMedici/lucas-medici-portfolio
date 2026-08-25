import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { profile } from "@/data/profile";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = `${profile.name}`;
const siteDescription = profile.summary;

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s — ${profile.name}`,
  },
  description: siteDescription,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: profile.socials.github.href }],
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
  openGraph: {
    type: "website",
    title: siteTitle,
    description: siteDescription,
    siteName: `${profile.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="relative min-h-full bg-background text-foreground font-sans selection:bg-accent-indigo/40">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
