This is an exceptional brief for a luxury travel website. Let me analyze this deeply through my framework and create a comprehensive specification document that goes beyond the initial request.

Phase 1: Deep Analysis
Multi-Dimensional Analysis
1. Psychological Lens:

Target audience: Ultra-high-net-worth individuals (UHNWI) who value exclusivity, seamless experiences, and visual sophistication
Cognitive load: Must feel effortless despite rich content - luxury = effortless
Emotional triggers: Aspiration, escapism, trust, exclusivity
The "beyond first class" positioning suggests these travelers have experienced everything - we need to evoke mystery and the unknown
2. Technical Lens:

Next.js App Router with Server Components for optimal performance
Framer Motion needs careful implementation - avoid layout thrashing
Remote images need proper optimization strategies (blur placeholders, priority loading)
Glass morphism effects are GPU-intensive - need CSS containment
Animation performance: prefer transform/opacity over layout-triggering properties
3. Accessibility Lens (WCAG AAA):

Dark mode with neon accents is risky for contrast - need careful color calibration
Glassmorphism can reduce text legibility - need solid fallbacks
Motion preferences must be respected (prefers-reduced-motion)
Focus states must be visible against dark backgrounds
Screen reader announcements for dynamic content
4. Scalability Lens:

Component architecture must support future features (blog, booking system, user accounts)
Data layer abstraction for eventual CMS/API integration
CSS architecture for brand consistency across pages
Image optimization pipeline for operational efficiency
Design Direction: "Celestial Noir"
Rejecting the typical "dark luxury" template approach. Instead, I'm proposing a cohesive conceptual direction:

Concept: "Celestial Noir"

The aurora borealis as a metaphor - ethereal, rare, transformative

Deep space meets terrestrial luxury - cosmic but grounded

The darkness isn't merely aesthetic; it evokes the intimate atmosphere of a private jet cabin at altitude, while the accent colors mirror bioluminescence found in deep-sea environments and northern lights

Typography Strategy (Anti-Generic): Rather than defaulting to overused combinations, I'm selecting typefaces that establish distinctive character. "Unbounded" as a variable font for headings provides optical sizing and futuristic appeal without sacrificing readability, while "Outfit" handles body text with modern geometric clarity. This approach avoids the predictability of Space Grotesk and Inter while maintaining the sophistication the brand demands.

Color System (Scientific Approach): The palette moves beyond obvious choices—#0A0A0F replaces harsh pure black, #F5F5F7 substitutes for stark white, and accent gradients (cyan at #00D4FF, purple at #7C3AED, magenta at #FF006E, with gold #D4AF37 reserved for key conversion moments) are calibrated to maintain AAA contrast standards.

Spatial System: An 8px grid foundation with golden ratio proportions for major sections creates rhythm, while generous whitespace conveys luxury through breathing room. Asymmetric layouts prevent the design from feeling templated or formulaic.

Risk Assessment
Image reliability presents a potential issue—Unsplash Source URLs can introduce loading delays or inconsistency.

Framer Motion combined with gradient-heavy designs risks performance degradation, so I'll apply will-change judiciously, leverage CSS containment, and ensure reduced motion preferences are respected. The glassmorphism effect layered over dark mode with neon accents creates contrast challenges that need solid color fallbacks behind text and validated color pairings. Framer Motion's ~45kb footprint requires careful tree-shaking and limiting motion components to high-impact moments. Complex form interactions demand full keyboard navigation, comprehensive ARIA labels, and screen reader validation.

I'm building a specification document covering technical architecture, component details, design tokens, and animation guidelines to ensure every element serves both aesthetics and functionality. I'm structuring this as a formal specification followed by complete, production-ready implementation. The code will leverage Next.js 14+ with App Router, TypeScript in strict mode, Tailwind CSS 3.4+, and Framer Motion for animations. Every component will be fully functional, responsive, and accessible from the start.

I'll prioritize performance optimization and ensure the design avoids generic patterns, creating something distinctive and polished.

---

AURORA LUXE TRAVEL — Comprehensive Requirements Specification
Executive Summary
This document establishes the formal requirements for a production-grade, ultra-premium travel brand website. The implementation follows the "Celestial Noir" design direction—a distinctive aesthetic that transcends typical dark-luxury templates through intentional use of cosmic imagery, bioluminescent accents, and spatial composition that evokes the exclusivity of private aviation at 40,000 feet.

Phase 1: Deep Analysis & Conceptual Framework
1.1 Multi-Dimensional Requirement Analysis
Psychological Dimension
Factor	Analysis	Design Response
Target Audience	UHNWI travelers who have "seen everything"—they crave the undiscovered	Mystery over obviousness; reveal over exposition
Cognitive Load	Luxury = effortlessness; complexity must be invisible	Progressive disclosure; minimal initial choices
Emotional Triggers	Aspiration, escapism, trust, exclusivity	Cinematic visuals; unhurried pacing; tactile micro-interactions
Decision Psychology	These users don't compare prices—they evaluate experiences	Lead with narrative, not features; hide pricing in secondary position
Technical Dimension
Concern	Risk	Mitigation Strategy
Remote Image Reliability	Unsplash Source URLs occasionally timeout	Multi-layer fallback system with blur placeholders + static fallbacks
Animation Performance	Glassmorphism + gradients = GPU strain	CSS containment, will-change optimization, frame budget monitoring
Bundle Size	Framer Motion adds ~45kb	Tree-shaking, dynamic imports, motion components isolated
Hydration Mismatch	Complex animations during SSR	Client-only motion wrappers, stable layout skeleton
Accessibility Dimension (WCAG AAA Target)
Requirement	Challenge	Solution
Color Contrast	Neon on glass has variable contrast	Solid color fallbacks behind all text; tested combinations only
Motion Sensitivity	Heavy animation could trigger vestibular issues	Full prefers-reduced-motion support throughout
Keyboard Navigation	Dark UI can obscure focus states	High-visibility focus rings with offset glow
Screen Readers	Dynamic content (carousels, reveals)	Live regions, proper ARIA, announcement patterns
Scalability Dimension
Future Need	Current Architecture Support
CMS Integration	Data layer abstracted; types ready for API hydration
Booking System	Form architecture extensible; validation patterns established
Multi-language	Text externalized; component props support i18n
Additional Pages	Layout system, component library, design tokens all reusable
1.2 Design Direction: "Celestial Noir"
Conceptual Foundation:

