# MASTER EXECUTION PLAN — Aurora Luxe Travel

This document outlines the step-by-step execution plan to build the **Aurora Luxe Travel** website. It breaks down the project into logical, independent phases to ensure a systematic and high-quality implementation of the "Celestial Noir" aesthetic using Next.js 15 and Tailwind CSS v4.0.

---

## Phase 1: Foundation & Configuration
**Goal:** Initialize the project, configure the build tools, set up the design tokens (colors, typography) in Tailwind v4, and establish the global application shell.

### Files to Create/Modify:

#### 1. `package.json`
*   **Features:** Define project dependencies and scripts.
*   **Interfaces:** N/A (Config file)
*   **Checklist:**
    - [ ] Install `next@latest`, `react@latest`, `react-dom@latest`.
    - [ ] Install `tailwindcss@next`, `@tailwindcss/postcss`.
    - [ ] Install `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
    - [ ] Ensure scripts for `dev`, `build`, `start`, `lint` are present.

#### 2. `next.config.ts`
*   **Features:** Configure image domains (Unsplash), experimental flags (if any for v15/Turbopack).
*   **Interfaces:** N/A
*   **Checklist:**
    - [ ] Allow `images.unsplash.com`.
    - [ ] Enable robust image optimization settings.

#### 3. `app/globals.css`
*   **Features:** The core of Tailwind v4 configuration. Defines the "Celestial Noir" variables and `@theme`.
*   **Interfaces:** N/A (CSS)
*   **Checklist:**
    - [ ] Add `@import "tailwindcss";`.
    - [ ] Define `@theme` block with Void, Aurora, and Champagne color palettes.
    - [ ] Define typography families (Instrument Serif, Geist).
    - [ ] Add base styles for smooth scrolling and body background color (`bg-void`).
    - [ ] Add utility classes for `.glass`, `.text-gradient`, `.shimmer`.

#### 4. `lib/utils.ts`
*   **Features:** Utility functions for class merging and formatting.
*   **Interfaces:** `cn(...inputs: ClassValue[])`
*   **Checklist:**
    - [ ] Implement `cn` using `clsx` and `tailwind-merge`.
    - [ ] Implement `formatCurrency` helper.

#### 5. `app/layout.tsx`
*   **Features:** Root layout, font loading, global providers, and noise overlay.
*   **Interfaces:** React Server Component.
*   **Checklist:**
    - [ ] Configure `next/font/google` for Instrument Serif and Geist.
    - [ ] Apply fonts to `<body>`.
    - [ ] Add `<NoiseOverlay />` (placeholder until Phase 2) or inline styles for texture.
    - [ ] Set proper metadata (title, description).

---

## Phase 2: Core Design System & Primitives
**Goal:** Build the atomic UI components that define the aesthetic. These are the building blocks for the rest of the site.

### Files to Create/Modify:

#### 1. `components/ui/AuroraBlob.tsx`
*   **Features:** A background decorative element that uses blurred radial gradients to simulate the aurora.
*   **Interfaces:** `Props: { className?: string }`
*   **Checklist:**
    - [ ] Create div with absolute positioning.
    - [ ] Apply heavy blur (`blur-3xl` or custom).
    - [ ] Animate opacity/position slightly using Framer Motion.

#### 2. `components/ui/NoiseOverlay.tsx`
*   **Features:** A fixed, pointer-events-none overlay to add film grain texture.
*   **Interfaces:** None.
*   **Checklist:**
    - [ ] Use SVG filter or base64 image for noise.
    - [ ] Set low opacity (e.g., 0.05).
    - [ ] Ensure `z-index` places it above background but below content.

#### 3. `components/ui/GlassPanel.tsx`
*   **Features:** A reusable container with the "Ice Vapor" glass effect.
*   **Interfaces:** `Props: { children, className, hoverEffect?: boolean }`
*   **Checklist:**
    - [ ] Apply `backdrop-blur`.
    - [ ] Apply thin, semi-transparent border.
    - [ ] Add optional hover state (lift + glow).

#### 4. `components/ui/AnimatedBorder.tsx`
*   **Features:** A wrapper that creates a rotating conic gradient border around its children.
*   **Interfaces:** `Props: { children, className }`
*   **Checklist:**
    - [ ] Use CSS `@property` for `--angle` if supported, or Framer Motion rotation.
    - [ ] Create pseudo-element with conic gradient.
    - [ ] Mask content area to show only the border.

#### 5. `components/ui/Button.tsx`
*   **Features:** A polymorphic button component with multiple variants.
*   **Interfaces:** `Props: { variant: 'primary' | 'secondary' | 'ghost', size: 'sm' | 'md' | 'lg', ...HTMLButtonProps }`
*   **Checklist:**
    - [ ] **Primary:** Aurora gradient bg, shadow glow.
    - [ ] **Secondary:** Glass bg, Champagne border on hover.
    - [ ] **Ghost:** Transparent, text gradient on hover.
    - [ ] Include `ref` forwarding.

---

## Phase 3: Structural Components
**Goal:** Implement the global navigation and footer that frame the page content.

### Files to Create/Modify:

#### 1. `components/layout/Navbar.tsx`
*   **Features:** Sticky header that transitions visual state on scroll.
*   **Interfaces:** Client Component.
*   **Checklist:**
    - [ ] Track window scroll Y position.
    - [ ] Transition from transparent (at top) to glass/void (scrolled).
    - [ ] Include Logo (Text).
    - [ ] Include Desktop Links.
    - [ ] Include Mobile Hamburger Menu (Sheet/Overlay).

#### 2. `components/layout/Footer.tsx`
*   **Features:** Static footer with grid layout.
*   **Interfaces:** Server Component.
*   **Checklist:**
    - [ ] 4-column grid layout.
    - [ ] Newsletter signup input (visual only).
    - [ ] Social links and copyright.
    - [ ] Use `Instrument Serif` for headings.

---

## Phase 4: Hero & Visuals
**Goal:** Create the high-impact "Above the Fold" experience.

### Files to Create/Modify:

#### 1. `components/sections/Hero.tsx`
*   **Features:** The main landing visual.
*   **Interfaces:** Client Component (for animations).
*   **Checklist:**
    - [ ] Full viewport height (`min-h-screen`).
    - [ ] Background: Deep void + `AuroraBlob`.
    - [ ] Typography: `Instrument Serif` "BEYOND FIRST CLASS".
    - [ ] Animation: Staggered reveal of text lines (Framer Motion).
    - [ ] CTA Buttons: "Design My Trip" (Primary) + "Explore" (Secondary).

---

## Phase 5: Content Sections
**Goal:** Build the primary informational sections displaying destinations, experiences, and membership.

### Files to Create/Modify:

#### 1. `data/destinations.ts` & `data/types.ts`
*   **Features:** Static mock data and TypeScript definitions.
*   **Interfaces:** `Destination`, `Experience`, `Tier` interfaces.
*   **Checklist:**
    - [ ] Define interfaces.
    - [ ] Populate with ~6 high-quality mock destinations (Maldives, Alps, etc.).

#### 2. `components/sections/Destinations.tsx`
*   **Features:** Grid of destination cards.
*   **Interfaces:** Server Component (fetches data).
*   **Checklist:**
    - [ ] Map over data.
    - [ ] Render `GlassPanel` for each destination.
    - [ ] Implement "Zero Gravity" 3D tilt effect on hover.
    - [ ] Image background with overlay text.

#### 3. `components/sections/Experiences.tsx`
*   **Features:** Horizontal scroll or grid of signature experiences.
*   **Interfaces:** Server Component.
*   **Checklist:**
    - [ ] Layout: Horizontal scroll snap or simple grid.
    - [ ] Content: Title, Description, Icon.
    - [ ] Style: Minimalist glass cards.

#### 4. `components/sections/Membership.tsx`
*   **Features:** Comparison of the three tiers.
*   **Interfaces:** Server Component.
*   **Checklist:**
    - [ ] 3-column layout.
    - [ ] Silver, Black, Obsidian cards.
    - [ ] Apply `AnimatedBorder` to the "Obsidian" (Featured) card.
    - [ ] List features with checkmarks.

---

## Phase 6: Interactive & Complex Sections
**Goal:** Implement the form and social proof sections.

### Files to Create/Modify:

#### 1. `components/sections/Testimonials.tsx`
*   **Features:** Highlighted quotes from UHNW clients.
*   **Interfaces:** Server Component.
*   **Checklist:**
    - [ ] Large typography focus (`Instrument Serif` for quotes).
    - [ ] Simple fade or slide carousel.

#### 2. `components/sections/ConciergeForm.tsx`
*   **Features:** The primary conversion point.
*   **Interfaces:** Client Component.
*   **Checklist:**
    - [ ] **Inputs:** Name, Email, Travel Dates.
    - [ ] **Interest Chips:** Selectable toggles (e.g., "Yachting", "Skiing").
    - [ ] **Validation:** Simple required field checks.
    - [ ] **Submit Action:** Show a success state/toast (visual only).

#### 3. `components/ui/Input.tsx` & `components/ui/Select.tsx`
*   **Features:** Styled form elements matching the glass aesthetic.
*   **Interfaces:** Standard React Input props.
*   **Checklist:**
    - [ ] Remove default browser styles.
    - [ ] Add glass background and bottom border.
    - [ ] Add focus glow effect.

---

## Phase 7: Page Assembly & Polish
**Goal:** Bring everything together into the final page, ensure responsiveness, and optimize.

### Files to Create/Modify:

#### 1. `app/page.tsx`
*   **Features:** The main entry point composing all sections.
*   **Interfaces:** Server Component.
*   **Checklist:**
    - [ ] Import and stack all section components.
    - [ ] Ensure proper spacing/padding between sections (`py-24` etc.).

#### 2. `app/error.tsx` & `app/not-found.tsx`
*   **Features:** Error handling UI.
*   **Interfaces:** Client Component.
*   **Checklist:**
    - [ ] Simple error message in "Void" style.
    - [ ] "Return Home" button.

#### 3. `SEO & Accessibility Audit` (No specific file, general task)
*   **Checklist:**
    - [ ] Check color contrast on glass elements.
    - [ ] Verify `alt` tags on all images.
    - [ ] Ensure keyboard tab order is logical.
    - [ ] Run Lighthouse check.
