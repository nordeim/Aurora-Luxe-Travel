"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experiences";
import { formatCurrency } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export function Experiences() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experiences" className="py-24 md:py-32 bg-void-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Signature Experiences"
          subtitle="Bespoke journeys crafted for the extraordinary"
          className="mb-16"
        />

        <div className="space-y-24">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={experience.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
                    <Image
                      src={experience.imageUrl}
                      alt={experience.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <p className="text-sm text-champagne uppercase tracking-wider mb-2">
                      {experience.subtitle}
                    </p>
                    <h3 className="text-3xl md:text-4xl font-serif text-champagne mb-4">
                      {experience.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">
                      Included
                    </p>
                    <ul className="space-y-2">
                      {experience.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-slate-300">
                          <svg className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-baseline gap-3 pt-4">
                    <span className="text-sm text-slate-400">From</span>
                    <span className="text-3xl font-serif text-champagne">
                      {formatCurrency(experience.startingPrice)}
                    </span>
                    <span className="text-sm text-slate-400">/ {experience.duration}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
