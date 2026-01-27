export interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  annualFee: number;
  perks: string[];
  highlighted: boolean;
  accentColor: string;
}

export const membershipTiers: MembershipTier[] = [
  {
    id: "silver",
    name: "Silver Circle",
    tagline: "Your gateway to extraordinary",
    annualFee: 5000,
    perks: [
      "24/7 concierge access",
      "Priority booking",
      "5% discount on experiences",
      "Quarterly travel magazine",
      "Access to member events",
    ],
    highlighted: false,
    accentColor: "slate",
  },
  {
    id: "black",
    name: "Black Card",
    tagline: "Elevated beyond expectation",
    annualFee: 15000,
    perks: [
      "Dedicated travel advisor",
      "Guaranteed availability",
      "10% discount on all bookings",
      "Complimentary upgrades",
      "Exclusive partner benefits",
      "Private member lounge access",
    ],
    highlighted: true,
    accentColor: "champagne",
  },
  {
    id: "obsidian",
    name: "Obsidian Society",
    tagline: "The pinnacle of privilege",
    annualFee: 50000,
    perks: [
      "Personal travel curator",
      "Unlimited priority access",
      "15% discount + price matching",
      "Complimentary companion travel",
      "Bespoke itinerary design",
      "VIP airport services worldwide",
      "Annual luxury gift",
    ],
    highlighted: false,
    accentColor: "aurora-purple",
  },
];
