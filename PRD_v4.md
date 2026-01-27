This is a comprehensive request to design and implement a luxury travel website called "Aurora Luxe Travel." Let me systematically analyze this and create a detailed specification document, then implement the full solution.

Phase 1: Deep Analysis
Request Deconstruction
The user wants:

A Next.js website with TypeScript
Futuristic luxury aesthetic - dark mode, glassmorphism, neon accents
Single page with optional destination routes
Multiple sections: Hero, Destinations, Experiences, Tiers, Testimonials, Form, Footer
Premium animations and micro-interactions
Mobile-first, responsive design
Accessibility compliance
Performance optimization
Design Direction Analysis
Aesthetic Lens:

"Futuristic luxury" = sleek, dark, premium, tech-forward
Glassmorphism needs careful implementation (backdrop-blur, subtle borders)
Neon accents should be used sparingly to maintain luxury feel
Aurora gradients = organic, flowing, ethereal
Psychological Analysis:

Target audience: Ultra-high-net-worth individuals
They expect: exclusivity, sophistication, effortless experience
Cognitive load should be minimal - information should feel curated, not overwhelming
Trust signals: premium typography, refined spacing, attention to detail
Technical Analysis:

Next.js 14+ with App Router
Tailwind CSS 4.0 (or latest stable)
Framer Motion for animations
Remote images from Unsplash
No backend - mock data only
Anti-Generic Considerations
I need to avoid:

Generic hero sections with predictable layouts
Standard card grids without personality
Safe typography choices
Template-feeling components
Instead, I'll implement:

Asymmetric layouts where appropriate
Distinctive typographic hierarchy
Custom micro-interactions
Aurora-themed animated elements
Glassmorphic components with unique styling
Design Language Decision
I'm settling on a "Celestial Luxury" direction—deep cosmic blacks with flowing aurora gradients, crystalline glass surfaces, and subtle particle effects. The typography will pair Space Grotesk for commanding headlines with Inter for refined body text, using dramatic scale contrast and letter-spacing to signal elegance. The color foundation starts with #0A0A0F for the deep space backdrop, layering in subtle frosted glass surfaces and aurora-inspired color accents.

For the palette, I'm working with crisp whites for primary text, muted grays for secondary information, and a gradient accent range flowing from cyan through purple to magenta—with gold reserved as a rare highlight. The project structure uses Next.js with a modular layout, a main landing page, and destination routes organized by slug.

The component architecture separates concerns across UI primitives like buttons and cards, layout components for navigation and footers, and feature sections including hero, destination showcase, experience highlights, pricing tiers, customer testimonials, and a concierge booking form.

Visual effects are handled through dedicated components for aurora blob animations, animated borders, glass morphism cards, and parallax scrolling. Data is centralized in separate files for destinations, experiences, pricing tiers, and testimonials. Utility functions include styling helpers and Framer Motion animation variants, with TypeScript types defined in a single index file. The project uses Tailwind for styling, Next.js for the framework, and includes standard configuration files for build and development setup.

---

Aurora Luxe Travel — Comprehensive Requirements & Implementation
Executive Summary
I will deliver a production-ready, visually stunning Next.js website for "Aurora Luxe Travel" that embodies Celestial Luxury — a design language merging deep-space aesthetics with aurora borealis fluidity. This isn't a template; it's a bespoke digital experience engineered to evoke exclusivity at every pixel.

Phase 1: Deep Analysis & Design Direction
🔬 Multi-Dimensional Analysis
Psychological Lens:

Target: Ultra-high-net-worth individuals who expect effortless luxury
Cognitive load must be minimal — information feels curated, not catalogued
Trust signals: dramatic typography scale, refined spacing, obsessive details
Emotional hook: awe (aurora), aspiration (destinations), exclusivity (tiers)
Technical Lens:

Next.js 14+ App Router for optimal performance
Tailwind CSS with custom design tokens
Framer Motion for orchestrated scroll animations
Remote images require next.config.js domain configuration
No hydration mismatches with proper SSR handling
Accessibility Lens (WCAG AAA Target):

Contrast ratios: 7:1+ for body text, 4.5:1+ for large text
Focus states: visible, high-contrast rings
Semantic HTML: proper heading hierarchy, landmarks
Keyboard navigation: full functionality without mouse
Reduced motion: respect prefers-reduced-motion
Scalability Lens:

Component architecture enabling future page additions
Data layer decoupled for easy CMS integration later
Design tokens centralized in Tailwind config
🎨 Design Language: "Celestial Luxury"
Conceptual Direction:

"Where the cosmos meets concierge — an interface that feels like gazing into the northern lights from a private jet window."

The Unforgettable Element:
A living aurora gradient that breathes behind the hero, with crystalline glassmorphic cards that catch "light" as you scroll.

Typography System:

Role	Font	Weight	Tracking	Usage
Display	Space Grotesk	700	-0.02em	Hero headline
Heading	Space Grotesk	600	-0.01em	Section titles
Subhead	Space Grotesk	500	0	Card titles
Body	Inter	400	0	Paragraphs
Caption	Inter	500	0.05em	Labels, metadata
Color Architecture:

text

Background Layer:    #050507 (void black)
Surface Layer 1:     rgba(255,255,255,0.02) (barely there)
Surface Layer 2:     rgba(255,255,255,0.05) (glass)
Surface Layer 3:     rgba(255,255,255,0.08) (elevated glass)

Text Primary:        #F8FAFC (crisp white)
Text Secondary:      #94A3B8 (muted silver)
Text Tertiary:       #64748B (subtle)

Aurora Spectrum:
  Cyan:              #22D3EE
  Teal:              #2DD4BF
  Violet:            #8B5CF6
  Magenta:           #EC4899
  
