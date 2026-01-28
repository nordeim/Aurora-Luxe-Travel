This is an exceptional design brief that demands meticulous analysis. The user wants me to take their already-detailed specifications and elevate them into a comprehensive, actionable formal requirements document with even more implementation details.

Let me analyze this through multiple lenses as required by my operating procedure:

Deep Analysis
1. Psychological Lens
Target User: Ultra-high-net-worth individuals (UHNWI) seeking exclusive travel experiences
Cognitive Load: Must feel effortless despite complexity - luxury is about seamlessness
Emotional Journey: Aspiration → Intrigue → Desire → Trust → Action
Status Signaling: The interface itself must communicate exclusivity
2. Technical Lens
Next.js 14/15 App Router with TypeScript
Tailwind CSS 4.0 considerations (or 3.x stable)
Framer Motion for animations (GPU-accelerated transforms)
Performance: Core Web Vitals must be excellent
Image optimization with next/image and proper domains
3. Accessibility Lens
WCAG AAA contrast ratios (especially challenging with dark mode + glassmorphism)
Reduced motion preferences
Keyboard navigation for all interactive elements
Screen reader optimization
Focus management for modals
4. Scalability Lens
Component architecture for reusability
Type safety throughout
Mock data structure that mirrors real API shapes
Easy to extend to multi-page application
Design Direction Deep-Dive
The brief mentions "futuristic luxury" with glassmorphism and neon accents. This is a well-trodden path that can easily become generic. Let me push this further:

Proposed Aesthetic: "Celestial Noir"

Not just dark mode, but a sense of infinite depth - like looking into deep space

The "aurora" isn't just a blob - it's a living, breathing celestial phenomenon

Typography that feels carved from light

Micro-interactions should evoke weightlessness and surgical precision

Gold accents shift toward champagne platinum—cooler, distinctly futuristic rather than warm

Typography Strategy:

Headings benefit from geometric distinctiveness: "Syne" or "Instrument Sans" for modern luxury feel
Body copy needs refined readability: "Plus Jakarta Sans" strikes that balance
Alternative approach: pair "Playfair Display" for editorial prestige with "Inter" for clarity
Color Refinement: The palette moves beyond standard dark mode into something more intentional—near-black foundations with carefully calibrated accent layers that suggest depth and movement. I need to organize this into a formal specification that covers the design system, components, pages, interactions, accessibility, performance, and implementation details. I'll structure it with an executive summary, design specifications, component architecture, page layouts, interaction patterns, accessibility standards, performance benchmarks, implementation guidance, file organization, and a QA checklist.

For image handling, the deprecated Unsplash Source URLs require alternatives—I'll use direct Unsplash photo IDs, Pexels links, or their API for stable, production-ready image references instead.

---

AURORA LUXE TRAVEL — Comprehensive Requirements Specification
Executive Summary
This document defines a production-grade, single-page luxury travel website that transcends conventional design paradigms. We reject the homogenized "glassmorphism + neon gradient" aesthetic that has become the default "futuristic luxury" template. Instead, we commit to "Celestial Noir"—a design language that evokes the infinite depth of space, the precision of haute horlogerie, and the effortless exclusivity of true luxury.

Table of Contents
Design Philosophy & Aesthetic Direction
Design System Specification
Component Architecture
Section-by-Section Specifications
Interaction & Animation Specifications
Accessibility Requirements
Performance Requirements
Technical Implementation Guide
File Structure & Architecture
Quality Assurance Checklist
Complete Implementation Code
1. Design Philosophy & Aesthetic Direction
1.1 Conceptual Foundation: "Celestial Noir"
Dimension	Conventional Approach	Our Approach
Dark Mode	Generic #0F0F0F with random gradients	"The Void"—layered blacks with cosmic depth, like gazing into deep space
Glass Effects	Heavy backdrop-blur everywhere	Selective "Ice Vapor"—glass appears only where it creates visual hierarchy
Neon Accents	Saturated cyan/purple borders	"Bioluminescence"—subtle, organic glows that pulse like living organisms
Gold	Warm, expected luxury gold	"Champagne Platinum"—cooler, suggesting space-age refinement
Typography	Inter/Space Grotesk (safe)	"Instrument Serif" + "Geist"—editorial luxury meets Swiss precision
Motion	Bounce/spring physics	"Zero Gravity"—eased, floating, as if objects have mass in low gravity
1.2 Psychological Journey Mapping
text

┌─────────────────────────────────────────────────────────────────────────────┐
│  ARRIVAL (0-3s)                                                             │
│  ├── Emotional State: Curiosity                                             │
│  ├── UI Response: Hero reveals with cinematic timing                        │
│  └── Goal: Establish "this is different"                                    │
│                                                                             │
│  EXPLORATION (3-30s)                                                        │
│  ├── Emotional State: Aspiration → Desire                                   │
│  ├── UI Response: Smooth scroll reveals, parallax depth, micro-interactions │
│  └── Goal: "I want this lifestyle"                                          │
│                                                                             │
│  ENGAGEMENT (30s-2min)                                                      │
│  ├── Emotional State: Trust-building                                        │
│  ├── UI Response: Testimonials, tier clarity, form accessibility            │
│  └── Goal: "I trust this brand with my experience"                          │
│                                                                             │
│  CONVERSION (2min+)                                                         │
│  ├── Emotional State: Decision                                              │
│  ├── UI Response: Friction-free form, immediate feedback                    │
│  └── Goal: Submit request with confidence                                   │
└─────────────────────────────────────────────────────────────────────────────┘
1.3 The "Unforgettable" Factor
What will users remember?

The aurora that seems to breathe behind the hero
The destination cards that feel like they're floating in zero gravity
The form that makes them feel like they're already being served by a concierge
The overall sense that they've stepped into a different dimension of travel
2. Design System Specification
2.1 Color Palette
TypeScript