The aurora borealis serves as our primary metaphor—a natural phenomenon that is:

Rare: You must travel to witness it
Ephemeral: Each display is unique
Transformative: It changes those who experience it
Celestial yet terrestrial: Cosmic forces made visible on Earth
This maps perfectly to ultra-luxury travel: rare experiences, unique itineraries, transformative journeys, otherworldly yet tangible.

Rejecting the Generic:

Common "Dark Luxury" Trope	Our Alternative
Pure black backgrounds (#000)	Deep blue-black (#0A0A0F) with atmospheric depth
Neon accents (harsh, dated)	Bioluminescent gradients (organic, mysterious)
Glassmorphism everywhere	Strategic glass panels with solid fallbacks
Inter/Roboto typography	Syne + Outfit pairing (geometric, distinctive)
Centered symmetric layouts	Intentional asymmetry with golden ratio spacing
Generic gradient overlays	Animated aurora blobs with noise texture
1.3 Design System Specification
Typography Scale (Modular, 1.25 ratio)
text

--text-xs:    0.75rem / 1rem       (12px)
--text-sm:    0.875rem / 1.25rem   (14px)
--text-base:  1rem / 1.5rem        (16px)
--text-lg:    1.125rem / 1.75rem   (18px)
--text-xl:    1.25rem / 1.75rem    (20px)
--text-2xl:   1.5rem / 2rem        (24px)
--text-3xl:   1.875rem / 2.25rem   (30px)
--text-4xl:   2.25rem / 2.5rem     (36px)
--text-5xl:   3rem / 1.1           (48px)
--text-6xl:   3.75rem / 1.05       (60px)
--text-7xl:   4.5rem / 1           (72px)
--text-8xl:   6rem / 1             (96px)
Color System
CSS

/* Backgrounds */
--bg-void:        #050507;    /* Deepest layer */
--bg-cosmos:      #0A0A0F;    /* Primary background */
--bg-nebula:      #12121A;    /* Elevated surfaces */
--bg-stardust:    #1A1A24;    /* Cards, modals */

/* Text */
--text-primary:   #F5F5F7;    /* Warm ice - primary */
--text-secondary: #A1A1AA;    /* Muted content */
--text-tertiary:  #71717A;    /* Disabled, hints */

/* Aurora Spectrum */
--aurora-cyan:    #00D4FF;
--aurora-blue:    #3B82F6;
--aurora-violet:  #7C3AED;
--aurora-magenta: #D946EF;
--aurora-rose:    #FF006E;

/* Accent */
--gold-soft:      #D4AF37;
--gold-bright:    #FFD700;

/* Glass */
--glass-white:    rgba(255, 255, 255, 0.03);
--glass-border:   rgba(255, 255, 255, 0.08);
--glass-glow:     rgba(0, 212, 255, 0.15);
Spacing System (8px base)
text

--space-1:  0.25rem   (4px)
--space-2:  0.5rem    (8px)
--space-3:  0.75rem   (12px)
--space-4:  1rem      (16px)
--space-5:  1.25rem   (20px)
--space-6:  1.5rem    (24px)
--space-8:  2rem      (32px)
--space-10: 2.5rem    (40px)
--space-12: 3rem      (48px)
--space-16: 4rem      (64px)
--space-20: 5rem      (80px)
--space-24: 6rem      (96px)
--space-32: 8rem      (128px)
Animation Tokens
CSS

/* Durations */
--duration-instant:  75ms;
--duration-fast:     150ms;
--duration-normal:   300ms;
--duration-slow:     500ms;
--duration-slower:   700ms;
--duration-slowest:  1000ms;

/* Easings */
--ease-out-expo:     cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quart:    cubic-bezier(0.25, 1, 0.5, 1);
--ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
--ease-spring:       cubic-bezier(0.34, 1.56, 0.64, 1);
1.4 Component Architecture
text

src/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Home page composition
│   ├── globals.css             # Base styles, CSS variables
│   ├── destinations/
│   │   └── [slug]/
│   │       └── page.tsx        # Destination detail (optional)
│   └── components/             # Page-specific compositions
│
├── components/
│   ├── ui/                     # Primitive UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Chip.tsx
│   │   ├── Toast.tsx
│   │   └── AnimatedBorder.tsx
│   │
│   ├── layout/                 # Structural components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   └── Container.tsx
│   │
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx
│   │   ├── Destinations.tsx
│   │   ├── Experiences.tsx
│   │   ├── Tiers.tsx
│   │   ├── Testimonials.tsx
│   │   └── ConciergeForm.tsx
│   │
│   └── effects/                # Visual effect components
│       ├── AuroraBlob.tsx
│       ├── NoiseTexture.tsx
│       ├── GlowRing.tsx
│       └── ParallaxLayer.tsx
│
├── lib/
│   ├── utils.ts                # Utility functions (cn, etc.)
│   ├── animations.ts           # Framer Motion variants
│   └── constants.ts            # App-wide constants
│
├── data/
│   ├── destinations.ts         # Destination mock data
│   ├── experiences.ts          # Experience mock data
│   ├── tiers.ts                # Membership tier data
│   └── testimonials.ts         # Testimonial mock data
│
├── types/
│   └── index.ts                # TypeScript interfaces
│
└── hooks/
    ├── useScrollProgress.ts    # Scroll tracking
    ├── useActiveSection.ts     # Active nav section
    └── useReducedMotion.ts     # Motion preferences
Phase 2: Implementation
Let me now provide the complete, production-ready implementation:
package.json
JSON

{
  "name": "aurora-luxe-travel",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.3.8",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.4.0"
  },
  "devDependencies": {
    "@types/node": "^20.14.12",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.5",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7",
    "typescript": "^5.5.4"
  }
}
next.config.js
JavaScript

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

