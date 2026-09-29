"use client";

import React from "react";
import { Plus } from "lucide-react";

export function MarqueeTicker() {
  const items = [
    "Laravel & RESTful APIs",
    "Next.js & React Full Stack",
    "Python, Flask & Django",
    "MySQL & PostgreSQL System Design",
    "React Native Mobile Apps",
    "Docker & AWS Cloud Development",
    "SpringBoot & Node.js Services",
    "AI & LLM Integration",
  ];

  return (
    <div className="w-full bg-[#1E1E24] text-white py-4 overflow-hidden border-y border-neutral-800 relative z-20">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4">
            <span className="text-sm sm:text-base font-bold tracking-wide uppercase text-neutral-200">
              {item}
            </span>
            <div className="w-6 h-6 rounded-full bg-[#FF5500]/20 flex items-center justify-center">
              <Plus className="w-3.5 h-3.5 text-[#FF5500]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
