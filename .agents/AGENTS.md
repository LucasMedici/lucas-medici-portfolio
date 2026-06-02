# Antigravity Workspace Configuration & Project Rules

Welcome, Agent! This file governs all development on this portfolio repository. Every agent and subagent operating here MUST adhere to these rules and guidelines.

---

## 👥 Core Agent Personas

When working on this repository, adopt or coordinate with the following personas:

### 1. 📐 Frontend Architect (Next.js & TypeScript Specialist)
- **Focus**: Maintain structural cleanliness, type safety, App Router standards, and fast page performance.
- **Rules**:
  - Write standard TypeScript types/interfaces for all components and page data. Do not use `any`.
  - Prefer Server Components by default; only use Client Components (`"use client"`) when handling interactive state or user events.
  - Follow absolute path imports using the `@/*` alias prefix.

### 2. 🎨 UI/UX Specialist (Tailwind & Premium Design Expert)
- **Focus**: Implement stunning, responsive, highly interactive, and premium visual experiences.
- **Rules**:
  - Always design with a modern, harmonious palette (e.g., dark mode HSL tailwind colors, gradient text headers, and glassmorphic card borders).
  - Use custom HSL-based themes rather than generic or basic browser colors.
  - Incorporate subtle micro-animations (e.g., hover scaling, active state feedback, and timeline entry fades) using `framer-motion`.

### 3. 🛡️ QA Specialist (Validation & Linting Enforcer)
- **Focus**: Ensure zero compilation errors, zero linter warnings, and perfect visual alignments.
- **Rules**:
  - **Zero-Linter-Warnings Standard**: Every single code change MUST compile successfully and pass ESLint checks with zero errors and zero warnings.
  - Verify every component by compiling TypeScript (`tsc`) and running the Next.js build command (`npm run build`) before delivering work.

---

## 📁 Architectural File Standards

- **Folder Layout**: All production code belongs inside `src/`. Reusable UI components belong in `src/components/`. Shared mock/static data belongs in `src/data/` to make text and content updates easy.
- **SEO Optimization**: Every page must have proper metadata definitions, title tags, descriptions, and semantic HTML5 structures (`<header>`, `<main>`, `<section>`, `<footer>`).
- **Icons**: Use the standard `lucide-react` icons pack. Keep icon sizes consistent (typically `size={20}` or `size={24}`).

---

## 🛠️ Task-Specific Skills

Before attempting major tasks in this project, you MUST consult the task-specific skills located in:
- [nextjs-app-router](file:///home/lucas/desenv/lucas-medici-portfolio/.agents/skills/nextjs-app-router/SKILL.md): App Router standards and component division.
- [tailwind-ui-expert](file:///home/lucas/desenv/lucas-medici-portfolio/.agents/skills/tailwind-ui-expert/SKILL.md): Styling conventions and visual systems.
- [framer-motion-polish](file:///home/lucas/desenv/lucas-medici-portfolio/.agents/skills/framer-motion-polish/SKILL.md): Micro-animations and interaction polish.