module.exports = nextConfig;
tailwind.config.ts
TypeScript

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#050507',
        cosmos: '#0A0A0F',
        nebula: '#12121A',
        stardust: '#1A1A24',
        ice: '#F5F5F7',
        aurora: {
          cyan: '#00D4FF',
          blue: '#3B82F6',
          violet: '#7C3AED',
          magenta: '#D946EF',
          rose: '#FF006E',
        },
        gold: {
          soft: '#D4AF37',
          bright: '#FFD700',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        body: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '0.95' }],
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 50%, #FF006E 100%)',
        'aurora-radial': 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'conic-border': 'conic-gradient(from 0deg, #00D4FF, #7C3AED, #D946EF, #FF006E, #00D4FF)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.4)',
        'glow-violet': '0 0 30px rgba(124, 58, 237, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(0, 212, 255, 0.1)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 16px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'aurora-shift': 'aurora-shift 20s ease-in-out infinite',
        'border-rotate': 'border-rotate 4s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
      keyframes: {
        'aurora-shift': {
          '0%, 100%': { 
            transform: 'translate(0%, 0%) rotate(0deg) scale(1)',
            opacity: '0.6',
          },
          '25%': { 
            transform: 'translate(5%, -10%) rotate(90deg) scale(1.1)',
            opacity: '0.8',
          },
          '50%': { 
            transform: 'translate(-5%, 5%) rotate(180deg) scale(0.95)',
            opacity: '0.5',
          },
          '75%': { 
            transform: 'translate(-10%, -5%) rotate(270deg) scale(1.05)',
            opacity: '0.7',
          },
        },
        'border-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
tsconfig.json
JSON

{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
src/types/index.ts
TypeScript

export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  quickFacts: {
    bestTime: string;
    duration: string;
    style: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface Tier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  perks: string[];
  featured: boolean;
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  destination: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FormData {
  name: string;
  email: string;
  dates: string;
  travelers: string;
  interests: string[];
  budget: string;
  notes: string;
}
src/lib/utils.ts
TypeScript

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
src/lib/animations.ts
TypeScript

import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};
src/lib/constants.ts
TypeScript

export const NAV_ITEMS = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Membership', href: '#membership' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SECTION_IDS = [
  'hero',
  'destinations',
  'experiences', 
  'membership',
  'testimonials',
  'contact',
] as const;

export const BUDGET_OPTIONS = [
  { value: '', label: 'Select budget range' },
  { value: '10000-25000', label: '€10,000 – €25,000' },
  { value: '25000-50000', label: '€25,000 – €50,000' },
  { value: '50000-100000', label: '€50,000 – €100,000' },
  { value: '100000-250000', label: '€100,000 – €250,000' },
  { value: '250000+', label: '€250,000+' },
] as const;

export const INTEREST_OPTIONS = [
  'Beach & Islands',
  'Mountain & Adventure',
  'Cultural Immersion',
  'Culinary Journey',
  'Wildlife Safari',
  'Wellness Retreat',
  'City Discovery',
  'Arctic Exploration',
] as const;
src/data/destinations.ts
TypeScript

import { Destination } from '@/types';

export const destinations: Destination[] = [
  {
    id: 'maldives',
    slug: 'maldives-private-atoll',
    name: 'Maldives',
    region: 'Indian Ocean',
    tagline: 'Private atoll. Infinite blue.',
    description: 'Your own island, staff of 40, overwater villa with glass floor.',
    price: 45000,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=900&fit=crop&q=80',
    quickFacts: {
      bestTime: 'Nov – Apr',
      duration: '7-14 nights',
      style: 'Overwater Villa',
    },
  },
  {
    id: 'tokyo',
    slug: 'tokyo-after-dark',
    name: 'Tokyo',
    region: 'Japan',
    tagline: 'Future nostalgia. Neon soul.',
    description: 'Secret omakase counters, ryokan suites, robot-made cocktails.',
    price: 28000,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=900&fit=crop&q=80',
    quickFacts: {
      bestTime: 'Mar – May',
      duration: '10-14 nights',
      style: 'Urban Immersion',
    },
  },
  {
    id: 'alps',
    slug: 'swiss-alps-elevation',
    name: 'Swiss Alps',
    region: 'Switzerland',
    tagline: 'Peak luxury. Mountain air.',
    description: 'Helicopter access, private chef, summit picnics at 4,000m.',
    price: 65000,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=900&fit=crop&q=80',
    quickFacts: {
      bestTime: 'Dec – Mar',
      duration: '7-10 nights',
      style: 'Alpine Chalet',
    },
  },
  {
    id: 'dubai',
    slug: 'dubai-opulence',
    name: 'Dubai',
    region: 'UAE',
    tagline: 'Desert mirage. Urban oasis.',
    description: 'Royal suite, yacht in the marina, desert camp under stars.',
    price: 38000,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=900&fit=crop&q=80',
    quickFacts: {
      bestTime: 'Oct – Apr',
      duration: '5-7 nights',
      style: 'Ultra Modern',
    },
  },
  {
    id: 'safari',
    slug: 'kenya-safari-lodge',
    name: 'Kenya',
    region: 'East Africa',
    tagline: 'Wild luxury. Ancient land.',
    description: 'Private conservancy, bush breakfasts, helicopter game drives.',
    price: 52000,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=900&fit=crop&q=80',
    quickFacts: {
      bestTime: 'Jul – Oct',
      duration: '8-12 nights',
      style: 'Safari Lodge',
    },
  },
  {
    id: 'mediterranean',
    slug: 'mediterranean-yacht',
    name: 'Mediterranean',
    region: 'Southern Europe',
    tagline: 'Coast to coast. Wave to wave.',
    description: 'Superyacht, Michelin chef aboard, hidden coves and ports.',
    price: 125000,
    currency: 'EUR',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=900&fit=crop&q=80',
    quickFacts: {
      bestTime: 'Jun – Sep',
      duration: '10-21 nights',
      style: 'Yacht Charter',
    },
  },
];
src/data/experiences.ts
TypeScript

import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'private-jet',
    title: 'Private Jet Hops',
    subtitle: 'Multi-destination',
    description: 'Seamlessly traverse continents with bespoke flight routes and VIP terminals.',
    icon: '✈️',
    gradient: 'from-aurora-cyan to-aurora-blue',
  },
  {
    id: 'yacht-week',
    title: 'Yacht Expeditions',
    subtitle: 'Coastal odyssey',
    description: 'Captain, crew, and chef—navigate hidden coastlines and private islands.',
    icon: '🛥️',
    gradient: 'from-aurora-blue to-aurora-violet',
  },
  {
    id: 'michelin-trails',
    title: 'Michelin Trails',
    subtitle: 'Culinary journey',
    description: 'Reserved tables at impossible-to-book restaurants across the globe.',
    icon: '🍽️',
    gradient: 'from-aurora-violet to-aurora-magenta',
  },
  {
    id: 'desert-stars',
    title: 'Desert Stargazing',
    subtitle: 'Celestial retreat',
    description: 'Private astronomers, luxury camps, and skies untouched by light pollution.',
    icon: '🌌',
    gradient: 'from-aurora-magenta to-aurora-rose',
  },
  {
    id: 'alpine-retreat',
    title: 'Alpine Wellness',
    subtitle: 'Mountain sanctuary',
    description: 'Exclusive spa lodges, helicopter yoga, and peak-to-peak tranquility.',
    icon: '🏔️',
    gradient: 'from-aurora-rose to-aurora-cyan',
  },
];
src/data/tiers.ts
TypeScript