// Semantic Color Tokens
const colors = {
  // Void Spectrum (Backgrounds)
  void: {
    DEFAULT: '#050506',      // True void
    shallow: '#0A0A0C',       // Primary background
    surface: '#0F0F12',       // Elevated surfaces
    elevated: '#16161A',      // Cards, modals
  },
  
  // Glass (Transparency layers)
  glass: {
    subtle: 'rgba(255, 255, 255, 0.02)',
    light: 'rgba(255, 255, 255, 0.04)',
    medium: 'rgba(255, 255, 255, 0.08)',
    strong: 'rgba(255, 255, 255, 0.12)',
  },
  
  // Text Hierarchy
  text: {
    primary: '#F8FAFC',       // 98% white (not pure—easier on eyes)
    secondary: '#94A3B8',     // Muted but readable
    tertiary: '#64748B',      // Subtle labels
    inverse: '#050506',       // For light surfaces
  },
  
  // Accent Spectrum (The Aurora)
  aurora: {
    cyan: '#22D3EE',
    teal: '#2DD4BF',
    purple: '#A855F7',
    magenta: '#EC4899',
    blue: '#3B82F6',
  },
  
  // Glow variants (for box-shadow, text-shadow)
  glow: {
    cyan: 'rgba(34, 211, 238, 0.4)',
    purple: 'rgba(168, 85, 247, 0.4)',
    magenta: 'rgba(236, 72, 153, 0.4)',
  },
  
  // Champagne Platinum (accent highlight)
  champagne: {
    DEFAULT: '#C9B896',
    glow: 'rgba(201, 184, 150, 0.3)',
  },
  
  // Semantic States
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
}
2.2 Typography System
Font Stack:

CSS

--font-heading: 'Instrument Serif', Georgia, serif;
--font-body: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'Geist Mono', 'SF Mono', monospace;
Why These Fonts?

Instrument Serif: Editorial luxury, unexpected for tech—creates differentiation
Geist: Vercel's typeface—ultra-refined, excellent rendering, modern without being cold
Type Scale (with custom line-heights for luxury feel):

Token	Size	Line Height	Letter Spacing	Usage
display-2xl	72px/4.5rem	1.0	-0.03em	Hero headline
display-xl	60px/3.75rem	1.05	-0.025em	Section headlines
display-lg	48px/3rem	1.1	-0.02em	Large headings
heading-xl	36px/2.25rem	1.2	-0.015em	Card titles
heading-lg	30px/1.875rem	1.25	-0.01em	Subsections
heading-md	24px/1.5rem	1.3	-0.005em	Component titles
body-lg	18px/1.125rem	1.6	0	Lead paragraphs
body	16px/1rem	1.6	0	Body text
body-sm	14px/0.875rem	1.5	0	Secondary text
caption	12px/0.75rem	1.4	0.02em	Labels, captions
overline	11px/0.6875rem	1.2	0.1em	Overlines (uppercase)
2.3 Spacing System
8px Base Unit with Expanded Scale:

TypeScript

const spacing = {
  px: '1px',
  0.5: '2px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
  40: '160px',
  48: '192px',
  // Luxury needs breathing room
  section: '120px', // Vertical section padding
  'section-mobile': '64px',
}
2.4 Borders, Radii & Shadows
TypeScript

const borderRadius = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  full: '9999px',
}

const boxShadow = {
  // Elevation system
  'glow-sm': '0 0 20px -5px var(--glow-color)',
  'glow-md': '0 0 40px -10px var(--glow-color)',
  'glow-lg': '0 0 60px -15px var(--glow-color)',
  
  // Glass shadows (inset for depth)
  'glass-inset': 'inset 0 1px 1px rgba(255,255,255,0.1)',
  
  // Card elevation
  'card': '0 4px 24px -4px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)',
  'card-hover': '0 8px 40px -8px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
  
  // Conic gradient border effect (via pseudo-element)
  // Implemented via @property and conic-gradient animation
}
2.5 Animation Tokens
TypeScript

const animation = {
  // Durations
  duration: {
    instant: '100ms',
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    slower: '700ms',
    slowest: '1000ms',
  },
  
  // Easings (custom cubic-beziers for luxury feel)
  easing: {
    // Smooth, decelerating — "landing" feel
    out: 'cubic-bezier(0.22, 1, 0.36, 1)',
    // Smooth, accelerating — "takeoff" feel
    in: 'cubic-bezier(0.55, 0, 1, 0.45)',
    // Subtle bounce for micro-interactions
    bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    // Slow reveal for sections
    reveal: 'cubic-bezier(0.16, 1, 0.3, 1)',
    // Linear for looping animations
    linear: 'linear',
  },
}
3. Component Architecture
3.1 Component Hierarchy
text

┌─────────────────────────────────────────────────────────────────────────┐
│ LAYOUT LAYER                                                            │
│ └── RootLayout (fonts, metadata, noise overlay, global styles)          │
│     └── Page                                                            │
│         ├── Navbar (sticky, glass)                                      │
│         ├── Hero                                                        │
│         ├── Destinations                                                │
│         ├── Experiences                                                 │
│         ├── Membership                                                  │
│         ├── Testimonials                                                │
│         ├── ConciergeForm                                               │
│         └── Footer                                                      │
├─────────────────────────────────────────────────────────────────────────┤
│ UI PRIMITIVES (Reusable)                                                │
│ ├── Button (variants: primary, secondary, ghost, glow)                  │
│ ├── Card (variants: destination, experience, tier, testimonial)         │
│ ├── Badge (for pricing, labels)                                         │
│ ├── Input / Select / Textarea                                           │
│ ├── ChipGroup (for interests selection)                                 │
│ ├── GlassPanel                                                          │
│ ├── AnimatedBorder                                                      │
│ ├── GlowOrb (decorative aurora blob)                                    │
│ ├── SectionHeading                                                      │
│ ├── NoiseOverlay (global texture)                                       │
│ └── Toast (for form submission feedback)                                │
├─────────────────────────────────────────────────────────────────────────┤
│ ANIMATION WRAPPERS                                                      │
│ ├── FadeIn (scroll-triggered reveal)                                    │
│ ├── StaggerChildren                                                     │
│ ├── Parallax                                                            │
│ └── FloatingElement                                                     │
└─────────────────────────────────────────────────────────────────────────┘
3.2 Component Specifications
Button Component
Prop	Type	Default	Description
variant	'primary' | 'secondary' | 'ghost' | 'glow'	'primary'	Visual style
size	'sm' | 'md' | 'lg'	'md'	Size variant
icon	ReactNode	—	Optional icon
iconPosition	'left' | 'right'	'right'	Icon placement
loading	boolean	false	Loading state
glowColor	'cyan' | 'purple' | 'champagne'	'cyan'	Glow accent
Visual States:

