/**
 * Underlined link used inside running text and link rows. Also a
 * `group/link` so a nested `Arrow` can nudge on hover.
 */
export const inlineLink =
  "group/link underline decoration-underline underline-offset-[3px] transition-colors hover:decoration-foreground";

/**
 * Props for links that leave the site.
 */
export const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
