"use client";

import { cn } from "@/lib/utils";

export interface ChipGroupProps {
  options: { value: string; label: string }[];
  selected: string[];
  onChange: (selected: string[]) => void;
  label?: string;
  error?: string;
}

export function ChipGroup({ options, selected, onChange, label, error }: ChipGroupProps) {
  const toggleOption = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selected.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => toggleOption(option.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                "focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2 focus:ring-offset-void",
                isSelected
                  ? "bg-champagne text-void"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
