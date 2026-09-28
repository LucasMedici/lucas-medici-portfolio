"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the framer-motion features the site uses (animations, variants,
 * hover/tap/in-view gestures). Components must use `m.*` instead of `motion.*`
 * so the full feature bundle stays out of the client JS.
 */
export function MotionProvider({ children }: { readonly children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
