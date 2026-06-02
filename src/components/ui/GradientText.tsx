import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

interface GradientTextProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly as?: ElementType;
}

/**
 * Renders text with the portfolio's signature teal → indigo → purple gradient.
 * Server-safe: pure markup, no hooks.
 */
export function GradientText({
  children,
  className,
  as: Component = "span",
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        "bg-gradient-to-r from-accent-teal via-accent-indigo to-accent-purple",
        "bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </Component>
  );
}
