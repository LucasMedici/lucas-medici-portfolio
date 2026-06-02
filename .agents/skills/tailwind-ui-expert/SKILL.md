# Tailwind CSS UI Expert Skill (`tailwind-ui-expert`)

This skill defines the visual rules and styling patterns that coding agents must follow to maintain a premium, cohesive, and modern look across the entire portfolio.

---

## 🎨 Visual System & Premium Aesthetics

### 1. Color Palette Standards
- Avoid raw generic colors (e.g., standard `bg-red-500` or `text-blue-600`).
- Employ curated, custom HSL-based dark mode colors or sophisticated Tailwind shades (e.g., slate, zinc, neutral) to construct a premium dark interface.
- Use smooth, eye-catching text gradients for key headings:
  - **Syntax**: `bg-gradient-to-r from-teal-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent`

### 2. Glassmorphism & Accent Panels
- Leverage modern backdrop blurs and subtle semi-transparent borders to create beautiful visual depth (glassmorphism).
- **Example Glass Card**:
  - `bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-2xl`
- Use dynamic borders that light up or change color subtly on hover:
  - `hover:border-teal-500/50 transition-colors duration-300`

---

## 📱 Responsive & Mobile-First Layouts

- **Mobile First**: Design everything for mobile devices first, then scale up using breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
- **Interactive Grids**: Use Tailwind grid/flex utilities for layouts.
  - **Grid pattern**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Spacing**: Keep layout padding consistent using a standard hierarchy (e.g., `px-6 py-12 md:py-24`, `space-y-8`).

---

## 🧹 Code Cleanliness & Best Practices

- **Avoid Utility Bloat**: Do not write overly long classes that are hard to read. Group and order utility classes logically:
  1. Layout (e.g., `flex`, `grid`, `relative`, `w-full`, `h-auto`)
  2. Spacing (e.g., `p-6`, `m-4`, `gap-4`)
  3. Visuals (e.g., `bg-zinc-900`, `border`, `rounded-2xl`, `shadow-md`)
  4. Interactions (e.g., `hover:bg-zinc-800`, `transition-all`, `duration-300`)
- **Tailwind Merge**: When writing custom reusable component wrappers that take custom class names, always merge them safely using `tailwind-merge` and `clsx`:
  - **Pattern**: `cn("default-classes", className)`