Default: Gradient background (cyan → purple), subtle inner shadow
Hover: Brightness increase, glow intensifies, slight scale (1.02)
Active: Scale down (0.98), glow contracts
Focus: Visible focus ring (cyan glow)
Disabled: Opacity 0.5, no interactions
4. Section-by-Section Specifications
4.1 Navbar
Behavior:

Initially transparent, blends with hero
On scroll (>50px): Applies glass effect, slight backdrop-blur, border-bottom
Mobile: Hamburger menu → full-screen overlay with staggered link animation
Structure:

text

┌────────────────────────────────────────────────────────────────────────┐
│ [LOGO: "AURORA LUXE"]          [Destinations] [Experiences]           │
│                                [Membership] [Testimonials]            │
│                                                   [REQUEST ITINERARY] │
└────────────────────────────────────────────────────────────────────────┘
Active Section Highlighting:

Use Intersection Observer on each section
Animate underline/indicator to active link
Smooth transition between states
4.2 Hero Section
Layout:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│     ┌─────────────────────────────────────────────────────────────────┐    │
│     │                   AURORA GLOW ORBS (absolute)                   │    │
│     │          (2-3 blurred gradients, slowly animating)              │    │
│     └─────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│         ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░           │
│         ░                                                     ░           │
│         ░       BEYOND                                        ░           │
│         ░       FIRST CLASS.                                  ░           │
│         ░                                                     ░           │
│         ░       Curated journeys for those who seek           ░           │
│         ░       the extraordinary. Private jets,              ░           │
│         ░       hidden sanctuaries, and moments               ░           │
│         ░       that transcend imagination.                   ░           │
│         ░                                                     ░           │
│         ░       [ Design My Trip → ]  [ Explore ↓ ]           ░           │
│         ░                                                     ░           │
│         ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░           │
│                                                                             │
│     ┌─────────────────────────────────────────────────────────────────┐    │
│     │                   HERO IMAGE (absolute, z-0)                    │    │
│     │          (luxury travel image with gradient overlay)            │    │
│     └─────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│         ↓ Scroll indicator (animated bounce)                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
Animation Sequence (on mount):

Background image fades in (0.5s)
Aurora orbs fade in and begin movement (0.3s delay)
Headline letters stagger in from below (0.6s delay, 50ms stagger)
Subtext fades in (1s delay)
CTAs fade in and slide up (1.2s delay, 100ms stagger)
Scroll indicator fades in (2s delay)
4.3 Destinations Grid
Data Structure:

TypeScript

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
    luxury: string; // e.g., "Overwater villas"
  };
  featured: boolean;
}
Mock Data:

TypeScript

const destinations: Destination[] = [
  {
    id: '1',
    slug: 'maldives-serenity',
    name: 'Maldives',
    region: 'Indian Ocean',
    tagline: 'Where the ocean meets the infinite sky',
    priceFrom: 12500,
    currency: 'EUR',
    imageUrl: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80',
    quickFacts: {
      climate: 'Tropical, 28-32°C',
      bestTime: 'November - April',
      luxury: 'Overwater villas with private infinity pools',
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'tokyo-after-dark',
    name: 'Tokyo',
    region: 'Japan',
    tagline: 'Neon dreams and ancient whispers',
    priceFrom: 8900,
    currency: 'EUR',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80',
    quickFacts: {
      climate: 'Temperate, 5-30°C',
      bestTime: 'March - May, Sept - Nov',
      luxury: 'Private tea ceremonies, Michelin omakase',
    },
    featured: true,
  },
  {
    id: '3',
    slug: 'swiss-alpine-escape',
    name: 'Swiss Alps',
    region: 'Switzerland',
    tagline: 'Peaks that touch the heavens',
    priceFrom: 15800,
    currency: 'EUR',
    imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80',
    quickFacts: {
      climate: 'Alpine, -10 to 25°C',
      bestTime: 'December - March, June - Sept',
      luxury: 'Heli-skiing, private chalet with butler',
    },
    featured: false,
  },
  {
    id: '4',
    slug: 'dubai-opulence',
    name: 'Dubai',
    region: 'UAE',
    tagline: 'Where ambition touches the clouds',
    priceFrom: 9500,
    currency: 'EUR',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    quickFacts: {
      climate: 'Desert, 25-45°C',
      bestTime: 'November - March',
      luxury: 'Private desert camps, yacht parties',
    },
    featured: false,
  },
  {
    id: '5',
    slug: 'serengeti-wilderness',
    name: 'Serengeti',
    region: 'Tanzania',
    tagline: 'The heartbeat of wild Africa',
    priceFrom: 18200,
    currency: 'EUR',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80',
    quickFacts: {
      climate: 'Savanna, 20-30°C',
      bestTime: 'June - October',
      luxury: 'Fly-in safaris, exclusive mobile camps',
    },
    featured: true,
  },
  {
    id: '6',
    slug: 'amalfi-coast-romance',
    name: 'Amalfi Coast',
    region: 'Italy',
    tagline: 'La dolce vita, perfected',
    priceFrom: 11200,
    currency: 'EUR',
    imageUrl: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1200&q=80',
    quickFacts: {
      climate: 'Mediterranean, 15-30°C',
      bestTime: 'May - October',
      luxury: 'Private yacht, cliff-side dining',
    },
    featured: false,
  },
];
Card Interaction:

Hover (Desktop):

Card lifts (translateY: -8px, translateZ: 20px)
Shimmer effect sweeps across (diagonal gradient animation)
Quick facts panel slides up from bottom (overlays lower 40%)
Border glows (conic gradient animation)
Image scale increases slightly (1.05)
Mobile:

Tap to expand quick facts
Long-press for haptic feedback (if supported)
4.4 Signature Experiences
Data Structure:

TypeScript

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
Mock Data:

TypeScript

const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Private Jet Odyssey',
    subtitle: 'Skip the lines, own the skies',
    description: 'Seamless multi-destination journeys aboard the world\'s finest private aircraft. From Gulfstream G700s to custom Boeing BBJs.',
    imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80',
    duration: '3-14 days',
    included: ['Dedicated flight crew', 'Custom catering', 'Ground transfers'],
    startingPrice: 45000,
  },
  {
    id: 'exp-2',
    title: 'Superyacht Sojourns',
    subtitle: 'Mediterranean mastery',
    description: 'Charter the world\'s most exclusive vessels. Wake up in Monaco, lunch in Portofino, dinner in Saint-Tropez.',
    imageUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80',
    duration: '7-21 days',
    included: ['Full crew', 'Tender & toys', 'Gourmet chef'],
    startingPrice: 125000,
  },
  {
    id: 'exp-3',
    title: 'Michelin Odyssey',
    subtitle: 'Taste the impossible',
    description: 'Private tables at the world\'s most exclusive restaurants. Kitchen tours with legendary chefs. Curated wine experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    duration: '5-10 days',
    included: ['Reserved private rooms', 'Sommelier pairing', 'Chef meetings'],
    startingPrice: 18500,
  },
  {
    id: 'exp-4',
    title: 'Celestial Escapes',
    subtitle: 'Desert stargazing retreats',
    description: 'Remote luxury camps in the world\'s darkest skies. Private astronomers, gourmet desert cuisine, and infinite silence.',
    imageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80',
    duration: '4-7 days',
    included: ['Luxury tented suites', 'Private telescope', 'Guided expeditions'],
    startingPrice: 12800,
  },
  {
    id: 'exp-5',
    title: 'Alpine Wellness',
    subtitle: 'Summits of serenity',
    description: 'Exclusive mountain retreats combining adventure and restoration. Heli-skiing, thermal spas, and panoramic isolation.',
    imageUrl: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1200&q=80',
    duration: '5-14 days',
    included: ['Private chalet', 'Personal guide', 'Spa treatments'],
    startingPrice: 22000,
  },
];
Layout: Horizontal Scroll (Mobile) / Staggered Grid (Desktop)