Gold Accent:         #D4A574 (warm, not gaudy)

Border:              rgba(255,255,255,0.08)
Border Glow:         rgba(34,211,238,0.3)
Spacing Scale (8px base):

Section padding: 120px vertical (desktop), 80px (mobile)
Component gaps: 32px, 24px, 16px, 8px
Card padding: 32px (desktop), 24px (mobile)
Radius Scale:

Cards: 24px
Buttons: 12px
Inputs: 10px
Pills/Badges: 999px (full)
Phase 2: Execution Plan
Checklist
 Project scaffolding (Next.js + TypeScript + Tailwind)
 Custom Tailwind configuration with design tokens
 Global styles and CSS custom properties
 Base UI components (Button, Input, Card, Toast)
 Effect components (AuroraBlob, AnimatedBorder, GlassCard)
 Layout components (Navbar, Footer)
 Section components (Hero, Destinations, Experiences, Tiers, Testimonials, Form)
 Data layer (typed mock data)
 Animation variants (Framer Motion)
 Page assembly with scroll orchestration
 Responsive refinement
 Accessibility audit
 SEO metadata
 README documentation
Phase 3: Complete Implementation
📁 File Structure
text

aurora-luxe-travel/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── destinations/
│       └── [slug]/
│           └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Chip.tsx
│   │   ├── Toast.tsx
│   │   └── GlassCard.tsx
│   ├── effects/
│   │   ├── AuroraBlob.tsx
│   │   ├── AnimatedBorder.tsx
│   │   ├── SectionReveal.tsx
│   │   └── NoiseTexture.tsx
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Destinations.tsx
│       ├── Experiences.tsx
│       ├── Tiers.tsx
│       ├── Testimonials.tsx
│       └── ConciergeForm.tsx
├── data/
│   ├── destinations.ts
│   ├── experiences.ts
│   ├── tiers.ts
│   └── testimonials.ts
├── lib/
│   ├── utils.ts
│   └── animations.ts
├── types/
│   └── index.ts
├── public/
│   └── favicon.svg
├── tailwind.config.ts
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
📦 package.json
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
    "next": "^14.2.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.2.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.12.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.38",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0"
  }
}
⚙️ next.config.js
JavaScript

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
🎨 tailwind.config.ts
TypeScript

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background layers
        void: '#050507',
        surface: {
          1: 'rgba(255,255,255,0.02)',
          2: 'rgba(255,255,255,0.05)',
          3: 'rgba(255,255,255,0.08)',
        },
        // Aurora spectrum
        aurora: {
          cyan: '#22D3EE',
          teal: '#2DD4BF',
          violet: '#8B5CF6',
          magenta: '#EC4899',
          blue: '#3B82F6',
        },
        // Gold accent
        gold: {
          DEFAULT: '#D4A574',
          light: '#E8C9A8',
          dark: '#B8956A',
        },
        // Text hierarchy
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          tertiary: '#64748B',
        },
        // Borders
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          glow: 'rgba(34,211,238,0.3)',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Custom scale for luxury feel
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        'section': 'clamp(5rem, 10vw, 7.5rem)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(34,211,238,0.15)',
        'glow-md': '0 0 40px rgba(34,211,238,0.2)',
        'glow-lg': '0 0 60px rgba(34,211,238,0.25)',
        'glow-gold': '0 0 40px rgba(212,165,116,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
        'elevated': '0 20px 60px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #22D3EE 0%, #8B5CF6 50%, #EC4899 100%)',
        'aurora-conic': 'conic-gradient(from 180deg, #22D3EE, #8B5CF6, #EC4899, #22D3EE)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'aurora': 'aurora 15s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'border-flow': 'border-flow 4s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(10%, -10%) scale(1.1)' },
          '50%': { transform: 'translate(-5%, 5%) scale(0.95)' },
          '75%': { transform: 'translate(-10%, -5%) scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'border-flow': {
          '0%': { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
📝 tsconfig.json
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
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
🌐 app/globals.css
CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ═══════════════════════════════════════════════════════════
   AURORA LUXE TRAVEL — Global Styles
   Design Language: Celestial Luxury
   ═══════════════════════════════════════════════════════════ */

@layer base {
  :root {
    /* Core palette as CSS custom properties for runtime access */
    --color-void: 5 5 7;
    --color-aurora-cyan: 34 211 238;
    --color-aurora-violet: 139 92 246;
    --color-aurora-magenta: 236 72 153;
    --color-gold: 212 165 116;
    
    /* Glass effect properties */
    --glass-blur: 20px;
    --glass-saturation: 180%;
    
    /* Animation properties */
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    @apply bg-void text-text-primary font-body;
    overflow-x: hidden;
  }

  /* Focus states for accessibility */
  :focus-visible {
    @apply outline-none ring-2 ring-aurora-cyan ring-offset-2 ring-offset-void;
  }

  /* Selection styling */
  ::selection {
    @apply bg-aurora-cyan/30 text-text-primary;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer components {
  /* ══════════════════════════════════════════
     GLASSMORPHISM SYSTEM
     ══════════════════════════════════════════ */
  
  .glass {
    @apply relative bg-surface-2 backdrop-blur-xl;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .glass-elevated {
    @apply relative bg-surface-3 backdrop-blur-xl shadow-glass;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* ══════════════════════════════════════════
     ANIMATED BORDER (Conic Gradient)
     ══════════════════════════════════════════ */
  
  .animated-border {
    --angle: 0deg;
    position: relative;
    border-radius: inherit;
  }

  .animated-border::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: conic-gradient(
      from var(--angle),
      transparent 25%,
      #22D3EE 30%,
      #8B5CF6 50%,
      #EC4899 70%,
      transparent 75%
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: rotate-border 4s linear infinite;
  }

  @keyframes rotate-border {
    from { --angle: 0deg; }
    to { --angle: 360deg; }
  }

  @property --angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  /* ══════════════════════════════════════════
     SHIMMER EFFECT
     ══════════════════════════════════════════ */
  
  .shimmer {
    position: relative;
    overflow: hidden;
  }

  .shimmer::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    pointer-events: none;
  }

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* ══════════════════════════════════════════
     GLOW EFFECTS
     ══════════════════════════════════════════ */
  
  .glow-ring {
    @apply relative;
  }

  .glow-ring::after {
    content: '';
    @apply absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500;
    box-shadow: 
      0 0 30px rgba(34, 211, 238, 0.4),
      0 0 60px rgba(139, 92, 246, 0.2);
  }

  .glow-ring:hover::after {
    @apply opacity-100;
  }

  /* ══════════════════════════════════════════
     NOISE TEXTURE OVERLAY
     ══════════════════════════════════════════ */
  
  .noise-overlay {
    position: relative;
  }

  .noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
    mix-blend-mode: overlay;
  }

  /* ══════════════════════════════════════════
     TYPOGRAPHY UTILITIES
     ══════════════════════════════════════════ */
  
  .text-gradient {
    @apply bg-aurora-gradient bg-clip-text text-transparent;
  }

  .text-balance {
    text-wrap: balance;
  }

  /* ══════════════════════════════════════════
     SCROLLBAR STYLING
     ══════════════════════════════════════════ */
  
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-void;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-surface-3 rounded-full;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-aurora-cyan/30;
  }
}

@layer utilities {
  /* Hide scrollbar but keep functionality */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Perspective for 3D effects */
  .perspective-1000 {
    perspective: 1000px;
  }

  .preserve-3d {
    transform-style: preserve-3d;
  }
}
🔧 lib/utils.ts
TypeScript

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format currency with European locale
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Generate a slug from a string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
🎬 lib/animations.ts
TypeScript

import { Variants, Transition } from 'framer-motion';

// Shared transitions
export const smoothTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
};

export const snappyTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

// Fade up animation for section reveals
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // expo out
    },
  },
};

