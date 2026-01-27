# Aurora Luxe Travel — Master Product Requirements Document

**Version:** 1.0 Master  
**Date:** January 2026  
**Status:** Production-Ready Specification  
**Design Language:** Celestial Noir

---

## Executive Summary

This master PRD synthesizes the best elements from five iterative requirement documents to deliver a comprehensive, production-grade specification for Aurora Luxe Travel—an ultra-premium travel concierge website that transcends conventional luxury web design.

**Core Differentiator:** We reject generic "dark mode + glassmorphism" templates in favor of "Celestial Noir"—a design language that evokes infinite cosmic depth, surgical precision, and effortless exclusivity.

---

## 1. Project Vision & Strategic Direction

### 1.1 Brand Positioning
- **Target Audience:** Ultra-high-net-worth individuals (UHNWI) seeking transformative travel experiences
- **Core Promise:** "Beyond First Class" — where personal concierges orchestrate impossible itineraries
- **Emotional Hook:** Aspiration, exclusivity, trust, and the allure of the undiscovered

### 1.2 Design Philosophy: "Celestial Noir"

**Conceptual Foundation:**
- The aurora borealis as living metaphor—rare, ephemeral, transformative
- Deep space aesthetics meet terrestrial luxury
- Weightless elegance with surgical precision