4.5 Membership Tiers
TypeScript

interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  annualFee: number | null; // null = "By invitation"
  perks: string[];
  highlighted: boolean;
}

const tiers: MembershipTier[] = [
  {
    id: 'silver',
    name: 'Silver Circle',
    tagline: 'Your journey begins',
    annualFee: 2500,
    perks: [
      'Dedicated travel consultant',
      'Priority booking access',
      '10% preferred partner discounts',
      '24/7 concierge support',
      'Quarterly destination briefings',
    ],
    highlighted: false,
  },
  {
    id: 'black',
    name: 'Black Card',
    tagline: 'Elevated beyond expectation',
    annualFee: 12000,
    perks: [
      'Everything in Silver Circle',
      'Guaranteed upgrades',
      'Airport fast-track globally',
      'Emergency trip salvage',
      'Annual $5,000 travel credit',
      'Exclusive event invitations',
      'Complimentary travel insurance',
    ],
    highlighted: true,
  },
  {
    id: 'obsidian',
    name: 'Obsidian Society',
    tagline: 'By invitation only',
    annualFee: null,
    perks: [
      'Everything in Black Card',
      'Private jet access (50 hours)',
      'Superyacht allocation',
      'Real estate previews',
      'Family office integration',
      'Bespoke experience creation',
      'Global emergency extraction',
      'Legacy planning services',
    ],
    highlighted: false,
  },
];
Visual Treatment:

Silver: Glass card, silver/gray gradient border
Black: Elevated glass, animated conic gradient border (cyan → purple)
Obsidian: Solid obsidian black, champagne gold accents, "exclusive" badge
4.6 Testimonials
TypeScript

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  avatarUrl?: string;
  rating: number; // 1-5
}

const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Aurora Luxe transformed our anniversary trip into something we\'ll relive in our dreams forever. The attention to detail was beyond anything we\'ve experienced.',
    author: 'Alexandra M.',
    title: 'Black Card Member since 2021',
    rating: 5,
  },
  {
    id: 'test-2',
    quote: 'When our flight was cancelled in a remote location, their team had a private jet ready within 3 hours. That\'s when I knew this was different.',
    author: 'Marcus Chen',
    title: 'Obsidian Society',
    rating: 5,
  },
  {
    id: 'test-3',
    quote: 'The Michelin Odyssey was a revelation. Private dinners with chefs I\'ve watched for years, in settings I didn\'t know existed.',
    author: 'Isabelle Laurent',
    title: 'Black Card Member',
    rating: 5,
  },
];
4.7 Concierge Form
Fields:

Field	Type	Validation	Notes
Name	text	required, min 2 chars	
Email	email	required, valid email	
Dates	text	optional	Free-form for flexibility
Travelers	select	required	Options: 1, 2, 3-4, 5-8, 9+
Interests	chip-group	min 1 required	Multi-select
Budget	select	required	€5k-15k, €15k-50k, €50k-150k, €150k+
Notes	textarea	optional	max 500 chars
Interest Chips:

TypeScript

const interestOptions = [
  'Beach & Ocean',
  'Mountains & Adventure',
  'Cultural Immersion',
  'Culinary Journeys',
  'Wellness & Spa',
  'Safari & Wildlife',
  'Yachting',
  'Private Aviation',
  'Art & Architecture',
  'Wine & Spirits',
];
Form Behavior:

Real-time validation with subtle shake on error
Submit button shows loading spinner
On success: Form slides up, "Request Received" confirmation slides in
Toast notification with confetti-like aurora particles
5. Interaction & Animation Specifications
5.1 Framer Motion Variants
TypeScript

// Section reveal (used for all sections)
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom reveal ease
    },
  },
};