// Stagger children animation
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Scale up animation for cards
export const scaleUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Navbar animation
export const navbarVariants: Variants = {
  top: {
    backgroundColor: 'rgba(5, 5, 7, 0)',
    backdropFilter: 'blur(0px)',
  },
  scrolled: {
    backgroundColor: 'rgba(5, 5, 7, 0.8)',
    backdropFilter: 'blur(20px)',
  },
};

// Hero text animation
export const heroTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Card hover animation
export const cardHoverVariants = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(34,211,238,0.15)',
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Button glow animation
export const buttonGlowVariants: Variants = {
  rest: {
    boxShadow: '0 0 0 rgba(34, 211, 238, 0)',
  },
  hover: {
    boxShadow: '0 0 30px rgba(34, 211, 238, 0.4), 0 0 60px rgba(139, 92, 246, 0.2)',
  },
};
📊 types/index.ts
TypeScript

export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  vibe: string;
  priceFrom: number;
  imageUrl: string;
  highlights: string[];
  description: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  included: string[];
}

export interface Tier {
  id: string;
  name: string;
  tagline: string;
  priceIndicator: string;
  perks: string[];
  featured: boolean;
  accentColor: 'cyan' | 'violet' | 'gold';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  destination: string;
  rating: number;
}

export interface FormData {
  name: string;
  email: string;
  departureDate: string;
  returnDate: string;
  travelers: number;
  interests: string[];
  budget: string;
  notes: string;
}
📁 data/destinations.ts
TypeScript

import { Destination } from '@/types';

export const destinations: Destination[] = [
  {
    id: '1',
    slug: 'maldives-private-atoll',
    name: 'Maldives',
    region: 'Indian Ocean',
    vibe: 'Overwater serenity meets absolute privacy',
    priceFrom: 28500,
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=900&fit=crop&q=80',
    highlights: ['Private Island Access', 'Underwater Dining', 'Personal Butler'],
    description: 'Experience the pinnacle of island luxury in your own private atoll sanctuary.',
  },
  {
    id: '2',
    slug: 'tokyo-after-hours',
    name: 'Tokyo',
    region: 'Japan',
    vibe: 'Neon-lit nights and hidden omakase',
    priceFrom: 18900,
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=900&fit=crop&q=80',
    highlights: ['Exclusive Members Clubs', 'Michelin Omakase Trail', 'Geisha District Access'],
    description: 'Unlock Tokyo\'s most secretive doors with our insider connections.',
  },
  {
    id: '3',
    slug: 'swiss-alps-summit',
    name: 'Swiss Alps',
    region: 'Switzerland',
    vibe: 'Peak luxury at altitude',
    priceFrom: 42000,
    imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=900&fit=crop&q=80',
    highlights: ['Private Chalet', 'Heli-Skiing', 'Spa Wellness Retreat'],
    description: 'Where pristine powder meets five-star pampering in the clouds.',
  },
  {
    id: '4',
    slug: 'dubai-ultramodern',
    name: 'Dubai',
    region: 'UAE',
    vibe: 'Futuristic opulence in the desert',
    priceFrom: 35600,
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=900&fit=crop&q=80',
    highlights: ['Royal Suite at Burj', 'Desert Safari', 'Yacht Charter'],
    description: 'Experience tomorrow\'s luxury today in the city of superlatives.',
  },
  {
    id: '5',
    slug: 'kenya-safari-lodge',
    name: 'Kenya',
    region: 'East Africa',
    vibe: 'Wild encounters in ultimate comfort',
    priceFrom: 31200,
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=900&fit=crop&q=80',
    highlights: ['Private Conservancy', 'Bush Breakfast', 'Night Game Drives'],
    description: 'Where the Big Five roam and your every need is anticipated.',
  },
  {
    id: '6',
    slug: 'mediterranean-voyage',
    name: 'Mediterranean',
    region: 'Côte d\'Azur',
    vibe: 'Yacht life along the Riviera',
    priceFrom: 55000,
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=900&fit=crop&q=80',
    highlights: ['Private Yacht Charter', 'Monaco Grand Prix', 'Coastal Villa Stays'],
    description: 'Sail the azure waters where jet-setters have played for generations.',
  },
];
📁 data/experiences.ts
TypeScript

