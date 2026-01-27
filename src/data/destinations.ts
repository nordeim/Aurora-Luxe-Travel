export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  tagline: string;
  priceFrom: number;
  currency: string;
  imageUrl: string;
  quickFacts: string[];
  featured: boolean;
}

export const destinations: Destination[] = [
  {
    id: "maldives",
    slug: "maldives-overwater-villas",
    name: "Maldives",
    region: "Indian Ocean",
    tagline: "Overwater sanctuaries in crystalline waters",
    priceFrom: 15000,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    quickFacts: ["Private villa", "Butler service", "Seaplane transfer"],
    featured: true,
  },
  {
    id: "tokyo",
    slug: "tokyo-luxury-experience",
    name: "Tokyo",
    region: "Japan",
    tagline: "Where ancient tradition meets ultra-modern luxury",
    priceFrom: 12000,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    quickFacts: ["Michelin dining", "Private tea ceremony", "Luxury ryokan"],
    featured: true,
  },
  {
    id: "swiss-alps",
    slug: "swiss-alps-chalets",
    name: "Swiss Alps",
    region: "Switzerland",
    tagline: "Alpine elegance in pristine mountain retreats",
    priceFrom: 18000,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    quickFacts: ["Private chalet", "Heli-skiing", "Spa & wellness"],
    featured: true,
  },
  {
    id: "dubai",
    slug: "dubai-ultra-luxury",
    name: "Dubai",
    region: "UAE",
    tagline: "Opulence redefined in the desert metropolis",
    priceFrom: 10000,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    quickFacts: ["7-star hotels", "Private desert safari", "Yacht charter"],
    featured: false,
  },
  {
    id: "serengeti",
    slug: "serengeti-safari",
    name: "Serengeti",
    region: "Tanzania",
    tagline: "Witness nature's grandest spectacle in style",
    priceFrom: 14000,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    quickFacts: ["Luxury tented camp", "Private game drives", "Hot air balloon"],
    featured: false,
  },
  {
    id: "amalfi",
    slug: "amalfi-coast-villas",
    name: "Amalfi Coast",
    region: "Italy",
    tagline: "Mediterranean splendor on dramatic cliffs",
    priceFrom: 13000,
    currency: "USD",
    imageUrl: "https://images.unsplash.com/photo-1534113414509-0bd4d27f0db0",
    quickFacts: ["Cliffside villa", "Private yacht", "Michelin restaurants"],
    featured: false,
  },
];