**Visual Pillars:**
1. **The Void Canvas:** Near-black (#050506) with cosmic depth, not flat darkness
2. **Aurora Gradient:** Cyan→Purple→Magenta animated blobs that breathe
3. **Glass Architecture:** Selective frosted panels with luminous borders
4. **Champagne Platinum:** Cool gold (#C9B896) for premium moments
5. **Typography:** Instrument Serif (headlines) + Geist (body) for editorial luxury meets Swiss precision

---

## 2. Technical Architecture

### 2.1 Technology Stack
```
Framework:     Next.js 14+ (App Router)
Language:      TypeScript (strict mode)
Styling:       Tailwind CSS 3.4+
Animation:     Framer Motion 11+
Images:        next/image + Unsplash
Fonts:         Instrument Serif + Geist (or Inter fallback)
Deployment:    Vercel-optimized
```

### 2.2 Performance Targets
| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Preload hero image, optimize fonts |
| FID | < 100ms | Minimize JS bundle, defer non-critical |
| CLS | < 0.1 | Reserve image space, font-display: swap |
| Bundle | < 200KB | Tree-shake Framer Motion, no heavy libs |

### 2.3 Browser Support
- **Modern Browsers:** Chrome 111+, Safari 16.4+, Firefox 128+
- **Fallback Strategy:** Progressive enhancement for older browsers
- **Mobile:** iOS Safari 16+, Chrome Android 111+

---

## 3. Design System Specification

### 3.1 Color Palette

```typescript
const colors = {
  // Void Spectrum (Backgrounds)
  void: {
    DEFAULT: '#050506',      // True void
    shallow: '#0A0A0C',      // Primary background
    surface: '#0F0F12',      // Elevated surfaces
    elevated: '#16161A',     // Cards, modals
  },
  
  // Text Hierarchy
  text: {
    primary: '#F8FAFC',      // 98% white (not pure)
    secondary: '#94A3B8',    // Muted but readable
    tertiary: '#64748B',     // Subtle labels
  },
  
  // Aurora Spectrum
  aurora: {
    cyan: '#22D3EE',
    teal: '#2DD4BF',
    purple: '#A855F7',
    magenta: '#EC4899',
  },
  
  // Champagne Platinum
  champagne: {
    DEFAULT: '#C9B896',
    dark: '#A89670',
  },
}
```

### 3.2 Typography System

**Font Stack:**
- **Headings:** Instrument Serif (editorial luxury)
- **Body:** Geist (Swiss precision) or Inter (fallback)
- **Mono:** Geist Mono (for prices, dates)

**Type Scale:**
```
display-2xl:  72px / 1.0 / -0.03em  (Hero headline)
display-xl:   60px / 1.05 / -0.025em (Section headlines)
heading-xl:   36px / 1.2 / -0.015em  (Card titles)
body-lg:      18px / 1.6 / 0         (Lead paragraphs)
body:         16px / 1.6 / 0         (Body text)
caption:      12px / 1.4 / 0.02em    (Labels)
```

### 3.3 Spacing System (8px base)
```
2px, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px, 128px
Section padding: 120px (desktop), 64px (mobile)
```

### 3.4 Animation Tokens
```typescript
duration: {
  fast: '200ms',
  normal: '300ms',
  slow: '500ms',
}

easing: {
  out: 'cubic-bezier(0.22, 1, 0.36, 1)',      // Landing feel
  reveal: 'cubic-bezier(0.16, 1, 0.3, 1)',    // Section reveals
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Micro-interactions
}
```

---

## 4. Component Architecture

### 4.1 Component Hierarchy
```
Layout Layer
├── RootLayout (fonts, metadata, noise overlay)
├── Navbar (sticky glass)
├── Hero
├── Destinations
├── Experiences
├── Membership
├── Testimonials
├── ConciergeForm
└── Footer

UI Primitives
├── Button (primary, secondary, ghost, glow)
├── Card (destination, experience, tier, testimonial)
├── Input / Select / Textarea
├── ChipGroup (interests)
├── GlassPanel
├── AnimatedBorder (conic gradient)
├── GlowOrb (aurora blob)
└── Toast (form feedback)

Animation Wrappers
├── FadeIn (scroll-triggered)
├── StaggerChildren
└── Parallax
```

### 4.2 Button Component Specification

**Variants:**
- `primary`: Gradient fill (cyan→purple→magenta), white text, glow on hover
- `secondary`: Glass background, white text, subtle glow
- `ghost`: Transparent, white text, bg on hover
- `glow`: Void background, cyan border, cyan text, glow effect

**States:**
- Default: Base styling
- Hover: Scale 1.02, brightness increase, glow intensifies
- Active: Scale 0.98
- Focus: Visible cyan ring
- Disabled: Opacity 0.5, no interactions

---

## 5. Page Structure & Sections

### 5.1 Navbar
**Behavior:**
- Initially transparent, blends with hero
- On scroll (>50px): Glass effect, backdrop-blur, border-bottom
- Mobile: Hamburger → full-screen overlay with staggered animation

**Structure:**
```
[LOGO: "AURORA LUXE"]  [Destinations] [Experiences] [Membership] [Testimonials]  [REQUEST ITINERARY]
```

**Active Section:** Intersection Observer highlights current section with animated underline

### 5.2 Hero Section
**Layout:**
- Full viewport height (min 600px)
- Background: Luxury travel image with gradient overlays
- Aurora blobs: 2-3 animated gradient orbs (absolute positioned)
- Content: Left-aligned on desktop, centered on mobile

**Animation Sequence:**
1. Background image fades in (0.5s)
2. Aurora orbs fade in and begin movement (0.3s delay)
3. Headline letters stagger in (0.6s delay, 50ms stagger)
4. Subtext fades in (1s delay)
5. CTAs fade in and slide up (1.2s delay)
6. Scroll indicator fades in (2s delay)

**Content:**
```
OVERLINE: "Curated Excellence Since 2010"
HEADLINE: "Beyond First Class."
SUBTEXT: "Curated journeys for those who seek the extraordinary..."
CTA PRIMARY: "Design My Trip →"
CTA SECONDARY: "Explore Destinations"
```

### 5.3 Destinations Grid

**Data Structure:**
```typescript
interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  tagline: string;
  priceFrom: number;
  currency: string;
  imageUrl: string;
  quickFacts: {
    climate: string;
    bestTime: string;
    luxury: string;
  };
  featured: boolean;
}
```

**Layout:** 3×2 grid (desktop), 2×3 (tablet), 1×6 (mobile)

**Card Interaction:**
- Hover: Lift (translateY: -8px), shimmer sweep, quick facts slide up, border glow, image scale 1.05
- Mobile: Tap to expand quick facts

**Mock Data:** Maldives, Tokyo, Swiss Alps, Dubai, Serengeti, Amalfi Coast

### 5.4 Signature Experiences

**Data Structure:**
```typescript
interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  duration: string;
  included: string[];
  startingPrice: number;
}
```

**Layout:** Horizontal scroll (mobile), staggered grid (desktop)

**Mock Data:** Private Jet Odyssey, Superyacht Sojourns, Michelin Odyssey, Celestial Escapes, Alpine Wellness

### 5.5 Membership Tiers

**Data Structure:**
```typescript
interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  annualFee: number | null; // null = "By invitation"
  perks: string[];
  highlighted: boolean;
  accentColor: 'silver' | 'aurora' | 'champagne';
}
```

**Tiers:**
1. **Silver Circle** (€2,500/year): Entry tier, dedicated consultant, priority booking
2. **Black Card** (€12,000/year): Elevated tier, guaranteed upgrades, €5k travel credit, highlighted
3. **Obsidian Society** (By invitation): Ultimate tier, private jet access, family office integration

**Visual Treatment:**
- Silver: Glass card, silver gradient border
- Black: Elevated glass, animated conic gradient border (featured)
- Obsidian: Solid black, champagne gold accents, "By Invitation" badge

### 5.6 Testimonials

**Data Structure:**
```typescript
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  rating: number;
}
```

**Layout:** 
- Desktop: 2×2 grid or 3-column
- Mobile: Carousel with indicators

**Mock Data:** 3-4 testimonials from Black Card and Obsidian members

### 5.7 Concierge Form

**Fields:**
- Name (text, required)
- Email (email, required)
- Dates (text, optional - free-form for flexibility)
- Travelers (select, required: 1, 2, 3-4, 5-8, 9+)
- Interests (chip-group, min 1 required)
- Budget (select, required: €5k-15k, €15k-50k, €50k-150k, €150k+)
- Notes (textarea, optional, max 500 chars)

**Interest Options:** Beach & Ocean, Mountains & Adventure, Cultural Immersion, Culinary Journeys, Wellness & Spa, Safari & Wildlife, Yachting, Private Aviation, Art & Architecture, Wine & Spirits

**Behavior:**
- Real-time validation with subtle shake on error
- Submit button shows loading spinner
- On success: Form slides up, confirmation slides in, toast notification

### 5.8 Footer

**Structure:**
- Left: Logo + tagline
- Center: Quick links (Destinations, Experiences, Membership, Contact)
- Right: Social icons, Image credits
- Bottom: Copyright, Privacy Policy, Terms

---

## 6. Interaction & Animation Specifications

### 6.1 Framer Motion Variants

```typescript
// Section reveal
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Stagger children
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// Card hover (3D tilt)
const cardHoverVariants = {
  rest: { scale: 1, rotateX: 0, rotateY: 0, z: 0 },
  hover: { scale: 1.02, z: 20, transition: { duration: 0.3 } },
};

// Aurora blob float
const floatVariants = {
  animate: {
    x: [0, 30, -20, 0],
    y: [0, -40, 20, 0],
    scale: [1, 1.1, 0.95, 1],
    transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
  },
};
```

### 6.2 CSS Animations

```css
/* Conic gradient border rotation */
@keyframes rotate-gradient {
  to { --angle: 360deg; }
}

/* Shimmer effect */
@keyframes shimmer {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

/* Aurora gradient animation */
@keyframes aurora {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

---

## 7. Accessibility Requirements (WCAG AAA)

### 7.1 Compliance Checklist
- ✅ Color Contrast: 7:1 for body text, 4.5:1 for large text
- ✅ Focus States: Visible 2px cyan ring on all interactive elements
- ✅ Keyboard Nav: Full tab navigation, Enter/Space activation, Escape to close
- ✅ Reduced Motion: `prefers-reduced-motion: reduce` disables all animations
- ✅ Screen Readers: Semantic HTML, ARIA labels, live regions for dynamic content
- ✅ Skip Links: "Skip to main content" at top of page

### 7.2 Semantic Structure
```html
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
<main role="main" id="main-content">
  <section aria-labelledby="hero-heading">
  <section aria-labelledby="destinations-heading">
<footer role="contentinfo">
```

### 7.3 Form Accessibility
- Labels associated via `htmlFor`
- Error messages linked via `aria-describedby`
- Required fields marked with `aria-required="true"`
- Validation errors announced via `aria-live="polite"`

---

## 8. File Structure

```
aurora-luxe-travel/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Main page
│   ├── globals.css             # Global styles
│   └── destinations/[slug]/page.tsx  # Optional detail pages
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Destinations.tsx
│   │   ├── Experiences.tsx
│   │   ├── Membership.tsx
│   │   ├── Testimonials.tsx
│   │   └── ConciergeForm.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   ├── ChipGroup.tsx
│   │   ├── GlassPanel.tsx
│   │   ├── AnimatedBorder.tsx
│   │   ├── GlowOrb.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Toast.tsx
│   └── animations/
│       ├── FadeIn.tsx
│       ├── StaggerChildren.tsx
│       └── Parallax.tsx
├── data/
│   ├── destinations.ts
│   ├── experiences.ts
│   ├── membership.ts
│   └── testimonials.ts
├── lib/
│   ├── utils.ts
│   └── hooks/
│       ├── useScrollSpy.ts
│       └── useReducedMotion.ts
├── public/
│   ├── fonts/
│   ├── favicon.svg
│   └── og-image.jpg
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 9. Quality Assurance Checklist

### Pre-Delivery Verification
- [ ] Visual fidelity matches specification
- [ ] Responsive: 375px (mobile), 768px (tablet), 1440px (desktop), 2560px (4K)
- [ ] Performance: Lighthouse score ≥90 for all metrics
- [ ] Accessibility: axe DevTools shows 0 violations
- [ ] Keyboard: Full navigation without mouse
- [ ] Reduced Motion: Animations disabled when preference set
- [ ] Cross-Browser: Chrome, Safari, Firefox, Edge
- [ ] Forms: Validation works, toast appears on submit
- [ ] Scroll Spy: Navbar highlights active section
- [ ] Images: All load, have alt text, are optimized
- [ ] Typography: Fonts load, hierarchy is clear
- [ ] Animations: Smooth 60fps, no jank
- [ ] SEO: Title, description, OG tags present
- [ ] Build: `npm run build` succeeds with no errors

---

## 10. Implementation Priorities

### Phase 1: Foundation (2-3 hours)
- Project setup (Next.js + TypeScript + Tailwind)
- Design system configuration
- Base UI components (Button, Input, GlassPanel)

### Phase 2: Layout & Navigation (1-2 hours)
- Navbar with scroll behavior
- Footer
- Mobile menu

### Phase 3: Hero & Sections (3-4 hours)
- Hero with aurora effect
- Destinations grid
- Experiences list
- Membership tiers
- Testimonials

### Phase 4: Form & Interactions (2-3 hours)
- Concierge form with validation
- Toast notifications
- All hover/focus states

### Phase 5: Polish & Optimization (2-3 hours)
- Animation timing refinement
- Responsive testing
- Accessibility audit
- Performance optimization
- SEO metadata

---

## 11. Success Metrics

### User Experience
- **Time to First Interaction:** < 3 seconds
- **Form Completion Rate:** > 40% (industry benchmark: 20-30%)
- **Mobile Bounce Rate:** < 50%

### Technical Performance
- **Lighthouse Performance:** ≥ 90
- **Lighthouse Accessibility:** 100
- **Lighthouse Best Practices:** ≥ 95
- **Lighthouse SEO:** 100

### Business Goals
- **Lead Generation:** 10+ qualified inquiries per month
- **Tier Interest:** 60% Silver, 30% Black, 10% Obsidian
- **Brand Perception:** "Most memorable luxury travel site"

---

## 12. Anti-Patterns to Avoid

### Design Anti-Patterns
- ❌ Generic purple gradients on white
- ❌ Equal-height card grids without personality
- ❌ Predictable centered hero text
- ❌ Safe Inter/Roboto pairing
- ❌ Boring testimonial carousels with dots

### Technical Anti-Patterns
- ❌ Heavy animation libraries (GSAP, anime.js)
- ❌ CSS-in-JS runtime (styled-components, emotion)
- ❌ Moment.js or similar heavy utilities
- ❌ jQuery or legacy libraries
- ❌ Unoptimized images without blur placeholders

---

## 13. Future Enhancements (Post-MVP)

### Phase 2 Features
- Destination detail pages with immersive galleries
- Blog/Journal section for travel stories
- Member portal with booking history
- Live chat with concierge team
- Multi-language support (English, French, German, Arabic, Mandarin)

### Phase 3 Features
- CMS integration (Sanity or Contentful)
- Real-time availability calendar
- Payment processing integration
- Mobile app (React Native)
- AI-powered itinerary recommendations

---

## Conclusion

This master PRD synthesizes the best elements from five iterative requirement documents to deliver a comprehensive, production-grade specification. The "Celestial Noir" design language ensures Aurora Luxe Travel stands apart from generic luxury templates, while the technical architecture guarantees performance, accessibility, and scalability.

**Key Differentiators:**
1. Distinctive "Celestial Noir" aesthetic (not generic dark mode)
2. Surgical attention to typography and spacing
3. Performance-first architecture (Core Web Vitals optimized)
4. WCAG AAA accessibility compliance
5. Scalable component architecture for future growth

**Next Steps:**
1. Review and approve this master specification
2. Begin Phase 1 implementation (Foundation)
3. Conduct weekly design reviews
4. Launch MVP within 2-3 weeks
5. Iterate based on user feedback

---

**Document Version:** 1.0 Master  
**Last Updated:** January 27, 2026  
**Status:** Ready for Implementation
