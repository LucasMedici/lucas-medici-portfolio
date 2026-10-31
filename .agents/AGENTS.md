# Antigravity Workspace Configuration & Project Rules

Welcome, Agent! This file governs all development on this portfolio repository. Every agent and subagent operating here MUST adhere to these rules and guidelines.

---

## 👥 Core Agent Personas

When working on this repository, adopt or coordinate with the following personas:

### 1. 📐 Frontend Architect (Next.js & TypeScript Specialist)
- **Focus**: Maintain structural cleanliness, type safety, App Router standards, and fast page performance.
- **Rules**:
  - Write standard TypeScript types/interfaces for all components and page data. Do not use `any`.
  - Prefer Server Components by default; only use Client Components (`"use client"`) when handling interactive state, user events, or locale-dependent copy (`useLocale`).
  - Follow absolute path imports using the `@/*` alias prefix.

### 2. 🎨 UI/UX Specialist (Tailwind & Minimal Design)
- **Focus**: Keep the portfolio minimal, text-first, and readable — it must not look like a generated template.
- **Rules**:
  - Use only the HSL color tokens defined in `src/app/globals.css`; the dark theme applies under `<html data-theme="dark">` (OS preference by default, overridable by the header toggle).
  - No gradient text, gradient backgrounds, glassmorphism, glowing borders, sparkle badges, cards that lift or glow, or entrance/scroll-reveal animations.
  - Motion is CSS-only and happens on hover, using the patterns in the `tailwind-ui-expert` skill (photo grow, screenshot zoom inside its frame, arrow nudge, stack chip icon). Do not add animation libraries.
  - Left-aligned text only (never justified).
  - Follow the full visual system in the `tailwind-ui-expert` skill.

### 3. 🛡️ QA Specialist (Validation & Linting Enforcer)
- **Focus**: Ensure zero compilation errors, zero linter warnings, and perfect visual alignments.
- **Rules**:
  - **Zero-Linter-Warnings Standard**: Every single code change MUST compile successfully and pass ESLint checks with zero errors and zero warnings.
  - Verify every component by compiling TypeScript (`tsc`) and running the Next.js build command (`npm run build`) before delivering work.
  - Check layouts at phone width (~390px) and desktop (~1280px), in both light and dark themes.

---

## 📁 Architectural File Standards

- **Folder Layout**: All production code belongs inside `src/`. Reusable UI components belong in `src/components/`. Shared mock/static data belongs in `src/data/` to make text and content updates easy.
- **Copy & i18n**: All user-facing text lives in `src/data/` (`translations.ts` and the per-locale fields in data files). Portuguese (`pt-br`) is the source of truth; English strings that still need translating are marked `TODO(i18n)`.
- **SEO Optimization**: Every page must have proper metadata definitions, title tags, descriptions, and semantic HTML5 structures (`<header>`, `<main>`, `<section>`, `<footer>`).
- **Icons**: Use `lucide-react` for UI icons (typically `size={20}`) and `react-icons` for technology/brand icons, rendered monochrome (brand color only on Stack chip hover).

---

## 🛠️ Task-Specific Skills

Before attempting major tasks in this project, you MUST consult the task-specific skills located in:
- [nextjs-app-router](file:///home/lucas/desenv/lucas-medici-portfolio/.agents/skills/nextjs-app-router/SKILL.md): App Router standards and component division.
- [tailwind-ui-expert](file:///home/lucas/desenv/lucas-medici-portfolio/.agents/skills/tailwind-ui-expert/SKILL.md): Styling conventions and visual systems.