import { Tier } from '@/types';

export const tiers: Tier[] = [
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'The beginning of exceptional',
    price: '€5,000 / year',
    perks: [
      'Priority booking on all trips',
      '24/7 concierge via WhatsApp',
      'Complimentary airport lounge access',
      'Exclusive member rates (up to 15% off)',
      'Quarterly destination preview events',
    ],
    featured: false,
    gradient: 'from-slate-400 to-slate-600',
  },
  {
    id: 'black',
    name: 'Black',
    tagline: 'Where luxury meets legacy',
    price: '€25,000 / year',
    perks: [
      'Everything in Silver, plus:',
      'Dedicated personal travel designer',
      'Private jet access at member rates',
      'Complimentary villa upgrades',
      'VIP event invitations worldwide',
      'Annual surprise experience gift',
    ],
    featured: true,
    gradient: 'from-aurora-violet to-aurora-magenta',
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    tagline: 'Beyond imagination',
    price: 'By invitation',
    perks: [
      'Everything in Black, plus:',
      'Unlimited complimentary upgrades',
      'Access to unlisted destinations',
      'Personal security arrangements',
      'Custom itinerary creation team',
      'Direct line to founding partners',
    ],
    featured: false,
    gradient: 'from-gold-soft to-gold-bright',
  },
];
src/data/testimonials.ts
TypeScript

import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra Chen',
    title: 'Venture Partner, Sequoia Capital',
    quote: 'They orchestrated an entire week in Kyoto where every moment felt both meticulously planned and completely spontaneous. That paradox is their genius.',
    destination: 'Japan',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
  },
  {
    id: '2',
    name: 'James Worthington III',
    title: 'Chairman, Worthington Holdings',
    quote: 'I have traveled with every premium service. Aurora Luxe is the only one that consistently exceeds expectations I did not know I had.',
    destination: 'Mediterranean',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80',
  },
  {
    id: '3',
    name: 'Amara Okonkwo',
    title: 'CEO, Lagos Digital Bank',
    quote: 'The safari they arranged was not just a trip—it was a portal. My children still talk about the morning we had breakfast with elephants.',
    destination: 'Kenya',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&q=80',
  },
];
src/hooks/useActiveSection.ts
TypeScript

'use client';

import { useState, useEffect } from 'react';
import { SECTION_IDS } from '@/lib/constants';

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
src/hooks/useReducedMotion.ts
TypeScript

'use client';

import { useState, useEffect } from 'react';

export function useReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
}
src/app/globals.css
CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg-void: #050507;
    --bg-cosmos: #0A0A0F;
    --bg-nebula: #12121A;
    --bg-stardust: #1A1A24;
    
    --text-primary: #F5F5F7;
    --text-secondary: #A1A1AA;
    --text-tertiary: #71717A;
    
    --aurora-cyan: #00D4FF;
    --aurora-violet: #7C3AED;
    --aurora-magenta: #D946EF;
    --aurora-rose: #FF006E;
    
    --gold-soft: #D4AF37;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
  }

  body {
    @apply bg-cosmos text-ice antialiased;
    font-feature-settings: 'ss01', 'ss02', 'cv01';
  }

  ::selection {
    background: rgba(0, 212, 255, 0.3);
    color: #F5F5F7;
  }

  :focus-visible {
    @apply outline-none ring-2 ring-aurora-cyan ring-offset-2 ring-offset-cosmos;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-cosmos);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, var(--aurora-cyan), var(--aurora-violet));
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, var(--aurora-violet), var(--aurora-magenta));
  }
}

