"use client";

import React, { useState } from "react";
import { Palette, Check } from "lucide-react";

export function ColorPaletteBadge() {
  const [copied, setCopied] = useState<string | null>(null);

  const palette = [
    { name: "Brand Orange", hex: "#FF5500", bg: "bg-[#FF5500]", border: "border-transparent" },
    { name: "Dark Charcoal", hex: "#1E1E24", bg: "bg-[#1E1E24]", border: "border-neutral-700" },
    { name: "Soft Off-White", hex: "#F7F7F8", bg: "bg-[#F7F7F8]", border: "border-neutral-300" },
    { name: "Pure White", hex: "#FFFFFF", bg: "bg-white", border: "border-neutral-300" },
    { name: "Deep Ink", hex: "#111827", bg: "bg-[#111827]", border: "border-neutral-800" },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopied(hex);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-600">
        <Palette className="w-3.5 h-3.5 text-[#FF5500]" />
        <span className="hidden sm:inline font-mono">Palette:</span>
      </div>
      <div className="flex items-center gap-1.5">
        {palette.map((color) => (
          <button
            key={color.hex}
            onClick={() => handleCopy(color.hex)}
            title={`Copy ${color.name} (${color.hex})`}
            className="group relative focus:outline-none"
          >
            <span
              className={`block w-4 h-4 rounded-full ${color.bg} ${color.border} border transition-transform duration-200 group-hover:scale-125 shadow-sm`}
            />
            {copied === color.hex && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-neutral-900 text-[10px] text-white rounded shadow-md whitespace-nowrap flex items-center gap-1 z-20">
                <Check className="w-2.5 h-2.5 text-[#FF5500]" /> Copied!
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
