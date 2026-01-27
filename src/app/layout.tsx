import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050506",
};

export const metadata: Metadata = {
  title: "Aurora Luxe Travel | Beyond First Class",
  description: "Ultra-premium travel concierge for discerning travelers. Curated destinations, exclusive experiences, and personalized service.",
  keywords: ["luxury travel", "private jet", "yacht charter", "exclusive destinations", "travel concierge"],
  authors: [{ name: "Aurora Luxe Travel" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://auroraluxetravel.com",
    siteName: "Aurora Luxe Travel",
    title: "Aurora Luxe Travel | Beyond First Class",
    description: "Ultra-premium travel concierge for discerning travelers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aurora Luxe Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Luxe Travel | Beyond First Class",
    description: "Ultra-premium travel concierge for discerning travelers",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
