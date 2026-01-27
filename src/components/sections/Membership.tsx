"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Button } from "@/components/ui/Button";
import { membershipTiers } from "@/data/membership";
import { formatCurrency } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function Membership() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="membership" className="py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Membership Tiers"
          subtitle="Unlock exclusive access and personalized service"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative",
                tier.highlighted && "md:-mt-4 md:mb-4"
              )}
            >
              <GlassPanel
                className={cn(
                  "h-full relative",
                  tier.highlighted && "border-2 border-champagne"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-champagne text-void px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-serif text-champagne">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-slate-400">{tier.tagline}</p>
                  </div>

                  <div className="text-center py-6 border-y border-slate-700">
                    <p className="text-4xl font-serif text-champagne">
                      {formatCurrency(tier.annualFee)}
                    </p>
                    <p className="text-sm text-slate-400 mt-1">per year</p>
                  </div>

                  <ul className="space-y-3">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-slate-300 text-sm">
                        <svg className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact">
                    <Button
                      variant={tier.highlighted ? "primary" : "outline"}
                      className="w-full"
                    >
                      Join {tier.name}
                    </Button>
                  </a>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
