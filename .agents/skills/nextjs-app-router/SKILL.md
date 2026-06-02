# Next.js App Router Skill (`nextjs-app-router`)

This skill defines the technical rules and directory organization for coding agents developing in this Next.js 14+ / 15+ App Router repository.

---

## 🚀 App Router Architecture

### 1. Server Components vs. Client Components
- **Server Components (Default)**: All pages and components in the `src/app/` folder are React Server Components (RSC) by default. Use them to render static layouts, parse data, and structure layout blocks.
- **Client Components (`"use client"`)**: Only use the `"use client"` directive at the very top of files when:
  - Using state Hooks (`useState`, `useReducer`, `useRef`).
  - Using lifecycle or synchronization Hooks (`useEffect`, `useLayoutEffect`).
  - Listening to DOM events (e.g., button clicks, form submissions, cursor drags).
  - Importing libraries that require client-side execution (e.g., `framer-motion`).

### 2. Component Demarcation Strategy
- Separate the interactive features from structural layout blocks. Keep leaf components interactive and stateful while keeping structural containers static.
- **Example**:
  - `src/app/page.tsx` (Server Component) -> Renders the page container, sections, and loads static portfolio data.
  - `src/components/ContactForm.tsx` (Client Component) -> Contains the `"use client"` header, manages contact form inputs and handles form submission.

---

## 📂 Import Guidelines

- **Absolute Imports**: Always use the `@/*` absolute paths configured in `tsconfig.json`. Do not use relative directories (e.g., `../../components/Navbar`).
  - **Correct**: `import Navbar from "@/components/Navbar"`
  - **Incorrect**: `import Navbar from "../../components/Navbar"`
- **Asset Imports**: Import images, SVGs, and local files directly to benefit from Next.js caching and optimization.
- **Fonts**: Use the standard `next/font/google` package to configure modern typography directly in the root layout without adding external network calls.

---

## 🧪 Verification & Best Practices

- Ensure that any dynamic route or metadata page has defined typescript props.
- Test client component boundaries: ensure they do not accidentally import Server-only logic (like Node.js filesystem tools or private server environment variables).