import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Private Jet Odyssey',
    description: 'Hopscotch between destinations aboard your configured Gulfstream G650, with bespoke catering and zero wait times.',
    icon: '✈️',
    duration: '7-21 days',
    included: ['Dedicated Flight Crew', 'Custom Itinerary', 'Ground Transfers', 'Concierge Service'],
  },
  {
    id: '2',
    title: 'Superyacht Week',
    description: 'Command a 60-meter yacht through the world\'s most exclusive waters, with Michelin-trained private chef aboard.',
    icon: '🛥️',
    duration: '7 nights',
    included: ['Full Crew', 'Water Toys Fleet', 'Provisioning', 'Captain\'s Expertise'],
  },
  {
    id: '3',
    title: 'Michelin Galaxy Tour',
    description: 'Dine at 12 three-star restaurants across 4 countries, with chef meet-and-greets and kitchen table access.',
    icon: '🍽️',
    duration: '14 days',
    included: ['Guaranteed Reservations', 'Sommelier Pairing', 'Culinary Gifts', 'Private Transfers'],
  },
  {
    id: '4',
    title: 'Desert Stargazing',
    description: 'Saharan nights under billion-star skies, with astronomers, luxury camps, and Berber cultural immersion.',
    icon: '✨',
    duration: '5 nights',
    included: ['Luxury Camp', 'Personal Astronomer', 'Camel Treks', 'Sunset Ceremonies'],
  },
  {
    id: '5',
    title: 'Alpine Wellness Retreat',
    description: 'High-altitude healing in a private Swiss clinic, combining cutting-edge medicine with centuries-old traditions.',
    icon: '🏔️',
    duration: '10 days',
    included: ['Medical Assessment', 'Personal Trainer', 'Spa Unlimited', 'Nutritionist'],
  },
];
📁 data/tiers.ts
TypeScript

import { Tier } from '@/types';

export const tiers: Tier[] = [
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'The Art of Refined Travel',
    priceIndicator: 'From €15,000',
    perks: [
      'Dedicated travel consultant',
      '24/7 concierge support',
      'Premium accommodation upgrades',
      'Airport lounge access worldwide',
      'Welcome amenities at each property',
      'Travel insurance included',
    ],
    featured: false,
    accentColor: 'cyan',
  },
  {
    id: 'black',
    name: 'Black',
    tagline: 'Unlocking the Extraordinary',
    priceIndicator: 'From €50,000',
    perks: [
      'Everything in Silver, plus:',
      'Private jet booking privileges',
      'Yacht charter concierge',
      'Michelin restaurant priority',
      'Exclusive event access',
      'Personal shopping liaison',
      'Bespoke experience creation',
    ],
    featured: true,
    accentColor: 'violet',
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    tagline: 'Beyond Imagination',
    priceIndicator: 'By Invitation',
    perks: [
      'Everything in Black, plus:',
      'Dedicated lifestyle manager',
      'Private island rentals',
      'Celebrity chef on-demand',
      'Unlimited itinerary changes',
      'Family office integration',
      'Legacy travel planning',
      'Art & auction access',
    ],
    featured: false,
    accentColor: 'gold',
  },
];
📁 data/testimonials.ts
TypeScript

import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Aurora Luxe orchestrated a seamless 3-week journey across five countries. Every detail was flawless—from the private airfield transfers to the unexpected champagne picnics.',
    author: 'Victoria Chen',
    title: 'CEO, Meridian Holdings',
    destination: 'European Grand Tour',
    rating: 5,
  },
  {
    id: '2',
    quote: 'They secured us a table at a restaurant with a 2-year waitlist. That\'s when I knew this wasn\'t just travel planning—it\'s a different level entirely.',
    author: 'James Rothwell',
    title: 'Private Investor',
    destination: 'Tokyo Culinary Journey',
    rating: 5,
  },
  {
    id: '3',
    quote: 'Our anniversary in the Maldives was pure magic. The overwater villa had been decorated with our wedding photos. How they found those, I still don\'t know.',
    author: 'Amara & David Okonkwo',
    title: 'Founding Partners, Okonkwo Capital',
    destination: 'Maldives Private Island',
    rating: 5,
  },
  {
    id: '4',
    quote: 'The Swiss wellness retreat changed my life. Aurora Luxe didn\'t just book a trip—they understood what I needed before I did.',
    author: 'Henrik Larsson',
    title: 'Former Professional Athlete',
    destination: 'Alpine Wellness Retreat',
    rating: 5,
  },
];
🎨 components/ui/Button.tsx
TypeScript

