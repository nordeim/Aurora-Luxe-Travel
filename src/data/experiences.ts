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
    id: "private-jet",
    title: "Private Jet Charter",
    subtitle: "Fly on your schedule",
    description: "Experience unparalleled freedom with our fleet of ultra-long-range private jets. From Gulfstream G650s to Bombardier Global 7500s, travel in absolute comfort and privacy.",
    imageUrl: "https://images.unsplash.com/photo-1540962351504-03099e0a754b",
    duration: "Custom itinerary",
    included: ["Dedicated crew", "Gourmet catering", "Ground transportation"],
    startingPrice: 25000,
  },
  {
    id: "yacht-charter",
    title: "Superyacht Charter",
    subtitle: "Your floating palace",
    description: "Explore the world's most exclusive coastlines aboard a luxury superyacht. Complete with crew, water toys, and personalized itineraries.",
    imageUrl: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a",
    duration: "7-14 days",
    included: ["Full crew", "Water sports equipment", "Chef & sommelier"],
    startingPrice: 150000,
  },
  {
    id: "michelin-trail",
    title: "Michelin Star Trail",
    subtitle: "Culinary odyssey",
    description: "A curated journey through the world's finest restaurants. Private reservations, chef's table experiences, and exclusive wine pairings.",
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    duration: "10-14 days",
    included: ["Reserved tables", "Private tastings", "Sommelier guidance"],
    startingPrice: 35000,
  },
  {
    id: "desert-stargazing",
    title: "Desert Stargazing",
    subtitle: "Celestial luxury",
    description: "Private observatory experience in the world's darkest skies. Combine astronomy with Bedouin luxury in exclusive desert camps.",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    duration: "3-5 nights",
    included: ["Private astronomer", "Luxury camp", "Gourmet dining"],
    startingPrice: 18000,
  },
  {
    id: "alpine-wellness",
    title: "Alpine Wellness Retreat",
    subtitle: "Mountain rejuvenation",
    description: "Holistic wellness in the Swiss Alps. Combine spa treatments, yoga, and meditation with breathtaking mountain views.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    duration: "7 days",
    included: ["Personal trainer", "Spa treatments", "Nutrition consultation"],
    startingPrice: 22000,
  },
];