@layer components {
  /* Glass Card */
  .glass {
    @apply relative;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.02) 100%
    );
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .glass-strong {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0.03) 100%
    );
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
  }

  /* Animated Border */
  .animated-border {
    @apply relative;
  }

  .animated-border::before {
    content: '';
    @apply absolute -inset-[1px] rounded-[inherit] -z-10;
    background: conic-gradient(
      from 0deg,
      var(--aurora-cyan),
      var(--aurora-violet),
      var(--aurora-magenta),
      var(--aurora-rose),
      var(--aurora-cyan)
    );
    animation: border-rotate 4s linear infinite;
    opacity: 0.6;
  }

  .animated-border::after {
    content: '';
    @apply absolute inset-0 rounded-[inherit] -z-10;
    background: var(--bg-cosmos);
  }

  @keyframes border-rotate {
    from { --angle: 0deg; }
    to { --angle: 360deg; }
  }

  /* Text Gradient */
  .text-gradient {
    @apply bg-clip-text text-transparent;
    background-image: linear-gradient(
      135deg,
      var(--aurora-cyan) 0%,
      var(--aurora-violet) 50%,
      var(--aurora-magenta) 100%
    );
  }

  /* Shimmer Effect */
  .shimmer {
    @apply relative overflow-hidden;
  }

  .shimmer::after {
    content: '';
    @apply absolute inset-0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .shimmer:hover::after {
    opacity: 1;
  }

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  /* Noise Texture Overlay */
  .noise-overlay {
    @apply pointer-events-none fixed inset-0 z-50;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.015;
    mix-blend-mode: overlay;
  }

  /* Glow Ring */
  .glow-ring {
    @apply relative;
  }

  .glow-ring::before {
    content: '';
    @apply absolute -inset-2 rounded-full opacity-0 transition-opacity duration-300;
    background: radial-gradient(
      circle at center,
      rgba(0, 212, 255, 0.4) 0%,
      transparent 70%
    );
    filter: blur(8px);
  }

  .glow-ring:hover::before,
  .glow-ring:focus-visible::before {
    @apply opacity-100;
  }
}

@layer utilities {
  /* Hide scrollbar */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Text balance */
  .text-balance {
    text-wrap: balance;
  }

  /* Perspective for 3D effects */
  .perspective-1000 {
    perspective: 1000px;
  }

  /* Safe area padding for mobile */
  .safe-bottom {
    padding-bottom: env(safe-area-inset-bottom, 20px);
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  html {
    scroll-behavior: auto;
  }
}
src/app/layout.tsx
React

import type { Metadata, Viewport } from 'next';
import { Syne, Outfit } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0A0A0F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://auroraluxe.travel'),
  title: {
    default: 'Aurora Luxe Travel | Beyond First Class',
    template: '%s | Aurora Luxe Travel',
  },
  description:
    'Ultra-premium, concierge-level travel experiences for the discerning traveler. Private jets, exclusive resorts, bespoke itineraries.',
  keywords: [
    'luxury travel',
    'private jet',
    'concierge travel',
    'exclusive destinations',
    'bespoke travel',
    'ultra-premium travel',
  ],
  authors: [{ name: 'Aurora Luxe Travel' }],
  creator: 'Aurora Luxe Travel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://auroraluxe.travel',
    siteName: 'Aurora Luxe Travel',
    title: 'Aurora Luxe Travel | Beyond First Class',
    description:
      'Ultra-premium, concierge-level travel experiences for the discerning traveler.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurora Luxe Travel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Luxe Travel | Beyond First Class',
    description:
      'Ultra-premium, concierge-level travel experiences for the discerning traveler.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body className="font-body">
        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {children}
      </body>
    </html>
  );
}
src/app/page.tsx
React

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Destinations } from '@/components/sections/Destinations';
import { Experiences } from '@/components/sections/Experiences';
import { Tiers } from '@/components/sections/Tiers';
import { Testimonials } from '@/components/sections/Testimonials';
import { ConciergeForm } from '@/components/sections/ConciergeForm';
import { FloatingCTA } from '@/components/ui/FloatingCTA';

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <Destinations />
        <Experiences />
        <Tiers />
        <Testimonials />
        <ConciergeForm />
      </main>
      
      <Footer />
      <FloatingCTA />
    </>
  );
}
src/components/layout/Navbar.tsx
React

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/constants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'py-3' : 'py-5'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 transition-all duration-500',
            isScrolled
              ? 'bg-cosmos/80 backdrop-blur-xl border-b border-white/5'
              : 'bg-transparent'
          )}
        />

        <nav className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3"
            aria-label="Aurora Luxe Travel - Home"
          >
            <div className="relative w-10 h-10">
              {/* Aurora Mark */}
              <svg
                viewBox="0 0 40 40"
                fill="none"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="aurora-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="50%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#FF006E" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 4L4 20L20 36L36 20L20 4Z"
                  stroke="url(#aurora-gradient)"
                  strokeWidth="2"
                  fill="none"
                  className="group-hover:fill-[url(#aurora-gradient)] group-hover:fill-opacity-10 transition-all duration-300"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="4"
                  fill="url(#aurora-gradient)"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-semibold tracking-tight text-ice">
                Aurora
              </span>
              <span className="font-display text-lg font-light tracking-tight text-ice/60 ml-1">
                Luxe
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-300',
                    isActive ? 'text-ice' : 'text-ice/60 hover:text-ice'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-aurora-cyan via-aurora-violet to-aurora-magenta"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              className="hidden sm:flex"
            >
              Request Itinerary
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                    width: isMobileMenuOpen ? 24 : 24,
                  }}
                  className="block h-0.5 bg-ice rounded-full origin-center"
                  style={{ width: 24 }}
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? 10 : 0,
                  }}
                  className="block h-0.5 w-4 bg-ice rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                    width: isMobileMenuOpen ? 24 : 16,
                  }}
                  className="block h-0.5 bg-ice rounded-full origin-center"
                  style={{ width: 16 }}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-void/90 backdrop-blur-xl z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-20 left-6 right-6 z-40 lg:hidden glass rounded-2xl p-6"
            >
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300',
                      activeSection === item.href.replace('#', '')
                        ? 'text-ice bg-white/5'
                        : 'text-ice/60 hover:text-ice hover:bg-white/5'
                    )}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <Button
                    href="#contact"
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request Itinerary
                  </Button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
src/components/layout/Footer.tsx
React

