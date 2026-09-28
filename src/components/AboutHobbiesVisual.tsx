"use client";

import { m } from "framer-motion";

import { cn } from "@/lib/cn";

function SoccerBallIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="48"
        cy="48"
        r="40"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.55"
      />
      <path
        d="M48 14 L56.5 32 L48 40 L39.5 32 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <path
        d="M48 56 L56.5 74 L48 82 L39.5 74 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.06"
      />
      <path
        d="M18 38 L32 44 L32 52 L18 58 L10 48 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.04"
      />
      <path
        d="M78 38 L86 48 L78 58 L64 52 L64 44 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="currentColor"
        fillOpacity="0.04"
      />
      <path
        d="M24 24 L34 30 L32 40 L22 36 L18 26 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.65"
      />
      <path
        d="M72 24 L78 26 L82 36 L72 40 L66 30 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.65"
      />
      <path
        d="M24 72 L22 60 L32 56 L36 66 L30 76 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.65"
      />
      <path
        d="M72 72 L66 76 L64 66 L72 56 L78 60 Z"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.65"
      />
    </svg>
  );
}

function MinecraftCubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 18 L74 33 L48 48 L22 33 Z"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <path
        d="M22 33 L48 48 L48 78 L22 63 Z"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path
        d="M48 48 L74 33 L74 63 L48 78 Z"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M34 27 L40 30 L34 33 L28 30 Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.45"
      />
      <path
        d="M46 24 L52 27 L46 30 L40 27 Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.45"
      />
      <path
        d="M58 30 L64 33 L58 36 L52 33 Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.45"
      />
      <path
        d="M40 33 L46 36 L40 39 L34 36 Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.35"
      />
      <path
        d="M52 36 L58 39 L52 42 L46 39 Z"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.35"
      />
      <path
        d="M30 54 L48 64"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.25"
      />
      <path
        d="M48 64 L66 54"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.25"
      />
    </svg>
  );
}

function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 96 56"
      aria-hidden
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24 C12 14 20 8 48 8 C76 8 84 14 84 24 C84 38 76 48 48 48 C20 48 12 38 12 24 Z"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.55"
      />
      <path
        d="M4 26 C4 18 8 14 16 14 L20 14"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M92 26 C92 18 88 14 80 14 L76 14"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path d="M28 28 H36 M32 24 V32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="62" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="72" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="72" cy="30" r="3.5" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
    </svg>
  );
}

interface HobbyCardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  /** CSS custom property holding the glow's HSL triplet, e.g. `--accent-teal`. */
  readonly accentVar: string;
  readonly delay?: number;
}

function HobbyCard({ children, className, accentVar, delay = 0 }: HobbyCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className={cn("relative", className)}
    >
      <div
        aria-hidden
        className="absolute -inset-10"
        style={{
          background: `radial-gradient(closest-side, hsl(var(${accentVar}) / 0.1), transparent)`,
        }}
      />
      <div
        className={cn(
          "relative flex items-center justify-center rounded-2xl border border-border",
          "bg-card/90 p-8 shadow-xl animate-float",
        )}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    </m.div>
  );
}

export function AboutHobbiesVisual() {
  return (
    <div
      aria-hidden
      className="relative mx-auto flex h-full w-full max-w-sm items-center justify-center lg:max-w-none"
    >
      <HobbyCard
        accentVar="--accent-purple"
        className="absolute left-1/2 top-[42%] z-10 -translate-x-1/2 -translate-y-1/2 rotate-12"
        delay={0.05}
      >
        <MinecraftCubeIcon className="size-24 text-accent-purple/75 md:size-28" />
      </HobbyCard>

      <HobbyCard
        accentVar="--accent-teal"
        className="absolute right-0 top-0 rotate-6 md:right-2"
        delay={0.15}
      >
        <SoccerBallIcon className="size-28 text-accent-teal/70 md:size-32" />
      </HobbyCard>

      <HobbyCard
        accentVar="--accent-indigo"
        className="absolute bottom-0 left-0 -rotate-6 md:bottom-2 md:left-0"
        delay={0.3}
      >
        <GamepadIcon className="w-32 text-accent-indigo/70 md:w-36" />
      </HobbyCard>
    </div>
  );
}