'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'relative inline-flex items-center justify-center font-display font-medium',
      'transition-all duration-300 ease-out-expo',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-void',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'
    );

    const variants = {
      primary: cn(
        'bg-aurora-gradient text-void',
        'hover:shadow-glow-md hover:scale-[1.02]',
        'active:scale-[0.98]'
      ),
      secondary: cn(
        'glass border border-white/10 text-text-primary',
        'hover:bg-surface-3 hover:border-aurora-cyan/30 hover:shadow-glow-sm',
        'active:scale-[0.98]'
      ),
      ghost: cn(
        'text-text-secondary',
        'hover:text-text-primary hover:bg-surface-2',
        'active:scale-[0.98]'
      ),
      outline: cn(
        'border border-white/20 text-text-primary bg-transparent',
        'hover:border-aurora-cyan/50 hover:shadow-glow-sm',
        'active:scale-[0.98]'
      ),
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
      md: 'px-6 py-3 text-base rounded-xl gap-2',
      lg: 'px-8 py-4 text-lg rounded-xl gap-2.5',
    };

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        whileTap={{ scale: 0.98 }}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {isLoading ? (
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </motion.span>
        ) : null}

        <span className={cn('flex items-center gap-2', isLoading && 'invisible')}>
          {leftIcon}
          {children}
          {rightIcon}
        </span>

        {/* Animated border for primary variant */}
        {variant === 'primary' && (
          <span className="absolute inset-0 rounded-[inherit] animated-border opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
🎨 components/ui/Input.tsx
TypeScript

'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-secondary tracking-wide uppercase"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full px-4 py-3 rounded-xl',
              'bg-surface-2 border border-white/10',
              'text-text-primary placeholder:text-text-tertiary',
              'font-body text-base',
              'transition-all duration-300 ease-out-expo',
              'focus:outline-none focus:border-aurora-cyan/50 focus:shadow-glow-sm',
              'hover:border-white/20',
              error && 'border-red-500/50 focus:border-red-500/50',
              className
            )}
            {...props}
          />
          
          {/* Subtle glow on focus */}
          <div className="absolute inset-0 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute inset-0 rounded-xl bg-aurora-cyan/5 blur-xl" />
          </div>
        </div>
        
        {error && (
          <p className="text-sm text-red-400 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-text-tertiary">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
🎨 components/ui/Select.tsx
TypeScript

'use client';

import { forwardRef, SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-text-secondary tracking-wide uppercase"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'w-full px-4 py-3 rounded-xl appearance-none cursor-pointer',
              'bg-surface-2 border border-white/10',
              'text-text-primary',
              'font-body text-base',
              'transition-all duration-300 ease-out-expo',
              'focus:outline-none focus:border-aurora-cyan/50 focus:shadow-glow-sm',
              'hover:border-white/20',
              error && 'border-red-500/50',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="text-text-tertiary bg-void">
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-void text-text-primary"
              >
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Custom dropdown arrow */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-text-tertiary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
          <p className="text-sm text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select };
🎨 components/ui/Chip.tsx
TypeScript

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

export function Chip({ label, selected = false, onClick, disabled = false }: ChipProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium',
        'border transition-all duration-300 ease-out-expo',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-void',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        selected
          ? 'bg-aurora-gradient text-void border-transparent'
          : 'bg-surface-2 text-text-secondary border-white/10 hover:border-aurora-cyan/30 hover:text-text-primary'
      )}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {label}
    </motion.button>
  );
}
🎨 components/ui/Toast.tsx
TypeScript

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
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  const colors = {
    success: 'border-emerald-500/50 text-emerald-400',
    error: 'border-red-500/50 text-red-400',
    info: 'border-aurora-cyan/50 text-aurora-cyan',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className={cn(
            'fixed bottom-6 left-1/2 -translate-x-1/2 z-50',
            'glass-elevated px-6 py-4 rounded-2xl',
            'flex items-center gap-3 min-w-[300px]',
            'border-l-4',
            colors[type]
          )}
          role="alert"
          aria-live="polite"
        >
          <span className={colors[type]}>{icons[type]}</span>
          <p className="text-text-primary font-medium">{message}</p>
          <button
            onClick={onClose}
            className="ml-auto text-text-tertiary hover:text-text-primary transition-colors"
            aria-label="Dismiss notification"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
🎨 components/ui/GlassCard.tsx
TypeScript

'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  variant?: 'default' | 'elevated' | 'interactive';
  hasAnimatedBorder?: boolean;
  className?: string;
}

