"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { destinations } from "@/data/destinations";
import { formatCurrency } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Destinations() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="destinations" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Curated Destinations"
          subtitle="Handpicked locations where luxury meets authenticity"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassPanel hover className="h-full overflow-hidden group cursor-pointer">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={destination.imageUrl}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {destination.featured && (
                    <div className="absolute top-4 right-4 bg-champagne text-void px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-serif text-champagne mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-slate-400">{destination.region}</p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {destination.tagline}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {destination.quickFacts.map((fact) => (
                      <span
                        key={fact}
                        className="text-xs bg-slate-800/50 text-slate-300 px-2 py-1 rounded"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-sm text-slate-400">From</p>
                    <p className="text-2xl font-serif text-champagne">
                      {formatCurrency(destination.priceFrom, destination.currency)}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
