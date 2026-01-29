# Aurora Luxe Travel - AI Agent Briefing Document

> **Last Updated**: 2026-01-29
> **Project Status**: ✅ Phase 5 Complete - Production Ready
> **Build Status**: ✅ Passing (Next.js 16.1.4, TypeScript 5.9.3)
> **Design Philosophy**: Celestial Noir / Anti-Generic / Intentional Minimalism

---

## 🎯 Project Overview

**Aurora Luxe Travel** is a luxury travel concierge website targeting ultra-high-net-worth individuals (UHNWI) with liquid assets of $30M+. The project implements a distinctive "Celestial Noir" design language that merges deep space aesthetics with terrestrial luxury, positioning the brand as "Beyond First Class."

### Core Value Proposition
- **Target Audience**: UHNW individuals seeking bespoke, hyper-curated travel experiences.
- **Business Model**: Membership-based luxury travel concierge service (Silver Circle → Black Card → Obsidian Society).
- **Aesthetic**: Deep space meets high-end luxury, avoiding generic "travel site" tropes.

---

## 🏗️ Technology Stack

This project utilizes a cutting-edge, production-grade stack optimized for performance and maintainability.

| Category | Technology | Version | Key Features |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | 16.1.4 | App Router, Server Components, Turbopack |
| **UI Library** | React | 19.2.3 | Hooks, Server Actions |
| **Language** | TypeScript | 5.9.3 | Strict Mode, Interface-first |
| **Styling** | Tailwind CSS | 4.1.18 | **CSS-first configuration** (no `tailwind.config.js`) |
| **Animation** | Framer Motion | 12.29.0 | Complex orchestrations, Reduced Motion support |
| **Components** | Radix UI | Latest | Accessible primitives (via shadcn patterns) |
| **Testing** | Vitest / Playwright | 4.x / 1.57 | Unit and E2E testing |
| **Linting** | ESLint | 9.39.2 | Strict quality gates |

---

## 🎨 Design System: "Celestial Noir"

The design system is rigorously defined in `src/app/globals.css` using Tailwind v4's `@theme` directive.

### Color Palette
- **Void Blacks**: `#050506` (Background), `#0a0a0c` (Surface) - Creates infinite depth.
- **Aurora Gradients**: `Cyan (#22d3ee)` → `Purple (#a855f7)` → `Magenta (#ec4899)` - Used for "GlowOrb" and atmospheric effects.
- **Luxury Accent**: Champagne Gold `#c9b896` (Primary), `#a89776` (Darker) - Used for borders, active states, and refined text.
- **Slate Scale**: `50-900` - Used for neutral text and subtle borders.

### Typography
- **Headlines**: `Instrument Serif` (Elegant, high-contrast serif)
- **Body**: `Geist` (Modern, legible sans-serif)
- **Scale**: Fluid typography ranging from `text-sm` to `text-8xl` for hero sections.

### Visual Effects
- **Glass Morphism**: `backdrop-blur-xl` with `bg-slate-900/30` and `border-slate-800/50`.
- **Aurora Blobs**: Animated, floating gradients that provide organic movement.
- **Scroll Spy**: Active navigation highlighting based on viewport position.

---

## 📂 Architecture & Structure

### Directory Map
```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO
│   ├── page.tsx            # Composition of all sections
│   └── globals.css         # CRITICAL: Tailwind v4 Theme & Tokens
│
├── components/
│   ├── layout/             # Navbar (Sticky), Footer
│   ├── sections/           # Hero, Destinations, Experiences, Membership, Testimonials, Form
│   └── ui/                 # Primitives: Button, Input, Select, GlassPanel, GlowOrb, etc.
│
├── data/                   # Static Data Layers (TypeScript interfaces)
│   ├── destinations.ts     # 6 Curated Locations
│   ├── experiences.ts      # 5 Signature Experiences
│   ├── membership.ts       # 3 Tiers
│   └── testimonials.ts     # Client reviews
│
└── lib/
    ├── utils.ts            # Helpers: cn(), formatCurrency()
    └── hooks/              # useScrollSpy, useReducedMotion
```

### Key Architectural Decisions
1.  **Tailwind CSS v4 (CSS-First)**:
    *   **NO** `tailwind.config.js`.
    *   All tokens defined in `src/app/globals.css` under `@theme`.
    *   Custom utilities (e.g., `.glass-panel`) defined in `@layer utilities`.
2.  **No Global State**:
    *   State is localized to components (Form state, Toast state, Scroll state).
    *   No Redux, Zustand, or Context API required for current scope.
3.  **Component Patterns**:
    *   **"Use Client"**: Explicitly used only for interactive components.
    *   **Accessibility**: `useReducedMotion` hook required for all motion components.
    *   **Composition**: Shadcn-like primitives (`components/ui`) composed into complex sections.

---

## ✅ Completed Features (Phase 1-5)

The project is **100% feature complete** according to the initial scope.

1.  **Foundation**: Next.js 16 + Tailwind v4 setup, custom fonts, animation utilities.
2.  **Data Layer**: Fully typed data modules for Destinations, Experiences, and Membership.
3.  **UI Primitives**: 9 reusable components including `GlowOrb`, `GlassPanel`, `ChipGroup`.
4.  **Layout**: Sticky Navbar with Scroll Spy, Mobile Menu (Overlay), Footer.
5.  **Sections**:
    *   **Hero**: Full viewport with aurora animations.
    *   **Destinations**: Grid of 6 luxury locations (Maldives, Tokyo, Alps, Dubai, Serengeti, Amalfi).
    *   **Experiences**: Alternating showcase of 5 signature offerings.
    *   **Membership**: 3-card layout with "Black Card" highlighted.
    *   **Testimonials**: Social proof grid.
    *   **Concierge Form**: Zod-validated form with toast feedback.

---

## 🚀 Development Workflow

### Standard Commands
```bash
npm install          # Install dependencies
npm run dev          # Start Turbopack dev server (localhost:3000)
npm run build        # Production build
npm run start        # Run production server
npm run lint         # Run ESLint
npx tsc --noEmit     # Type-check (Run before commit)
```

### Verification Checklist
Before marking any task as complete:
1.  **Type Check**: `npx tsc --noEmit` must pass.
2.  **Lint**: `npm run lint` must be clean.
3.  **Build**: `npm run build` must succeed.
4.  **Accessibility**: Verify keyboard nav and contrast.

---

## 🔮 Future Roadmap

*   **Phase 6**: Dynamic Routes (`/destinations/[slug]`).
*   **Phase 7**: CMS Integration (Sanity.io or Contentful).
*   **Phase 8**: Backend API integration (SendGrid, CRM).
*   **Phase 9**: User Auth & Booking System (Stripe).

---

## 🚨 Critical Guidelines for AI Agents

1.  **Tailwind v4 Strictness**: **NEVER** create a `tailwind.config.js`. Always modify `src/app/globals.css` for theme changes.
2.  **Design Discipline**: Adhere to the **Anti-Generic** pledge. No "safe" templates. Enforce the "Celestial Noir" aesthetic (Void Black + Champagne + Aurora).
3.  **Image Handling**: Use Next.js `<Image>` with `fill` and `object-cover`. Source images from Unsplash.
4.  **Code Quality**:
    *   Strict TypeScript (No `any`).
    *   Use `cn()` for class merging.
    *   Always implement `useReducedMotion`.
5.  **Safety**: Do not introduce global state libraries unless explicitly requested. Keep state local.

---
*Reference Sources: @CLAUDE.md, @AGENT.md, @AGENT-2.md, @AGENT-3.md, @AGENT-4.md*