// Stagger children
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Card hover (3D tilt)
const cardHoverVariants = {
  rest: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    z: 0,
  },
  hover: {
    scale: 1.02,
    z: 20,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// Button glow pulse
const glowPulseVariants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

// Aurora blob float
const floatVariants = {
  animate: {
    x: [0, 30, -20, 0],
    y: [0, -40, 20, 0],
    scale: [1, 1.1, 0.95, 1],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
5.2 CSS Animations
CSS

/* Conic gradient border rotation */
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotate-gradient {
  to {
    --angle: 360deg;
  }
}

.animated-border {
  --angle: 0deg;
  background: conic-gradient(
    from var(--angle),
    #22D3EE,
    #A855F7,
    #EC4899,
    #22D3EE
  );
  animation: rotate-gradient 4s linear infinite;
}

/* Shimmer effect */
@keyframes shimmer {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

.shimmer::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 40%,
    rgba(255,255,255,0.1) 50%,
    transparent 60%
  );
  animation: shimmer 3s infinite;
}

/* Aurora gradient animation */
@keyframes aurora {
  0%, 100% { 
    background-position: 0% 50%;
    filter: blur(80px);
  }
  50% { 
    background-position: 100% 50%;
    filter: blur(100px);
  }
}

.aurora-blob {
  background: linear-gradient(
    135deg,
    #22D3EE 0%,
    #A855F7 50%,
    #EC4899 100%
  );
  background-size: 200% 200%;
  animation: aurora 15s ease-in-out infinite;
}

/* Noise texture overlay */
.noise-overlay {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
}
6. Accessibility Requirements
6.1 WCAG AAA Compliance
Requirement	Implementation
Color Contrast	Text on dark bg: minimum 7:1 ratio. All text passes WCAG AAA.
Focus States	Visible focus ring (2px solid cyan glow) on all interactive elements
Keyboard Nav	Full tab navigation, Enter/Space activation, Escape to close modals
Reduced Motion	prefers-reduced-motion: reduce disables all animations
Screen Readers	Semantic HTML, ARIA labels on icons, live regions for dynamic content
Skip Links	"Skip to main content" link at top of page
6.2 Semantic Structure
HTML

<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
<main role="main" id="main-content">
  <section aria-labelledby="hero-heading">
  <section aria-labelledby="destinations-heading">
  ...
<footer role="contentinfo">
6.3 Form Accessibility
Labels associated with inputs via htmlFor
Error messages linked via aria-describedby
Required fields marked with aria-required="true"
Form validation errors announced via aria-live="polite"
7. Performance Requirements
7.1 Core Web Vitals Targets
Metric	Target	Strategy
LCP	< 2.5s	Preload hero image, optimize fonts, server components
FID	< 100ms	Minimize JS bundle, defer non-critical scripts
CLS	< 0.1	Reserve space for images, font-display: swap
INP	< 200ms	Optimize event handlers, use React transitions
7.2 Optimization Strategies
Images:

Use next/image with priority for hero
Lazy load below-fold images
WebP format with AVIF fallback
Blur placeholder (blurDataURL)
Fonts:

Subset fonts (latin only)
Use next/font for automatic optimization
font-display: swap to prevent FOIT
JavaScript:

Tree-shake Framer Motion (import only needed)
Dynamic imports for form section
No heavy date libraries (use native Intl)
CSS:

Tailwind purge unused styles
Critical CSS inlined
Reduce glass blur on mobile (performance)
8. Technical Implementation Guide
8.1 Next.js Configuration
TypeScript

// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default config;
8.2 Tailwind Configuration
TypeScript

// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#050506',
          shallow: '#0A0A0C',
          surface: '#0F0F12',
          elevated: '#16161A',
        },
        aurora: {
          cyan: '#22D3EE',
          purple: '#A855F7',
          magenta: '#EC4899',
        },
        champagne: '#C9B896',
      },
      fontFamily: {
        serif: ['var(--font-instrument-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'aurora': 'aurora 15s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'float': 'float 20s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.5)',
        'glow-purple': '0 0 40px -10px rgba(168, 85, 247, 0.5)',
        'glass': 'inset 0 1px 1px rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
9. File Structure & Architecture
text

aurora-luxe-travel/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata
│   ├── page.tsx                # Main page component
│   ├── globals.css             # Global styles, CSS variables
│   └── destinations/
│       └── [slug]/
│           └── page.tsx        # Optional destination detail page
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
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   ├── ChipGroup.tsx
│   │   ├── GlassPanel.tsx
│   │   ├── AnimatedBorder.tsx
│   │   ├── GlowOrb.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── NoiseOverlay.tsx
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
│   ├── utils.ts                # cn() helper, formatCurrency, etc.
│   └── hooks/
│       ├── useScrollSpy.ts
│       └── useReducedMotion.ts
├── public/
│   ├── favicon.svg
│   └── og-image.jpg
├── tailwind.config.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
10. Quality Assurance Checklist
Pre-Delivery Verification
 Visual Fidelity: Every section matches specification
 Responsive: Tested on 375px (mobile), 768px (tablet), 1440px (desktop), 2560px (4K)
 Performance: Lighthouse score ≥90 for all metrics
 Accessibility: axe DevTools shows 0 violations
 Keyboard: Full navigation possible without mouse
 Reduced Motion: Animations disabled when preference set
 Cross-Browser: Chrome, Safari, Firefox, Edge
 Forms: Validation works, toast appears on submit
 Scroll Spy: Navbar correctly highlights active section
 Images: All load, have alt text, are optimized
 Typography: Fonts load, hierarchy is clear
 Animations: Smooth 60fps, no jank
 SEO: Title, description, OG tags present
 Build: npm run build succeeds with no errors
11. Complete Implementation Code
Now, let me deliver the complete, production-ready implementation:

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
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.56.0",
    "eslint-config-next": "^14.2.0"
  }
}
next.config.ts
TypeScript

import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

