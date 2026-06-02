"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type MotionDivProps = HTMLMotionProps<"div">;

interface GlassCardProps extends Omit<MotionDivProps, "children"> {
  readonly children: ReactNode;
  readonly className?: string;
  readonly interactive?: boolean;
}

/**
 * Reusable glassmorphic card with optional hover lift. Defaults to interactive
 * (hover scale + glow) — pass `interactive={false}` for static surfaces.
 */
export function GlassCard({
  children,
  className,
  interactive = true,
  ...rest
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        interactive
          ? { y: -6, scale: 1.01 }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative rounded-2xl",
        "bg-card backdrop-blur-md",
        "border border-border",
        "shadow-xl shadow-black/20",
        "transition-colors duration-300",
        interactive && "hover:border-accent-teal/50",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