export function GlassCard({
  children,
  variant = 'default',
  hasAnimatedBorder = false,
  className,
  ...props
}: GlassCardProps) {
  const variants = {
    default: 'glass',
    elevated: 'glass-elevated',
    interactive: cn(
      'glass cursor-pointer',
      'transition-all duration-500 ease-out-expo',
      'hover:bg-surface-3 hover:border-aurora-cyan/20',
      'hover:shadow-glow-sm hover:-translate-y-1'
    ),
  };

  return (
    <motion.div
      className={cn(
        'relative rounded-3xl overflow-hidden',
        variants[variant],
        hasAnimatedBorder && 'animated-border',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
✨ components/effects/AuroraBlob.tsx
TypeScript

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AuroraBlobProps {
  className?: string;
}

export function AuroraBlob({ className }: AuroraBlobProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Primary aurora blob */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary aurora blob */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(236,72,153,0.2) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Tertiary accent blob */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(34,211,238,0.1) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 80, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  );
}
✨ components/effects/SectionReveal.tsx
TypeScript

'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUpVariants } from '@/lib/animations';

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
✨ components/effects/NoiseTexture.tsx
TypeScript

'use client';

export function NoiseTexture() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
      aria-hidden="true"
    />
  );
}
🧭 components/layout/Navbar.tsx
TypeScript

'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { href: '#destinations', label: 'Destinations' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#membership', label: 'Membership' },
  { href: '#testimonials', label: 'Stories' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'transition-colors duration-500'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={cn(
            'absolute inset-0 transition-all duration-500',
            isScrolled ? 'bg-void/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
          )}
        />
        
        <nav className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Aurora Luxe Travel - Home"
            >
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-aurora-gradient rounded-xl opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-[2px] bg-void rounded-[10px] flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-gradient">A</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="font-display font-semibold text-text-primary tracking-tight">
                  AURORA
                </span>
                <span className="font-display font-light text-text-secondary ml-1.5 tracking-widest text-sm">
                  LUXE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-300',
                    activeSection === link.href.replace('#', '')
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {link.label}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-aurora-gradient rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <Button
                variant="primary"
                size="sm"
                className="hidden sm:flex"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Itinerary
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center text-text-primary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="relative w-6 h-4">
                  <motion.span
                    className="absolute left-0 top-0 w-full h-0.5 bg-current rounded-full"
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 7 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-current rounded-full"
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-current rounded-full"
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -7 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        className={cn(
          'fixed inset-0 z-40 lg:hidden',
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
      >
        <motion.div
          className="absolute inset-0 bg-void/95 backdrop-blur-xl"
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        
        <motion.nav
          className="relative h-full flex flex-col items-center justify-center gap-8"
          variants={{
            open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
            closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
          }}
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: 20 },
              }}
            >
              <Link
                href={link.href}
                className="text-3xl font-display font-medium text-text-primary hover:text-gradient transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: 20 },
            }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request Itinerary
            </Button>
          </motion.div>
        </motion.nav>
      </motion.div>

      {/* Floating Mobile CTA */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 sm:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          variant="primary"
          size="md"
          className="shadow-glow-md rounded-full px-6"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Inquire
        </Button>
      </motion.div>
    </>
  );
}
🦶 components/layout/Footer.tsx
TypeScript

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const footerLinks = {
  destinations: [
    { label: 'Maldives', href: '#' },
    { label: 'Swiss Alps', href: '#' },
    { label: 'Tokyo', href: '#' },
    { label: 'Dubai', href: '#' },
    { label: 'Kenya Safari', href: '#' },
    { label: 'Mediterranean', href: '#' },
  ],
  services: [
    { label: 'Private Aviation', href: '#' },
    { label: 'Yacht Charters', href: '#' },
    { label: 'Culinary Tours', href: '#' },
    { label: 'Wellness Retreats', href: '#' },
    { label: 'Event Planning', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Membership', href: '#membership' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-void border-t border-white/5">
      {/* Gradient fade at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-aurora-gradient opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-aurora-gradient rounded-xl opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-[2px] bg-void rounded-[10px] flex items-center justify-center">
                  <span className="text-xl font-display font-bold text-gradient">A</span>
                </div>
              </div>
              <div>
                <span className="font-display font-semibold text-text-primary tracking-tight text-lg">
                  AURORA
                </span>
                <span className="font-display font-light text-text-secondary ml-1.5 tracking-widest">
                  LUXE
                </span>
              </div>
            </Link>
            
            <p className="mt-6 text-text-secondary max-w-sm leading-relaxed">
              Crafting extraordinary journeys for those who seek the exceptional. 
              Where every moment is curated, every detail perfected.
            </p>

            <div className="flex items-center gap-4 mt-8">
              {['instagram', 'linkedin', 'twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-aurora-cyan hover:border-aurora-cyan/30 transition-colors duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  {social === 'instagram' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )}
                  {social === 'linkedin' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )}
                  {social === 'twitter' && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-medium text-text-primary mb-6 text-sm tracking-wider uppercase">
              Destinations
            </h4>
            <ul className="space-y-4">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-aurora-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-text-primary mb-6 text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-aurora-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-text-primary mb-6 text-sm tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-aurora-cyan transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-tertiary text-sm">
              © {currentYear} Aurora Luxe Travel. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-text-tertiary">
              <Link href="#" className="hover:text-text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-text-secondary transition-colors">
                Terms of Service
              </Link>
              <span className="text-text-tertiary/50">|</span>
              <span>Images via Unsplash</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
🌟 components/sections/Hero.tsx
TypeScript

'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { AuroraBlob } from '@/components/effects/AuroraBlob';
import { heroTextVariants } from '@/lib/animations';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=2400&h=1400&fit=crop&q=85"
          alt="Luxury resort with infinity pool overlooking ocean"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/50 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-void/60" />
      </motion.div>

      {/* Aurora Effect */}
      <AuroraBlob className="z-10" />

      {/* Noise Texture */}
      <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none noise-overlay" />

      {/* Content */}
      <motion.div 
        className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        {/* Eyebrow */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-aurora-cyan">
            <span className="w-2 h-2 rounded-full bg-aurora-cyan animate-pulse" />
            Curating Extraordinary Since 2008
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
          className="font-display font-bold text-display-xl text-text-primary mb-6"
        >
          Beyond
          <br />
          <span className="text-gradient">First Class.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-text-secondary mb-10 leading-relaxed"
        >
          Where personal concierges orchestrate impossible itineraries, 
          and every journey becomes your most treasured story.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            rightIcon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            }
          >
            Design My Trip
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Destinations
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-aurora-cyan"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-20" />
    </section>
  );
}
🗺️ components/sections/Destinations.tsx
TypeScript

'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { destinations } from '@/data/destinations';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionReveal } from '@/components/effects/SectionReveal';
import { formatCurrency } from '@/lib/utils';
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations';

export function Destinations() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="destinations"
      className="relative py-section overflow-hidden"
      aria-labelledby="destinations-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-medium text-aurora-cyan tracking-widest uppercase mb-4 block">
            Curated Escapes
          </span>
          <h2
            id="destinations-heading"
            className="font-display font-bold text-display-lg text-text-primary mb-6"
          >
            Destinations That
            <br />
            <span className="text-gradient">Define Luxury</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            From private atolls to alpine sanctuaries, each destination is selected 
            for its ability to deliver transformative experiences.
          </p>
        </SectionReveal>

        {/* Destinations Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={staggerItemVariants}
              onMouseEnter={() => setHoveredId(destination.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <GlassCard
                variant="interactive"
                className="group h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <Image
                    src={destination.imageUrl}
                    alt={`${destination.name} - ${destination.vibe}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-60" />
                  
                  {/* Region Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full glass text-xs font-medium text-text-primary">
                      {destination.region}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full bg-aurora-cyan/20 text-aurora-cyan text-xs font-medium">
                      From {formatCurrency(destination.priceFrom)}
                    </span>
                  </div>

                  {/* Shimmer Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: hoveredId === destination.id ? '100%' : '-100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-semibold text-xl text-text-primary mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-text-secondary mb-4 line-clamp-2">
                    {destination.vibe}
                  </p>

                  {/* Highlights - Reveal on Hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredId === destination.id ? 'auto' : 0,
                      opacity: hoveredId === destination.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      {destination.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                          <svg className="w-4 h-4 text-aurora-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* View Button */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-aurora-cyan font-medium text-sm"
                    animate={{ x: hoveredId === destination.id ? 4 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Explore Destination
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
💎 components/sections/Experiences.tsx
TypeScript

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '@/data/experiences';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionReveal } from '@/components/effects/SectionReveal';
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations';

export function Experiences() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experiences"
      className="relative py-section overflow-hidden"
      aria-labelledby="experiences-heading"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aurora-violet/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-medium text-aurora-violet tracking-widest uppercase mb-4 block">
            Signature Collection
          </span>
          <h2
            id="experiences-heading"
            className="font-display font-bold text-display-lg text-text-primary mb-6"
          >
            Experiences Beyond
            <br />
            <span className="text-gradient">Imagination</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            Extraordinary journeys crafted for those who believe the finest things 
            in life are worth the pursuit.
          </p>
        </SectionReveal>

        {/* Experiences Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={staggerItemVariants}
              className={index === 0 ? 'lg:col-span-2' : ''}
            >
              <GlassCard
                variant="interactive"
                className="h-full group"
                whileHover={{ y: -4 }}
              >
                <div className={`p-8 ${index === 0 ? 'lg:flex lg:items-center lg:gap-12' : ''}`}>
                  {/* Icon */}
                  <div className={`${index === 0 ? 'lg:flex-shrink-0' : ''}`}>
                    <div className="w-16 h-16 rounded-2xl bg-aurora-gradient flex items-center justify-center text-3xl mb-6 lg:mb-0 group-hover:shadow-glow-sm transition-shadow duration-500">
                      {experience.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <h3 className="font-display font-semibold text-xl text-text-primary">
                        {experience.title}
                      </h3>
                      <span className="text-sm text-aurora-cyan font-medium">
                        {experience.duration}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Included Items */}
                    <div className="flex flex-wrap gap-2">
                      {experience.included.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-surface-2 text-text-secondary text-sm border border-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Animated Border Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-aurora-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
👑 components/sections/Tiers.tsx
TypeScript

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { tiers } from '@/data/tiers';
import { Button } from '@/components/ui/Button';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionReveal } from '@/components/effects/SectionReveal';
import { cn } from '@/lib/utils';
import { staggerContainerVariants, staggerItemVariants } from '@/lib/animations';

export function Tiers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const accentColors = {
    cyan: {
      text: 'text-aurora-cyan',
      bg: 'bg-aurora-cyan/10',
      border: 'border-aurora-cyan/30',
      shadow: 'shadow-glow-sm',
    },
    violet: {
      text: 'text-aurora-violet',
      bg: 'bg-aurora-violet/10',
      border: 'border-aurora-violet/30',
      shadow: 'shadow-glow-md',
    },
    gold: {
      text: 'text-gold',
      bg: 'bg-gold/10',
      border: 'border-gold/30',
      shadow: 'shadow-glow-gold',
    },
  };

  return (
    <section
      id="membership"
      className="relative py-section overflow-hidden"
      aria-labelledby="membership-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-aurora-magenta/5 to-void pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-medium text-aurora-magenta tracking-widest uppercase mb-4 block">
            Membership Tiers
          </span>
          <h2
            id="membership-heading"
            className="font-display font-bold text-display-lg text-text-primary mb-6"
          >
            Choose Your
            <br />
            <span className="text-gradient">Level of Luxury</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            Each tier unlocks progressively exclusive experiences, with dedicated 
            concierge teams committed to exceeding your expectations.
          </p>
        </SectionReveal>

        {/* Tiers Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {tiers.map((tier) => {
            const colors = accentColors[tier.accentColor];
            
            return (
              <motion.div key={tier.id} variants={staggerItemVariants}>
                <GlassCard
                  variant={tier.featured ? 'elevated' : 'default'}
                  hasAnimatedBorder={tier.featured}
                  className={cn(
                    'h-full relative overflow-visible',
                    tier.featured && 'lg:-my-4 lg:py-4'
                  )}
                >
                  {/* Featured Badge */}
                  {tier.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 rounded-full bg-aurora-gradient text-void text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    {/* Tier Name */}
                    <div className="text-center mb-8">
                      <div className={cn(
                        'inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4',
                        colors.bg
                      )}>
                        {tier.id === 'silver' && (
                          <svg className={cn('w-8 h-8', colors.text)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        )}
                        {tier.id === 'black' && (
                          <svg className={cn('w-8 h-8', colors.text)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                        )}
                        {tier.id === 'obsidian' && (
                          <svg className={cn('w-8 h-8', colors.text)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                      </div>
                      <h3 className={cn('font-display font-bold text-2xl mb-1', colors.text)}>
                        {tier.name}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Price Indicator */}
                    <div className="text-center mb-8">
                      <span className="font-display text-3xl font-bold text-text-primary">
                        {tier.priceIndicator}
                      </span>
                    </div>

                    {/* Perks List */}
                    <ul className="space-y-4 mb-8">
                      {tier.perks.map((perk, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg
                            className={cn('w-5 h-5 flex-shrink-0 mt-0.5', colors.text)}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-text-secondary">{perk}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      variant={tier.featured ? 'primary' : 'secondary'}
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {tier.id === 'obsidian' ? 'Request Invitation' : 'Get Started'}
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
💬 components/sections/Testimonials.tsx
TypeScript

'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionReveal } from '@/components/effects/SectionReveal';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="testimonials"
      className="relative py-section overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={containerRef}>
        {/* Section Header */}
        <SectionReveal className="text-center mb-16 lg:mb-20">
          <span className="text-sm font-medium text-aurora-cyan tracking-widest uppercase mb-4 block">
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-display-lg text-text-primary mb-6"
          >
            Journeys That
            <br />
            <span className="text-gradient">Became Legends</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            Don't take our word for it. Hear from travelers who've experienced 
            the Aurora Luxe difference firsthand.
          </p>
        </SectionReveal>

        {/* Desktop: Card Grid */}
        <motion.div
          className="hidden lg:grid grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <GlassCard key={testimonial.id} variant="default" className="p-8">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-text-primary leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-aurora-gradient flex items-center justify-center text-void font-display font-bold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-medium text-text-primary">{testimonial.author}</p>
                  <p className="text-sm text-text-secondary">{testimonial.title}</p>
                </div>
              </div>

              {/* Destination Tag */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <span className="text-sm text-aurora-cyan">
                  {testimonial.destination}
                </span>
              </div>
            </GlassCard>
          ))}
        </motion.div>

        {/* Mobile: Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard variant="default" className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-text-primary leading-relaxed mb-6">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-aurora-gradient flex items-center justify-center text-void font-display font-bold text-sm">
                      {testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-text-primary text-sm">
                        {testimonials[activeIndex].author}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {testimonials[activeIndex].destination}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all duration-300',
                    index === activeIndex
                      ? 'w-8 bg-aurora-cyan'
                      : 'bg-white/20 hover:bg-white/40'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
📝 components/sections/ConciergeForm.tsx
TypeScript

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Chip } from '@/components/ui/Chip';
import { Button } from '@/components/ui/Button';
import { Toast } from '@/components/ui/Toast';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionReveal } from '@/components/effects/SectionReveal';
import { FormData } from '@/types';

const interests = [
  'Beach & Islands',
  'Mountains & Nature',
  'City Exploration',
  'Culinary Journeys',
  'Wellness & Spa',
  'Adventure Sports',
  'Art & Culture',
  'Wine & Gastronomy',
];

const budgetOptions = [
  { value: '', label: 'Select your budget range' },
  { value: '15000-30000', label: '€15,000 - €30,000' },
  { value: '30000-50000', label: '€30,000 - €50,000' },
  { value: '50000-100000', label: '€50,000 - €100,000' },
  { value: '100000+', label: '€100,000+' },
  { value: 'flexible', label: 'Flexible / Open Budget' },
];

export function ConciergeForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    departureDate: '',
    returnDate: '',
    travelers: 2,
    interests: [],
    budget: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.departureDate) {
      newErrors.departureDate = 'Please select a departure date';
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setShowToast(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      departureDate: '',
      returnDate: '',
      travelers: 2,
      interests: [],
      budget: '',
      notes: '',
    });
  };

  return (
    <section
      id="contact"
      className="relative py-section overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aurora-cyan/5 to-void pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center mb-12 lg:mb-16">
          <span className="text-sm font-medium text-aurora-cyan tracking-widest uppercase mb-4 block">
            Start Your Journey
          </span>
          <h2
            id="contact-heading"
            className="font-display font-bold text-display-lg text-text-primary mb-6"
          >
            Design Your
            <br />
            <span className="text-gradient">Dream Itinerary</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text-secondary">
            Share your vision with us. Our concierge team will craft a 
            personalized proposal within 48 hours.
          </p>
        </SectionReveal>

        {/* Form Card */}
        <SectionReveal delay={0.2}>
          <GlassCard variant="elevated" className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                  required
                />
              </div>

              {/* Dates Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Input
                  label="Departure Date"
                  type="date"
                  value={formData.departureDate}
                  onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                  error={errors.departureDate}
                  required
                />
                <Input
                  label="Return Date"
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                />
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-text-secondary tracking-wide uppercase">
                    Travelers
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          travelers: Math.max(1, prev.travelers - 1),
                        }))
                      }
                      className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-text-primary hover:bg-surface-3 transition-colors"
                      aria-label="Decrease travelers"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="text-2xl font-display font-semibold text-text-primary min-w-[3ch] text-center">
                      {formData.travelers}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          travelers: Math.min(20, prev.travelers + 1),
                        }))
                      }
                      className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-text-primary hover:bg-surface-3 transition-colors"
                      aria-label="Increase travelers"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-text-secondary tracking-wide uppercase">
                  Travel Interests
                </label>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <Chip
                      key={interest}
                      label={interest}
                      selected={formData.interests.includes(interest)}
                      onClick={() => handleInterestToggle(interest)}
                    />
                  ))}
                </div>
              </div>

              {/* Budget */}
              <Select
                label="Budget Range"
                options={budgetOptions}
                
