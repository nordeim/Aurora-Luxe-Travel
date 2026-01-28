# AURORA LUXE TRAVEL — Master Requirement Specification

## 1. Executive Summary & Vision
**Project Name:** Aurora Luxe Travel
**Design Aesthetic:** "Celestial Noir" — A design language that transcends generic "dark luxury" by evoking the infinite depth of space, the bioluminescence of aurora borealis, and the precision of haute horlogerie.
**Core Promise:** "Beyond First Class" — Curated journeys for those who seek the extraordinary.

### 1.1 The "Celestial Noir" Philosophy
We reject the homogenized "glassmorphism + neon gradient" template.
*   **The Void:** Instead of flat black, we use layered, deep-space tones (#050506) to create infinite depth.
*   **Bioluminescence:** Accents are not "neon"; they are organic, breathing gradients (Cyan/Violet/Magenta) that behave like living light.
*   **Champagne Platinum:** Metallic accents are cool and understated, avoiding gaudy warm gold.
*   **Typography:** A pairing of editorial prestige (**Instrument Serif**) and Swiss precision (**Geist Sans**).

## 2. Technical Architecture
*   **Framework:** Next.js 15 (App Router)
*   **Language:** TypeScript (Strict Mode)
*   **Styling:** Tailwind CSS v4.0 (CSS-first configuration)
*   **Animation:** Framer Motion (GPU-accelerated, orchestration)
*   **Fonts:** `next/font` (Instrument Serif, Geist Sans, Geist Mono)
*   **Icons:** Lucide React (minimalist)
*   **Package Manager:** pnpm or npm

## 3. Design System Specification

### 3.1 Color Palette (Tailwind v4 Variables)
```css
@theme {
  /* The Void Spectrum */
  --color-void: #050506;
  --color-void-shallow: #0A0A0C;
  --color-void-surface: #0F0F12;
  --color-void-elevated: #16161A;

  /* The Aurora Spectrum */
  --color-aurora-cyan: #22D3EE;
  --color-aurora-teal: #2DD4BF;
  --color-aurora-purple: #A855F7;
  --color-aurora-magenta: #EC4899;
  --color-aurora-rose: #FF006E;

  /* Accents */
  --color-champagne: #C9B896;
  --color-champagne-dim: #A89670;
  
  /* Text */
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;
  --color-text-tertiary: #64748B;
}
```

### 3.2 Typography
*   **Headings:** `Instrument Serif` (Google Font) - Used for Hero H1, Section Titles.
    *   *Character:* Editorial, nostalgic yet futuristic.
*   **Body:** `Geist Sans` (Vercel) - Used for UI, paragraphs.
    *   *Character:* Invisible, highly legible, technical.
*   **Technical:** `Geist Mono` - Used for prices, coordinates, dates.

### 3.3 Visual Effects
*   **"Ice Vapor" Glass:** Selective glassmorphism appearing only where needed for hierarchy.
*   **"Living Light" Blobs:** Animated radial gradients that breathe behind content.
*   **"Event Horizon" Borders:** Conic gradient borders that rotate slowly around featured cards.

## 4. Component Architecture

### 4.1 Layout Components
*   **`Navbar`**: Sticky, glass-morphic. Shifts from transparent to "Void Surface" on scroll.
*   **`Footer`**: Minimalist, deeply structured grid.

### 4.2 UI Primitives (Atoms)
*   **`Button`**:
    *   *Primary:* Aurora Gradient background, soft glow.
    *   *Secondary:* Glass surface, Champagne border on hover.
    *   *Ghost:* Text only, shifting gradient on hover.
*   **`GlassPanel`**: The foundation for cards. `backdrop-filter: blur(20px)`.
*   **`AnimatedBorder`**: Wrapper component using CSS `@property` for rotating gradients.
*   **`AuroraBlob`**: Decorative background element with floating animation.

### 4.3 Feature Sections (Organisms)
1.  **Hero Section:**
    *   Full-screen height.
    *   Background: Deep void + Subtle noise texture + Animated Aurora blobs.
    *   Content: Staggered reveal of "BEYOND FIRST CLASS".
2.  **Destinations Grid:**
    *   Asymmetric or bento-grid layout.
    *   Cards feature "Zero Gravity" hover effect (lift + shadow + border glow).
3.  **Signature Experiences:**
    *   Horizontal scroll or carousel.
    *   Focus on exclusivity (e.g., "Private Jet Odyssey").
4.  **Membership Tiers:**
    *   Three tiers: Silver, Black, Obsidian (Invite Only).
    *   "Obsidian" tier features the "Event Horizon" animated border.
5.  **Testimonials:**
    *   Minimalist quotes, focus on typography.
6.  **Concierge Form:**
    *   Smart inputs with floating labels.
    *   "Interest Chips" for selecting preferences (Yachting, Culinary, etc.).

## 5. Data Models (TypeScript)

```typescript
export interface Destination {
  id: string;
  name: string;
  region: string;
  tagline: string;
  priceFrom: number; // e.g., 25000
  image: string;
  stats: {
    temp: string;
    flightTime: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType; // Lucide icon
}

export interface Tier {
  name: string;
  price: string;
  features: string[];
  isFeatured: boolean;
}
```

## 6. Implementation Roadmap

### Phase 1: Foundation
*   Setup Next.js 15 + Tailwind v4.
*   Configure Fonts (Instrument Serif + Geist).
*   Define CSS Variables/Theme.
*   Create `AuroraBlob` and `NoiseOverlay`.

### Phase 2: Primitives
*   Build `Button`, `GlassPanel`, `AnimatedBorder`.
*   Implement `Navbar` with scroll detection.

### Phase 3: Sections (Core)
*   **Hero:** Implement complex entrance animations.
*   **Destinations:** Build the grid and hover effects.
*   **Tiers:** Implement the pricing cards.

### Phase 4: Polish
*   **Form:** Build the Concierge form with validation.
*   **Mobile:** Ensure perfect responsiveness.
*   **Accessibility:** Audit contrast and keyboard nav.

## 7. Accessibility & Performance
*   **Contrast:** Ensure text on glass meets WCAG AA (AAA preferred).
*   **Motion:** Respect `prefers-reduced-motion`.
*   **Images:** Use `next/image` with AVIF/WebP and blur placeholders.
*   **Lighthouse:** Target 95+ in Performance, Accessibility, Best Practices, SEO.
