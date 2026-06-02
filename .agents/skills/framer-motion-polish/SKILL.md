# Framer Motion Polish Skill (`framer-motion-polish`)

This skill defines the technical rules and animations standards for using `framer-motion` to elevate the portfolio's interactivity to feel premium, fluid, and state-of-the-art.

---

## ⚡ Core Animation Guidelines

### 1. Maintain Performance
- **Transform-Based Animations**: Only animate high-performance, hardware-accelerated CSS properties: `opacity`, `scale`, `x`, `y`, `rotate`. Avoid animating layout-triggering properties like `width`, `height`, `margin`, or `top` unless layout shifting is explicitly handled using Framer's `layout` prop.
- **Hardware Acceleration**: Animations using `framer-motion` should be smooth and lag-free. Keep spring physics natural (e.g., `damping: 20, stiffness: 100`).

### 2. Standard Interactive Effects
- **Card Hover Animations**: Portfolio cards (Projects, Experiences) should lift up and glow subtly on focus or hover.
  - **Code Standard**:
    ```tsx
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    ```
- **Timeline Scroll Reveal**: Fade and slide experience timelines into view as the user scrolls down the page.
  - **Code Standard**:
    ```tsx
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    ```

---

## 🎨 Interactive Layout Patterns

- **Staggered Lists**: When rendering a list of items (such as technical skill badges or project cards), use container staggering to make items appear sequentially rather than all at once.
  - **Parent Variant**:
    ```ts
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
      }
    };
    ```
  - **Child Variant**:
    ```ts
    const itemVariants = {
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };
    ```
- **Micro-interactions**: Provide instant feedback on buttons or interactive tabs. E.g., `whileTap={{ scale: 0.95 }}` on buttons.
