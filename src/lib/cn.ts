import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Conditionally join Tailwind classes and resolve any conflicting utilities so
 * that consumer overrides (passed via `className`) always win.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
