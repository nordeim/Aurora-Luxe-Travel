Aurora Luxe Travel — Project Overview

This is Aurora Luxe Travel, a luxury travel concierge website targeting ultra-high-net-worth individuals (UHNWI). It features a distinctive "Celestial Noir" design aesthetic that merges deep space aesthetics with terrestrial luxury.

🎯 Core Concept

A premium travel booking experience showcasing curated destinations (Maldives, Tokyo, Swiss Alps, Dubai, Serengeti, Amalfi Coast), signature experiences (private jets, yachts, Michelin dining), and membership tiers for VIP clients.

🛠 Tech Stack

 Category        Technology
 Framework       Next.js 16.1.4 (App Router)
 UI Library      React 19.2.3
 Language        TypeScript 5.9.3 (strict mode)
 Styling         Tailwind CSS 4.0 (CSS-first config)
 Animation       Framer Motion 12.29.0
 UI Components   Radix UI primitives (shadcn/ui pattern)
 Icons           Lucide React, Heroicons
 Forms           React Hook Form + Zod
 Database        Prisma 7.3.0 + PostgreSQL
 Testing         Vitest 4.0.18, Playwright 1.57.0
 Linting         ESLint 9.39.2

🎨 Design System — "Celestial Noir"

Color Palette:

• Void Blacks: #050506 (deep space), #0a0a0c
• Aurora Gradients: Cyan → Purple → Magenta
• Luxury Accent: Champagne gold #c9b896
• Slate Scale: 50-900 for text/borders

Typography:

• Headlines: Instrument Serif (elegant serif)
• Body: Geist (modern sans-serif)

Key Visual Effects:

• Glass morphism panels (backdrop-blur-xl)
• Animated aurora blobs floating in background
• Smooth scroll behavior with scroll spy navigation

📁 Project Structure

src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with fonts/SEO
│   ├── page.tsx            # Home page composition
│   └── globals.css         # Tailwind v4 theme tokens
│
├── components/
│   ├── layout/             # Navbar (sticky, scroll spy), Footer
│   ├── sections/           # Hero, Destinations, Experiences,
│   │                       # Membership, Testimonials, ConciergeForm
│   └── ui/                 # Button, Input, Select, Textarea,
│                           # GlowOrb, GlassPanel, Toast, ChipGroup
│
├── data/                   # Static content
│   ├── destinations.ts     # 6 luxury destinations
│   ├── experiences.ts      # 5 signature experiences
│   ├── membership.ts       # 3 membership tiers
│   └── testimonials.ts     # Client testimonials
│
├── lib/
│   ├── utils.ts            # cn(), formatCurrency(), slugify()
│   └── hooks/              # useScrollSpy, useReducedMotion

✨ Key Features

 Feature              Implementation
 6 Destinations       Maldives, Tokyo, Swiss Alps, Dubai, Serengeti, Amalfi
 5 Experiences        Private Jet, Yacht Charter, Michelin Trail, Desert Stargazing, Alpine Wellness
 3 Membership Tiers   Silver Circle → Black Card → Obsidian Society
 Scroll Spy Nav       Highlights active section as you scroll
 Mobile Menu          Full-screen overlay with staggered animations
 Form Validation      Contact form with Zod validation + toast notifications
 Accessibility        WCAG AAA, keyboard nav, reduced motion support
 Animations           Framer Motion with useReducedMotion hook

🚀 Current Status

✅ Production Ready — All 5 implementation phases complete:

1. ✅ Foundation (Tailwind v4, fonts, utilities)
2. ✅ Data Layer (destinations, experiences, membership, testimonials)
3. ✅ UI Primitives (Button, Input, forms, etc.)
4. ✅ Layout Components (Navbar, Footer, scroll spy)
5. ✅ Section Components (Hero, Destinations, Experiences, Membership, Testimonials, Form)

📝 Available Scripts

npm run dev       # Start dev server (Turbopack)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # ESLint checking
npm test          # Run Vitest tests

🔮 Future Roadmap

• Phase 6: Dynamic destination detail pages (/destinations/[slug])
• Phase 7: CMS integration (Sanity/Contentful)
• Phase 8: Backend API + email service integration
• Phase 9: Member portal + booking system + payments

This is a meticulously crafted luxury brand website with a unique visual identity, production-ready code quality, and a clear path for future enhancements. The "Celestial Noir" aesthetic sets it apart from generic travel sites with it
s deep space meets luxury aesthetic.