export default config;
tailwind.config.ts
TypeScript

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#050506',
          shallow: '#0A0A0C',
          surface: '#0F0F12',
          elevated: '#16161A',
        },
        aurora: {
          cyan: '#22D3EE',
          teal: '#2DD4BF',
          purple: '#A855F7',
          magenta: '#EC4899',
        },
        champagne: {
          DEFAULT: '#C9B896',
          dark: '#A89670',
        },
      },
      fontFamily: {
        serif: ['var(--font-instrument)', 'Georgia', 'serif'],
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'aurora-slow': 'aurora 20s ease-in-out infinite',
        'aurora-medium': 'aurora 15s ease-in-out infinite',
        'float-slow': 'float 25s ease-in-out infinite',
        'float-medium': 'float 18s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'border-rotate': 'border-rotate 4s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1)',
            opacity: '0.6',
          },
          '33%': { 
            transform: 'translate(30px, -50px) scale(1.1)',
            opacity: '0.8',
          },
          '66%': { 
            transform: 'translate(-20px, 20px) scale(0.9)',
            opacity: '0.5',
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0) rotate(0deg)',
          },
          '50%': { 
            transform: 'translateY(-30px) rotate(3deg)',
          },
        },
        shimmer: {
          '0%': { 
            backgroundPosition: '-200% 0',
          },
          '100%': { 
            backgroundPosition: '200% 0',
          },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'border-rotate': {
          '0%': { '--border-angle': '0deg' },
          '100%': { '--border-angle': '360deg' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from var(--border-angle, 0deg), var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 60px -15px rgba(34, 211, 238, 0.5)',
        'glow-purple': '0 0 60px -15px rgba(168, 85, 247, 0.5)',
        'glow-magenta': '0 0 60px -15px rgba(236, 72, 153, 0.5)',
        'glow-champagne': '0 0 60px -15px rgba(201, 184, 150, 0.4)',
        'glass': 'inset 0 1px 1px rgba(255,255,255,0.08), 0 0 0 1px rgba(255,255,255,0.05)',
        'card': '0 4px 24px -4px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)',
        'card-hover': '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
postcss.config.js
JavaScript

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
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
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
app/globals.css
CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --border-angle: 0deg;
  }

  * {
    @apply border-white/5;
  }

  html {
    @apply scroll-smooth;
    scroll-behavior: smooth;
  }

  body {
    @apply bg-void text-white antialiased;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    @apply bg-aurora-cyan/30 text-white;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-void-surface;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-white/10 rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-white/20;
  }
}

@layer components {
  /* Glass effect */
  .glass {
    @apply bg-white/[0.03] backdrop-blur-xl border border-white/[0.08];
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.08);
  }

  .glass-strong {
    @apply bg-white/[0.06] backdrop-blur-2xl border border-white/[0.12];
    box-shadow: inset 0 1px 2px rgba(255,255,255,0.1);
  }

  /* Animated gradient border */
  .animated-border {
    --border-angle: 0deg;
    position: relative;
    z-index: 0;
  }

  .animated-border::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    background: conic-gradient(
      from var(--border-angle),
      #22D3EE 0%,
      #A855F7 33%,
      #EC4899 66%,
      #22D3EE 100%
    );
    border-radius: inherit;
    animation: border-rotate 4s linear infinite;
  }

  .animated-border::after {
    content: '';
    position: absolute;
    inset: 1px;
    z-index: -1;
    background: inherit;
    border-radius: inherit;
  }

  @keyframes border-rotate {
    to {
      --border-angle: 360deg;
    }
  }

  @property --border-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  /* Shimmer effect */
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
      rgba(255,255,255,0.08) 50%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2.5s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* Focus styles */
  .focus-ring {
    @apply outline-none ring-2 ring-aurora-cyan/50 ring-offset-2 ring-offset-void;
  }

  /* Text gradient */
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-magenta;
  }

  /* Section spacing */
  .section-padding {
    @apply py-24 md:py-32 lg:py-40;
  }

  /* Container */
  .container-narrow {
    @apply max-w-5xl mx-auto px-6;
  }

  .container-wide {
    @apply max-w-7xl mx-auto px-6;
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

  /* Noise texture */
  .noise {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
app/layout.tsx
React

import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';

const instrumentSerif = localFont({
  src: [
    {
      path: '../public/fonts/InstrumentSerif-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/InstrumentSerif-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-instrument',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

const geist = localFont({
  src: [
    {
      path: '../public/fonts/GeistVF.woff2',
      weight: '100 900',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

// Fallback to Inter if custom fonts aren't available
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#050506',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Aurora Luxe Travel | Beyond First Class',
  description:
    'Curated journeys for those who seek the extraordinary. Private jets, hidden sanctuaries, and moments that transcend imagination.',
  keywords: [
    'luxury travel',
    'private jet',
    'exclusive destinations',
    'concierge travel',
    'bespoke journeys',
  ],
  authors: [{ name: 'Aurora Luxe Travel' }],
  creator: 'Aurora Luxe Travel',
  openGraph: {
    title: 'Aurora Luxe Travel | Beyond First Class',
    description:
      'Curated journeys for those who seek the extraordinary.',
    url: 'https://auroraluxe.travel',
    siteName: 'Aurora Luxe Travel',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurora Luxe Travel - Beyond First Class',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora Luxe Travel | Beyond First Class',
    description:
      'Curated journeys for those who seek the extraordinary.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geist.variable} ${inter.variable}`}
    >
      <body className="font-sans">
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-aurora-cyan focus:text-void focus:rounded-lg"
        >
          Skip to main content
        </a>

        {/* Global noise overlay */}
        <div
          className="fixed inset-0 z-[100] pointer-events-none noise opacity-[0.015]"
          aria-hidden="true"
        />

        {children}
      </body>
    </html>
  );
}
lib/utils.ts
TypeScript

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number,
  currency: string = 'EUR',
  locale: string = 'en-EU'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPrice(amount: number): string {
  if (amount >= 1000) {
    return `€${(amount / 1000).toFixed(0)}k`;
  }
  return `€${amount.toLocaleString()}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
lib/hooks/useScrollSpy.ts
TypeScript

'use client';

import { useState, useEffect } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

export function useScrollSpy({ sectionIds, offset = 100 }: UseScrollSpyOptions) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection(null);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
lib/hooks/useReducedMotion.ts
TypeScript

'use client';

import { useState, useEffect } from 'react';

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}
data/destinations.ts
TypeScript

export interface Destination {
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

export const destinations: Destination[] = [
  {
    id: '1',
    slug: 'maldives-serenity',
    name: 'Maldives',
    region: 'Indian Ocean',
    tagline: 'Where the ocean meets the infinite sky',
    priceFrom: 12500,
    currency: 'EUR',
    imageUrl:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80',
    quickFacts: {
      climate: 'Tropical, 28-32°C',
      bestTime: 'November - April',
      luxury: 'Overwater villas with infinity pools',
    },
    featured: true,
  },
  {
    id: '2',
    slug: 'tokyo-after-dark',
    name: 'Tokyo',
    region: 'Japan',
    tagline: 'Neon dreams and ancient whispers',
    priceFrom: 8900,
    currency: 'EUR',
    imageUrl:
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80',
    quickFacts: {
      climate: 'Temperate, 5-30°C',
      bestTime: 'March - May, Sept - Nov',
      luxury: 'Private tea ceremonies, Michelin omakase',
    },
    featured: true,
  },
  {
    id: '3',
    slug: 'swiss-alpine-escape',
    name: 'Swiss Alps',
    region: 'Switzerland',
    tagline: 'Peaks that touch the heavens',
    priceFrom: 15800,
    currency: 'EUR',
    imageUrl:
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80',
    quickFacts: {
      climate: 'Alpine, -10 to 25°C',
      bestTime: 'Dec - Mar, Jun - Sep',
      luxury: 'Heli-skiing, private chalet with butler',
    },
    featured: false,
  },
  {
    id: '4',
    slug: 'dubai-opulence',
    name: 'Dubai',
    region: 'United Arab Emirates',
    tagline: 'Where ambition touches the clouds',
    priceFrom: 9500,
    currency: 'EUR',
    imageUrl:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    quickFacts: {
      climate: 'Desert, 25-45°C',
      bestTime: 'November - March',
      luxury: 'Private desert camps, yacht parties',
    },
    featured: false,
  },
  {
    id: '5',
    slug: 'serengeti-wilderness',
    name: 'Serengeti',
    region: 'Tanzania',
    tagline: 'The heartbeat of wild Africa',
    priceFrom: 18200,
    currency: 'EUR',
    imageUrl:
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80',
    quickFacts: {
      climate: 'Savanna, 20-30°C',
      bestTime: 'June - October',
      luxury: 'Fly-in safaris, exclusive mobile camps',
    },
    featured: true,
  },
  {
    id: '6',
    slug: 'amalfi-coast-romance',
    name: 'Amalfi Coast',
    region: 'Italy',
    tagline: 'La dolce vita, perfected',
    priceFrom: 11200,
    currency: 'EUR',
    imageUrl:
      'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1200&q=80',
    quickFacts: {
      climate: 'Mediterranean, 15-30°C',
      bestTime: 'May - October',
      luxury: 'Private yacht, cliff-side dining',
    },
    featured: false,
  },
];
data/experiences.ts
TypeScript

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  duration: string;
  included: string[];
  startingPrice: number;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    title: 'Private Jet Odyssey',
    subtitle: 'Skip the lines, own the skies',
    description:
      "Seamless multi-destination journeys aboard the world's finest private aircraft. From Gulfstream G700s to custom Boeing BBJs.",
    imageUrl:
      'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80',
    duration: '3-14 days',
    included: ['Dedicated flight crew', 'Custom catering', 'Ground transfers'],
    startingPrice: 45000,
  },
  {
    id: 'exp-2',
    title: 'Superyacht Sojourns',
    subtitle: 'Mediterranean mastery',
    description:
      "Charter the world's most exclusive vessels. Wake up in Monaco, lunch in Portofino, dinner in Saint-Tropez.",
    imageUrl:
      'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80',
    duration: '7-21 days',
    included: ['Full crew', 'Tender & toys', 'Gourmet chef'],
    startingPrice: 125000,
  },
  {
    id: 'exp-3',
    title: 'Michelin Odyssey',
    subtitle: 'Taste the impossible',
    description:
      "Private tables at the world's most exclusive restaurants. Kitchen tours with legendary chefs. Curated wine experiences.",
    imageUrl:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    duration: '5-10 days',
    included: ['Reserved private rooms', 'Sommelier pairing', 'Chef meetings'],
    startingPrice: 18500,
  },
  {
    id: 'exp-4',
    title: 'Celestial Escapes',
    subtitle: 'Desert stargazing retreats',
    description:
      "Remote luxury camps in the world's darkest skies. Private astronomers, gourmet desert cuisine, and infinite silence.",
    imageUrl:
      'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&q=80',
    duration: '4-7 days',
    included: ['Luxury tented suites', 'Private telescope', 'Guided expeditions'],
    startingPrice: 12800,
  },
  {
    id: 'exp-5',
    title: 'Alpine Wellness',
    subtitle: 'Summits of serenity',
    description:
      'Exclusive mountain retreats combining adventure and restoration. Heli-skiing, thermal spas, and panoramic isolation.',
    imageUrl:
      'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1200&q=80',
    duration: '5-14 days',
    included: ['Private chalet', 'Personal guide', 'Spa treatments'],
    startingPrice: 22000,
  },
];
data/membership.ts
TypeScript

export interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  annualFee: number | null;
  perks: string[];
  highlighted: boolean;
  accentColor: 'silver' | 'aurora' | 'champagne';
}

export const membershipTiers: MembershipTier[] = [
  {
    id: 'silver',
    name: 'Silver Circle',
    tagline: 'Your journey begins',
    annualFee: 2500,
    perks: [
      'Dedicated travel consultant',
      'Priority booking access',
      '10% preferred partner discounts',
      '24/7 concierge support',
      'Quarterly destination briefings',
    ],
    highlighted: false,
    accentColor: 'silver',
  },
  {
    id: 'black',
    name: 'Black Card',
    tagline: 'Elevated beyond expectation',
    annualFee: 12000,
    perks: [
      'Everything in Silver Circle',
      'Guaranteed room upgrades',
      'Airport fast-track globally',
      'Emergency trip salvage',
      'Annual €5,000 travel credit',
      'Exclusive event invitations',
      'Complimentary travel insurance',
    ],
    highlighted: true,
    accentColor: 'aurora',
  },
  {
    id: 'obsidian',
    name: 'Obsidian Society',
    tagline: 'By invitation only',
    annualFee: null,
    perks: [
      'Everything in Black Card',
      'Private jet access (50 hours)',
      'Superyacht allocation',
      'Real estate previews',
      'Family office integration',
      'Bespoke experience creation',
      'Global emergency extraction',
      'Legacy planning services',
    ],
    highlighted: false,
    accentColor: 'champagne',
  },
];
data/testimonials.ts
TypeScript

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      "Aurora Luxe transformed our anniversary into something we'll relive in our dreams forever. The attention to detail was beyond anything we've experienced.",
    author: 'Alexandra M.',
    title: 'Black Card Member since 2021',
    rating: 5,
  },
  {
    id: 'test-2',
    quote:
      "When our flight was cancelled in a remote location, their team had a private jet ready within 3 hours. That's when I knew this was different.",
    author: 'Marcus Chen',
    title: 'Obsidian Society',
    rating: 5,
  },
  {
    id: 'test-3',
    quote:
      "The Michelin Odyssey was a revelation. Private dinners with chefs I've watched for years, in settings I didn't know existed.",
    author: 'Isabelle Laurent',
    title: 'Black Card Member',
    rating: 5,
  },
];
components/ui/Button.tsx
React

'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'right',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'relative inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-aurora-cyan/50 focus-visible:ring-offset-2 focus-visible:ring-offset-void disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'bg-gradient-to-r from-aurora-cyan via-aurora-purple to-aurora-magenta text-white hover:brightness-110 hover:shadow-glow-cyan',
      secondary:
        'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20',
      ghost:
        'text-white/70 hover:text-white hover:bg-white/5',
      glow:
        'bg-void-elevated border border-aurora-cyan/30 text-aurora-cyan hover:border-aurora-cyan/60 hover:shadow-glow-cyan',
    };

    const sizes = {
      sm: 'h-9 px-4 text-sm rounded-lg',
      md: 'h-11 px-6 text-sm rounded-xl',
      lg: 'h-14 px-8 text-base rounded-xl',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
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
        )}
        {icon && iconPosition === 'left' && !loading && icon}
        {children}
        {icon && iconPosition === 'right' && !loading && icon}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
components/ui/GlowOrb.tsx
React

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowOrbProps {
  className?: string;
  color?: 'cyan' | 'purple' | 'magenta' | 'mixed';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  intensity?: 'subtle' | 'medium' | 'strong';
  animate?: boolean;
}

export function GlowOrb({
  className,
  color = 'mixed',
  size = 'lg',
  intensity = 'medium',
  animate = true,
}: GlowOrbProps) {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]',
  };

  const colors = {
    cyan: 'from-aurora-cyan/40 to-aurora-teal/20',
    purple: 'from-aurora-purple/40 to-aurora-magenta/20',
    magenta: 'from-aurora-magenta/40 to-aurora-purple/20',
    mixed: 'from-aurora-cyan/30 via-aurora-purple/30 to-aurora-magenta/30',
  };

  const intensities = {
    subtle: 'blur-[80px] opacity-30',
    medium: 'blur-[100px] opacity-50',
    strong: 'blur-[120px] opacity-70',
  };

  return (
    <motion.div
      className={cn(
        'absolute rounded-full bg-gradient-to-br pointer-events-none',
        sizes[size],
        colors[color],
        intensities[intensity],
        className
      )}
      animate={
        animate
          ? {
              x: [0, 50, -30, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.1, 0.95, 1],
            }
          : undefined
      }
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-hidden="true"
    />
  );
}
components/ui/SectionHeading.tsx
React

'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {overline && (
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-aurora-cyan mb-4">
          {overline}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-white/60 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
components/ui/GlassPanel.tsx
React

import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'subtle' | 'medium' | 'strong';
  hover?: boolean;
}

export function GlassPanel({
  children,
  className,
  variant = 'medium',
  hover = false,
}: GlassPanelProps) {
  const variants = {
    subtle: 'bg-white/[0.02] border-white/[0.05]',
    medium: 'bg-white/[0.04] border-white/[0.08]',
    strong: 'bg-white/[0.08] border-white/[0.12]',
  };

  return (
    <div
      className={cn(
        'relative rounded-2xl backdrop-blur-xl border shadow-glass overflow-hidden',
        variants[variant],
        hover && 'transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.12]',
        className
      )}
    >
      {children}
    </div>
  );
}
components/ui/Input.tsx
React

'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-white/70"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            'w-full h-12 px-4 bg-white/[0.03] border border-white/10 rounded-xl',
            'text-white placeholder:text-white/30',
            'focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/30',
            'transition-all duration-200',
            error && 'border-red-500/50 focus:border-red-500 focus:ring-red-500/30',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
components/ui/Select.tsx
React

'use client';

import { forwardRef, SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-white/70"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={cn(
            'w-full h-12 px-4 bg-white/[0.03] border border-white/10 rounded-xl',
            'text-white appearance-none cursor-pointer',
            'focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/30',
            'transition-all duration-200',
            'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'rgba(255,255,255,0.5)\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")] bg-[length:20px] bg-[right_12px_center] bg-no-repeat',
            error && 'border-red-500/50',
            className
          )}
          {...props}
        >
          <option value="" className="bg-void-elevated">
            Select an option
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-void-elevated"
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
components/ui/Textarea.tsx
React

'use client';

import { forwardRef, TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-white/70"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            'w-full min-h-[120px] px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl',
            'text-white placeholder:text-white/30 resize-none',
            'focus:outline-none focus:border-aurora-cyan/50 focus:ring-1 focus:ring-aurora-cyan/30',
            'transition-all duration-200',
            error && 'border-red-500/50',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
components/ui/ChipGroup.tsx
React

'use client';

import { cn } from '@/lib/utils';

interface ChipGroupProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  label?: string;
  error?: string;
}

export function ChipGroup({
  options,
  selected,
  onChange,
  label,
  error,
}: ChipGroupProps) {
  const toggleChip = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((s) => s !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-medium text-white/70">
          {label}
        </label>
      )}
      <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => toggleChip(option)}
              className={cn(
                'px-4 py-2 text-sm rounded-full border transition-all duration-200',
                isSelected
                  ? 'bg-aurora-cyan/20 border-aurora-cyan/50 text-aurora-cyan'
                  : 'bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.06] hover:border-white/20'
              )}
              aria-pressed={isSelected}
            >
              {option}
            </button>
          );
        })}
      </div>
      {error && (
        <p className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
components/ui/Toast.tsx
React

'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ToastProps {
  show: boolean;
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

export function Toast({
  show,
  message,
  type = 'success',
  onClose,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 
