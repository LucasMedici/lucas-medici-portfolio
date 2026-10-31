import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

interface SectionTitleProps {
  readonly id: string;
  readonly children: ReactNode;
}

/**
 * Section heading: larger rather than bolder, so it reads as a title without
 * competing with the page name.
 */
export function SectionTitle({ id, children }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className="text-2xl font-medium leading-tight tracking-[-0.02em] text-foreground md:text-[28px]"
    >
      {children}
    </h2>
  );
}

interface SectionProps {
  readonly id: string;
  readonly title: ReactNode;
  readonly description?: ReactNode;
  readonly children: ReactNode;
  readonly className?: string;
}

/**
 * Text-column section (720px) separated from the previous one by a hairline.
 */
export function Section({
  id,
  title,
  description,
  children,
  className,
}: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        "mx-auto flex max-w-[720px] scroll-mt-20 flex-col gap-6 border-t border-rule py-10",
        className,
      )}
    >
      <div className="flex flex-col gap-2.5">
        <SectionTitle id={titleId}>{title}</SectionTitle>
        {description ? (
          <p className="text-[17px] text-tertiary-foreground">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
