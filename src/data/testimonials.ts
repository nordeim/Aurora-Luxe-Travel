export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Aurora Luxe transformed our anniversary into an unforgettable journey. Every detail was perfection, from the private villa in Maldives to the seamless yacht charter.",
    author: "Victoria Chen",
    title: "Obsidian Society Member",
    rating: 5,
  },
  {
    id: "testimonial-2",
    quote: "The level of personalization is extraordinary. My travel curator understood exactly what I needed before I even asked. This is luxury travel redefined.",
    author: "James Rothschild",
    title: "Black Card Member",
    rating: 5,
  },
  {
    id: "testimonial-3",
    quote: "From Tokyo's hidden Michelin gems to the Swiss Alps' finest chalets, Aurora Luxe has access to experiences money alone cannot buy. Truly exceptional.",
    author: "Sophia Armani",
    title: "Obsidian Society Member",
    rating: 5,
  },
];
