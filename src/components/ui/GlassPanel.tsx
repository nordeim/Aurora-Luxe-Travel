import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function GlassPanel({ className, hover = false, children, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl p-6",
        hover && "transition-transform hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
