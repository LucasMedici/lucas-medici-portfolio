import { cn } from "@/lib/cn";

type ArrowDirection = "up-right" | "right" | "up";

const glyphs: Readonly<Record<ArrowDirection, string>> = {
  "up-right": "↗",
  right: "→",
  up: "↑",
};

/** Nudge toward the arrow's direction while its `group/link` parent is hovered. */
const nudges: Readonly<Record<ArrowDirection, string>> = {
  "up-right": "group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5",
  right: "group-hover/link:translate-x-1",
  up: "group-hover/link:-translate-y-0.5",
};

interface ArrowProps {
  readonly direction?: ArrowDirection;
  readonly className?: string;
}

/**
 * Decorative arrow for links. The parent link must carry the `group/link`
 * class (already included in `inlineLink`).
 */
export function Arrow({ direction = "up-right", className }: ArrowProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block transition-transform duration-200 ease-soft",
        nudges[direction],
        className,
      )}
    >
      {glyphs[direction]}
    </span>
  );
}
