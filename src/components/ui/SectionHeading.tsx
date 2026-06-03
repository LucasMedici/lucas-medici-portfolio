import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  readonly eyebrow: string;
  readonly title: ReactNode;
  readonly description?: ReactNode;
  readonly align?: "left" | "center";
  readonly className?: string;
}

/**
 * Consistent section heading with eyebrow label, gradient title, and optional
 * description. Server-safe — keeps interactive concerns out of layout blocks.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        alignClass,
        align === "center" && "mx-auto",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full",
          "text-xs font-medium tracking-widest uppercase",
          "bg-card backdrop-blur-md border border-border",
          "text-muted-foreground",
        )}
      >
        <span
          aria-hidden
          className="size-1.5 rounded-full bg-muted-foreground"
        />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