import { NAV_ITEMS } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurora-violet/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" className="inline-flex items-center gap-3 group">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                className="w-10 h-10"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="50%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#FF006E" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 4L4 20L20 36L36 20L20 4Z"
                  stroke="url(#footer-gradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="20" cy="20" r="4" fill="url(#footer-gradient)" />
              </svg>
              <div>
                <span className="font-display text-lg font-semibold text-ice">Aurora</span>
                <span className="font-display text-lg font-light text-ice/60 ml-1">Luxe</span>
              </div>
            </a>
            <p className="mt-4 text-sm text-ice/50 leading-relaxed max-w-xs">
              Curating extraordinary journeys for those who seek the exceptional.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-sm text-ice mb-4 tracking-wide uppercase">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ice/50 hover:text-aurora-cyan transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm text-ice mb-4 tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-ice/50">
              <li>
                <a href="mailto:concierge@auroraluxe.travel" className="hover:text-aurora-cyan transition-colors">
                  concierge@auroraluxe.travel
                </a>
              </li>
              <li>
                <a href="tel:+41445555000" className="hover:text-aurora-cyan transition-colors">
                  +41 44 555 5000
                </a>
              </li>
              <li className="pt-2">
                Bahnhofstrasse 42<br />
                8001 Zürich, Switzerland
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-sm text-ice mb-4 tracking-wide uppercase">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-ice/50">
              <li>
                <a href="#" className="hover:text-aurora-cyan transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aurora-cyan transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-aurora-cyan transition-colors">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ice/40">
            © {currentYear} Aurora Luxe Travel. All rights reserved.
          </p>
          <p className="text-xs text-ice/40">
            Images via{' '}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-aurora-cyan transition-colors"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
src/components/ui/Button.tsx
React

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variants = {
  primary: cn(
    'bg-gradient-to-r from-aurora-cyan via-aurora-violet to-aurora-magenta',
    'text-white font-semibold',
    'shadow-glow hover:shadow-glow-lg',
    'hover:scale-[1.02] active:scale-[0.98]'
  ),
  secondary: cn(
    'glass border border-white/10',
    'text-ice font-medium',
    'hover:bg-white/5 hover:border-white/20',
    'hover:scale-[1.02] active:scale-[0.98]'
  ),
  ghost: cn(
    'text-ice/70 font-medium',
    'hover:text-ice hover:bg-white/5',
    'active:scale-[0.98]'
  ),
};

const sizes = {
  sm: 'px-4 py-2 text-sm gap-2',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-3',
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center rounded-full',
      'transition-all duration-300 ease-out-expo',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-cosmos',
      'disabled:opacity-50 disabled:pointer-events-none',
      variants[variant],
      sizes[size],
      className
    );

    if ('href' in props && props.href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={baseStyles}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {isLoading ? (
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            children
          )}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseStyles}
        disabled={isLoading}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
src/components/ui/FloatingCTA.tsx
React

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show after scrolling past hero
      setIsVisible(scrollY > windowHeight * 0.8);
      
      // Hide when near footer
      setIsNearFooter(scrollY + windowHeight > documentHeight - 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && !isNearFooter && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-40 sm:hidden"
        >
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="shadow-glow-lg"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Contact</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
src/components/ui/Input.tsx
React

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-ice/70"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 rounded-xl',
            'bg-stardust/50 border border-white/10',
            'text-ice placeholder:text-ice/30',
            'transition-all duration-300',
            'focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/30',
            'hover:border-white/20',
            error && 'border-aurora-rose/50 focus:border-aurora-rose focus:ring-aurora-rose/30',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-aurora-rose" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-ice/70"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 rounded-xl min-h-[120px] resize-y',
            'bg-stardust/50 border border-white/10',
            'text-ice placeholder:text-ice/30',
            'transition-all duration-300',
            'focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/30',
            'hover:border-white/20',
            error && 'border-aurora-rose/50 focus:border-aurora-rose focus:ring-aurora-rose/30',
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-aurora-rose" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
src/components/ui/Select.tsx
React

import { forwardRef, SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, options, error, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-2">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-ice/70"
        >
          {label}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={cn(
              'w-full px-4 py-3 rounded-xl appearance-none cursor-pointer',
              'bg-stardust/50 border border-white/10',
              'text-ice',
              'transition-all duration-300',
              'focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/30',
              'hover:border-white/20',
              error && 'border-aurora-rose/50 focus:border-aurora-rose focus:ring-aurora-rose/30',
              className
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value} className="bg-nebula">
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-4 h-4 text-ice/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-aurora-rose" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
src/components/ui/Chip.tsx
React

import { cn } from '@/lib/utils';

interface ChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function Chip({ label, selected, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
        selected
          ? 'bg-gradient-to-r from-aurora-cyan to-aurora-violet text-white shadow-glow'
          : 'bg-stardust/50 text-ice/70 border border-white/10 hover:border-white/20 hover:text-ice'
      )}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
}
src/components/ui/Toast.tsx
React

'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({
  message,
  type = 'success',
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  const colors = {
    success: 'from-aurora-cyan/20 to-aurora-violet/20 border-aurora-cyan/30',
    error: 'from-aurora-rose/20 to-aurora-magenta/20 border-aurora-rose/30',
    info: 'from-aurora-blue/20 to-aurora-cyan/20 border-aurora-blue/30',
  };

  const iconColors = {
    success: 'text-aurora-cyan',
    error: 'text-aurora-rose',
    info: 'text-aurora-blue',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
          role="alert"
          aria-live="polite"
        >
          <div
            className={cn(
              'flex items-center gap-3 px-6 py-4 rounded-2xl',
              'bg-gradient-to-r backdrop-blur-xl border',
              colors[type]
            )}
          >
            <span className={iconColors[type]}>{icons[type]}</span>
            <p className="text-sm font-medium text-ice">{message}</p>
            <button
              onClick={onClose}
              className="ml-2 text-ice/50 hover:text-ice transition-colors"
              aria-label="Dismiss notification"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
src/components/effects/AuroraBlob.tsx
React

'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

interface AuroraBlobProps {
  className?: string;
}

export function AuroraBlob({ className }: AuroraBlobProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Primary blob */}
      <motion.div
        className="absolute w-[800px] h-[800px] -top-[200px] -right-[200px]"
        animate={
          reducedMotion
            ? {}
            : {
                x: [0, 50, -30, 0],
                y: [0, -30, 50, 0],
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 0.95, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-aurora-cyan/30 via-aurora-violet/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Secondary blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] -bottom-[100px] -left-[100px]"
        animate={
          reducedMotion
            ? {}
            : {
                x: [0, -40, 30, 0],
                y: [0, 40, -20, 0],
                rotate: [0, -90, -180, -270, -360],
                scale: [1, 0.9, 1.1, 1],
              }
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-aurora-magenta/25 via-aurora-rose/15 to-transparent blur-3xl" />
      </motion.div>

      {/* Tertiary accent blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={
          reducedMotion
            ? {}
            : {
                x: [-100, 100, -100],
                y: [50, -50, 50],
                scale: [1, 1.2, 1],
              }
        }
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-aurora-violet/20 to-aurora-cyan/20 blur-3xl" />
      </motion.div>
    </div>
  );
}
src/components/sections/Hero.tsx
React

'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AuroraBlob } from '@/components/effects/AuroraBlob';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=2400&h=1400&fit=crop&q=85"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos/70 via-cosmos/50 to-cosmos" />
        <div className="absolute inset-0 bg-gradient-to-r from-cosmos/80 via-transparent to-cosmos/80" />
      </motion.div>

      {/* Aurora Effect */}
      <AuroraBlob />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Overline */}
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium tracking-[0.3em] uppercase text-aurora-cyan"
          >
            Ultra-Premium Travel Concierge
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ice"
          >
            Beyond{' '}
            <span className="relative inline-block">
              <span className="text-gradient">First Class</span>
              {/* Decorative underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 10C50 2 150 2 198 10"
                  stroke="url(#hero-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="hero-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D4FF" />
                    <stop offset="50%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#FF006E" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-ice/70 leading-relaxed text-balance"
          >
            Bespoke itineraries for the discerning few. Private jets, hidden villas,
            and experiences money alone cannot buy—orchestrated by your dedicated travel architect.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button href="#contact" variant="primary" size="lg">
              <span>Design My Trip</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button href="#destinations" variant="secondary" size="lg">
              Explore Destinations
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="pt-12 flex flex-wrap items-center justify-center gap-8 text-ice/40"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-ice">500+</span>
              <span className="text-sm">Private<br />Journeys</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-ice">98%</span>
              <span className="text-sm">Client<br />Return Rate</span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-ice">24/7</span>
              <span className="text-sm">Concierge<br />Access</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase text-ice/40">Scroll</span>
          <svg
            className="w-5 h-5 text-ice/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
src/components/sections/Destinations.tsx
React

'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { destinations } from '@/data/destinations';
import { formatPrice } from '@/lib/utils';
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations';

export function Destinations() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      id="destinations"
      className="relative py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos via-nebula/30 to-cosmos" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium tracking-[0.3em] uppercase text-aurora-cyan mb-4"
          >
            Curated Destinations
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ice mb-6"
          >
            Where will your{' '}
            <span className="text-gradient">story</span> unfold?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-ice/60 leading-relaxed"
          >
            Each destination hand-selected for its potential to deliver
            moments that transcend ordinary travel.
          </motion.p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DestinationCard({
  destination,
  index,
}: {
  destination: (typeof destinations)[0];
  index: number;
}) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      className="group relative"
    >
      <motion.div
        variants={cardHover}
        className="relative h-[420px] rounded-2xl overflow-hidden glass border border-white/5"
      >
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={destination.image}
            alt={`${destination.name}, ${destination.region}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cosmos via-cosmos/50 to-transparent" />
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 shimmer" />

        {/* Animated Border on Hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-aurora-cyan via-aurora-violet to-aurora-magenta opacity-50" />
          <div className="absolute inset-0 rounded-2xl bg-cosmos" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Region Tag */}
          <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-ice/80 backdrop-blur-sm mb-4">
            {destination.region}
          </span>

          {/* Title & Tagline */}
          <h3 className="font-display text-2xl font-bold text-ice mb-1">
            {destination.name}
          </h3>
          <p className="text-ice/60 text-sm mb-4">{destination.tagline}</p>

          {/* Quick Facts - Revealed on Hover */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: 'auto' }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
              <div>
                <p className="text-xs text-ice/40 mb-1">Best Time</p>
                <p className="text-sm text-ice">{destination.quickFacts.bestTime}</p>
              </div>
              <div>
                <p className="text-xs text-ice/40 mb-1">Duration</p>
                <p className="text-sm text-ice">{destination.quickFacts.duration}</p>
              </div>
              <div>
                <p className="text-xs text-ice/40 mb-1">Style</p>
                <p className="text-sm text-ice">{destination.quickFacts.style}</p>
              </div>
            </div>
          </motion.div>

          {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
            <div>
              <p className="text-xs text-ice/40">From</p>
              <p className="text-lg font-display font-semibold text-gradient">
                {formatPrice(destination.price, destination.currency)}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-gradient-to-r group-hover:from-aurora-cyan group-hover:to-aurora-violet transition-all duration-300"
              aria-label={`View ${destination.name} details`}
            >
              <svg
                className="w-4 h-4 text-ice"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
src/components/sections/Experiences.tsx
React

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '@/data/experiences';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function Experiences() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      id="experiences"
      className="relative py-32 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-aurora-violet/30 to-transparent" />
      <div className="absolute right-0 bottom-1/4 w-px h-64 bg-gradient-to-b from-transparent via-aurora-cyan/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium tracking-[0.3em] uppercase text-aurora-magenta mb-4"
          >
            Signature Experiences
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ice mb-6"
          >
            Moments that{' '}
            <span className="text-gradient">define</span> a lifetime
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-ice/60 leading-relaxed"
          >
            Every journey is enhanced by experiences crafted exclusively for our members.
            Impossible reservations, private access, hidden worlds.
          </motion.p>
        </motion.div>

        {/* Experiences List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isEven={index % 2 === 0}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
  isEven,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isEven: boolean;
}) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group"
    >
      <motion.div
        whileHover={{ x: isEven ? 10 : -10 }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className={cn(
          'relative flex items-center gap-8 p-8 rounded-2xl',
          'glass border border-white/5',
          'hover:border-white/10 transition-all duration-500',
          isEven ? 'flex-row' : 'flex-row-reverse'
        )}
      >
        {/* Icon */}
        <div
          className={cn(
            'flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center',
            'bg-gradient-to-br text-3xl',
            experience.gradient
          )}
        >
          {experience.icon}
        </div>

        {/* Content */}
        <div className={cn('flex-grow', isEven ? '' : 'text-right')}>
          <div className="flex items-center gap-3 mb-2" style={{ justifyContent: isEven ? 'flex-start' : 'flex-end' }}>
            <h3 className="font-display text-2xl font-bold text-ice">
              {experience.title}
            </h3>
            <span className="text-sm text-aurora-cyan">{experience.subtitle}</span>
          </div>
          <p className="text-ice/60 max-w-xl" style={{ marginLeft: isEven ? 0 : 'auto' }}>
            {experience.description}
          </p>
        </div>

        {/* Hover indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className={cn(
            'flex-shrink-0 w-12 h-12 rounded-full',
            'bg-gradient-to-r from-aurora-cyan to-aurora-violet',
            'flex items-center justify-center',
            'opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          )}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>

        {/* Number indicator */}
        <div
          className={cn(
            'absolute top-8 text-8xl font-display font-bold text-white/[0.02]',
            isEven ? 'left-8' : 'right-8'
          )}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      </motion.div>
    </motion.article>
  );
}
src/components/sections/Tiers.tsx
React

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { tiers } from '@/data/tiers';
import { Button } from '@/components/ui/Button';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function Tiers() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={containerRef}
      id="membership"
      className="relative py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos via-nebula/50 to-cosmos" />

      {/* Aurora accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-aurora-violet/10 blur-[100px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium tracking-[0.3em] uppercase text-gold-soft mb-4"
          >
            Membership
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ice mb-6"
          >
            Your passport to the{' '}
            <span className="text-gradient">extraordinary</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-ice/60 leading-relaxed"
          >
            Three tiers of access, each unlocking a new dimension of travel.
            Choose your level of extraordinary.
          </motion.p>
        </motion.div>

        {/* Tiers Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: (typeof tiers)[0] }) {
  return (
    <motion.article
      variants={fadeInUp}
      className={cn(
        'relative group',
        tier.featured && 'lg:-mt-4 lg:mb-4'
      )}
    >
      {/* Featured badge */}
      {tier.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-aurora-violet to-aurora-magenta text-white">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={cn(
          'relative h-full p-8 rounded-2xl overflow-hidden',
          'glass border transition-all duration-500',
          tier.featured
            ? 'border-aurora-violet/30 shadow-glow-violet'
            : 'border-white/5 hover:border-white/10'
        )}
      >
        {/* Animated border for featured */}
        {tier.featured && (
          <div className="absolute inset-0 rounded-2xl animated-border opacity-60" />
        )}

        {/* Content */}
        <div className="relative z-10">
          {/* Tier icon/name */}
          <div className="mb-6">
            <div
              className={cn(
                'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4',
                'bg-gradient-to-br',
                tier.gradient
              )}
            >
              {tier.id === 'silver' && (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              )}
              {tier.id === 'black' && (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              )}
              {tier.id === 'obsidian' && (
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                </svg>
              )}
            </div>
            <h3 className="font-display text-2xl font-bold text-ice mb-1">
              {tier.name}
            </h3>
            <p className="text-sm text-ice/50">{tier.tagline}</p>
          </div>

          {/* Price */}
          <div className="mb-8">
            <p className="font-display text-3xl font-bold text-ice">
              {tier.price}
            </p>
          </div>

          {/* Perks */}
          <ul className="space-y-4 mb-8">
            {tier.perks.map((perk, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className={cn(
                    'w-5 h-5 flex-shrink-0 mt-0.5',
                    tier.featured ? 'text-aurora-cyan' : 'text-ice/40'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-ice/70">{perk}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Button
            href="#contact"
            variant={tier.featured ? 'primary' : 'secondary'}
            className="w-full justify-center"
          >
            {tier.id === 'obsidian' ? 'Request Invitation' : 'Apply Now'}
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
src/components/sections/Testimonials.tsx
React

'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative py-32 overflow-hidden"
    >
      {/* Decorative quote */}
      <div className="absolute top-20 left-10 text-[200px] font-display text-white/[0.02] leading-none select-none pointer-events-none">
        "
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium tracking-[0.3em] uppercase text-aurora-cyan mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ice mb-6"
          >
            Voices of the{' '}
            <span className="text-gradient">extraordinary</span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Main testimonial */}
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Quote */}
                <blockquote className="text-xl sm:text-2xl lg:text-3xl text-ice/90 leading-relaxed mb-8 text-balance">
                  "{testimonials[activeIndex].quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-aurora-cyan/30">
                    <Image
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-display font-semibold text-ice">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-ice/50">
                      {testimonials[activeIndex].title}
                    </p>
                  </div>
                </div>

                {/* Destination tag */}
                <p className="mt-4 text-sm text-aurora-cyan">
                  Traveled to {testimonials[activeIndex].destination}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'relative w-3 h-3 rounded-full transition-all duration-300',
                  index === activeIndex
                    ? 'bg-gradient-to-r from-aurora-cyan to-aurora-violet w-8'
                    : 'bg-white/20 hover:bg-white/40'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
src/components/sections/ConciergeForm.tsx
React

'use client';

import { useRef, useState, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input, Textarea } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import { BUDGET_OPTIONS, INTEREST_OPTIONS } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import type { FormData } from '@/types';

export function ConciergeForm() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    dates: '',
    travelers: '',
    interests: [],
    budget: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.dates.trim()) {
      newErrors.dates = 'Please indicate your preferred dates';
    }

    if (!formData.travelers.trim()) {
      newErrors.travelers = 'Number of travelers is required';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowToast(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      dates: '',
      travelers: '',
      interests: [],
      budget: '',
      notes: '',
    });
  };

  return (
    <>
      <section
        ref={containerRef}
        id="contact"
        className="relative py-32 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos via-nebula/30 to-void" />

        {/* Aurora accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-aurora-violet/10 
