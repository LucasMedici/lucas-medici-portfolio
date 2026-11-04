# Tailwind CSS UI Expert Skill (`tailwind-ui-expert`)

This skill defines the visual rules and styling patterns that coding agents must follow to keep the portfolio's look consistent: minimal, text-first, neutral, and hand-made — never a generic template.

---

## 🚫 What This Site Is Not

The previous version looked AI-generated because of the combination below. Do not reintroduce any of it:

- Gradient text (`bg-gradient-to-* … bg-clip-text text-transparent`) or gradient/radial "blob" backgrounds.
- Glassmorphism (`backdrop-blur`, semi-transparent glass cards, glowing borders).
- Decorative pill badges with sparkle icons ("Welcome", "Available for…").
- Cards that lift or glow on hover; staggered fade-ins, entrance or scroll-reveal animations.
- Justified paragraphs (`text-align: justify`).
- Emoji used as icons.

---

## 🎨 Visual System

### 1. Color Tokens
- All colors come from the HSL tokens in `src/app/globals.css` (`--background`, `--foreground`, `--muted-foreground`, `--rule`, `--chip`, `--panel`, `--accent`, …). Use the Tailwind classes they generate (`bg-background`, `text-muted-foreground`, `border-rule`, `border-chip`, `bg-panel`, `text-accent`).
- Never hard-code hex values or raw Tailwind palette colors (`bg-zinc-900`, `text-blue-600`) in components.
- Light tokens live on `:root`, dark tokens on `:root[data-theme="dark"]`. `data-theme` is set before paint from the saved choice or the OS preference (`src/lib/themeScript.ts`) and changed by the header toggle (`useTheme`). A new color must be added to both themes.
- `--accent` (burnt orange) is used sparingly — currently only for project numbers.

### 2. Typography
- Fonts: Inter Tight (`font-sans`) for everything, JetBrains Mono (`font-mono`) for metadata (periods, stacks, footer).
- Section titles use `SectionTitle` from `@/components/ui/Section`: larger, **medium weight, not bold** (`text-2xl md:text-[28px] font-medium`).
- Body text 16px with `leading-[1.65]`, left-aligned.

### 3. Layout
- Text sections live in a 720px column (`Section` component: `max-w-[720px]`, hairline `border-t border-rule`, `py-10`).
- Projects break out to `max-w-[960px]` with a two-column grid on desktop, one column on mobile.
- Label/content rows (period, skill group) use `grid gap-2 md:grid-cols-[128px_minmax(0,1fr)] md:gap-8` so the label stacks above the content on mobile.
- Page side padding is `px-5` (set once in `src/app/page.tsx`).
- The header is sticky (`sticky top-0`, fixed `h-16`) with a **solid** `bg-background` — never blur or transparency. Its bottom hairline only appears after scrolling. Sections use `scroll-mt-20` so anchors land below it.

### 4. Links, Borders & Interaction
- Inline links use the `inlineLink` class from `@/lib/styles` (underline with a light decoration that darkens on hover). External links spread `externalLinkProps`.
- Cards use a 1px `border-chip` border and `rounded-[14px]`; on hover the border and background change (`hover:border-card-hover-border hover:bg-card-hover`). Tailwind v4 applies `hover:` only on devices that support hover, so touch screens never get stuck states.
- Project cards are fully clickable through a stretched title link (`after:absolute after:inset-0`); secondary links inside the card need `relative z-10`.

### 5. Motion
Motion is CSS-only, triggered by hover, and uses the `ease-soft` easing token. The approved vocabulary:
- **Hero photo**: slight grow only, no tilt (`hover:scale-[1.04]`, `duration-500`).
- **Project screenshot**: zoom inside its fixed frame (`group-hover:scale-[1.04]` on the image, `overflow-hidden` on the frame) plus title underline and arrow.
- **Link arrows**: the `Arrow` component (`@/components/ui/Arrow`) nudges toward its direction when its `group/link` parent is hovered (`inlineLink` already adds `group/link`).
- **Stack chips**: the chip grows slightly (`hover:scale-[1.05]`) with the card border/background change; its icon grows (`group-hover/chip:scale-[1.2]`) and takes its brand color via the `--brand` CSS variable.
- **Theme icon**: small rotation on hover.

Keep transforms small (≤ 1.04 scale on photos/screenshots, ≤ 1.05 on chips, ≤ 1.2 on small icons, ≤ 4px nudge). Never move whole cards, never animate on scroll or page load. `prefers-reduced-motion` is handled globally in `globals.css`. No animation libraries.

### 6. Icons
- UI icons: `lucide-react`, `size={20}` (or `17` inside skill chips), always `aria-hidden` when decorative.
- Technology/brand icons: `react-icons` (`si`, `fa`), monochrome (`currentColor`) at rest. Brand colors appear only as the Stack chip hover state.

---

## 📱 Responsive & Accessibility

- **Mobile first**: base classes target phones (~390px); scale up with `sm:`/`md:`.
- Touch targets are at least 44px (`size-11`, `min-h-12` for buttons).
- The mobile header collapses the navigation behind a menu button with `aria-expanded`/`aria-controls`.
- Keep text contrast at 4.5:1 or more in both themes when adding or changing tokens.

---

## 🧹 Code Cleanliness & Best Practices

- **Avoid Utility Bloat**: Group and order utility classes logically:
  1. Layout (e.g., `flex`, `grid`, `relative`, `w-full`)
  2. Spacing (e.g., `p-6`, `gap-4`)
  3. Visuals (e.g., `bg-panel`, `border`, `rounded-xl`)
  4. Interactions (e.g., `hover:border-card-hover-border`, `transition-colors`)
- **Tailwind Merge**: When writing reusable components that accept `className`, merge with `cn("default-classes", className)` from `@/lib/cn`.
- Reuse `Section`, `SectionTitle`, `inlineLink`, and `externalLinkProps` instead of re-creating their styles.
