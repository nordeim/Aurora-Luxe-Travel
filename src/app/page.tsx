import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Destinations } from "@/components/sections/Destinations";
import { Experiences } from "@/components/sections/Experiences";
import { Membership } from "@/components/sections/Membership";
import { Testimonials } from "@/components/sections/Testimonials";
import { ConciergeForm } from "@/components/sections/ConciergeForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Experiences />
        <Membership />
        <Testimonials />
        <ConciergeForm />
      </main>
      <Footer />
    </>
  );
}
