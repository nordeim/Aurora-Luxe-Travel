"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export interface GlowOrbProps {
  color: "cyan" | "purple" | "magenta";
  size?: "sm" | "md" | "lg";
  delay?: number;
}

const colorMap = {
  cyan: "bg-aurora-cyan",
  purple: "bg-aurora-purple",
  magenta: "bg-aurora-magenta",
};

const sizeMap = {
  sm: "w-64 h-64",
  md: "w-96 h-96",
  lg: "w-[32rem] h-[32rem]",
};

export function GlowOrb({ color, size = "md", delay = 0 }: GlowOrbProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className={`absolute rounded-full ${colorMap[color]} ${sizeMap[size]} opacity-20 blur-3xl`}
      />
    );
  }

  return (
    <motion.div
      className={`absolute rounded-full ${colorMap[color]} ${sizeMap[size]} blur-3xl`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.2, 0.3, 0.2],
        scale: [1, 1.1, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}
