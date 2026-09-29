"use client";

import React from "react";
import { 
  ArrowUpRight, 
  Download, 
  Star,
  GraduationCap
} from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7F7F8]">
      {/* Faint Typographic Background Watermark */}
      <div className="absolute top-12 left-0 right-0 z-0 text-center pointer-events-none select-none overflow-hidden">
        <span className="watermark-text text-8xl sm:text-[13rem] lg:text-[17rem] font-black uppercase tracking-widest block opacity-60">
          JANAKA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Sub-label matching template `- Hello` */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                Hello & Welcome
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1]">
              I&apos;m Janaka Namal,<br />
              <span className="text-[#FF5500]">Full Stack Developer & Backend Specialist</span><br />
              based in Sri Lanka.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed font-normal">
              Software Engineering undergraduate at NIBM & University of Colombo. Passionate about building scalable backend systems, RESTful APIs, modern web apps (Laravel, Next.js, React), and exploring AI/LLM technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#case-studies"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF5500] hover:bg-[#E04B00] transition-all duration-200 shadow-lg shadow-[#FF5500]/25 hover:shadow-xl hover:shadow-[#FF5500]/40 group"
              >
                <span>View Projects</span>
                <div className="w-7 h-7 rounded-full bg-white text-[#FF5500] flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#FF5500]" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Proof & Metrics Badge */}
            <div className="pt-6 flex flex-wrap items-center gap-8 border-t border-neutral-200/80">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">
                    JT
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FF5500] text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">
                    BSc
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-800 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white">
                    AWS
                  </div>
                </div>
                <div>
                  <div className="text-sm font-extrabold text-neutral-900">HexCode Backend Developer</div>
                  <div className="text-xs text-neutral-500 font-medium">Full Stack & Mobile Freelance</div>
                </div>
              </div>

              {/* Key Quick Stats */}
              <div className="hidden sm:flex items-center gap-6 border-l border-neutral-200 pl-6">
                <div>
                  <div className="text-lg font-black text-[#FF5500]">Dual Hons</div>
                  <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">NIBM & UOC</div>
                </div>
                <div>
                  <div className="text-lg font-black text-neutral-900">5+</div>
                  <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wide">Certifications</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase Card & Interactive Telemetry */}
          {/* Right Column: Hero Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Showcase Image (Replaces System Health Status component) */}
            <div className="bg-white rounded-3xl p-3 shadow-xl border border-neutral-200/80 relative z-10 overflow-hidden">
              <img
                src="/my-image.png"
                alt="Janaka Namal - Full Stack & Backend Developer"
                className="w-full h-auto rounded-2xl object-cover shadow-sm"
              />
            </div>

            {/* Floating Experience Badge 1 (Top Right Overlay) */}
            <div className="absolute -top-6 -right-4 sm:-right-6 z-20 bg-[#1E1E24] text-white p-4 rounded-2xl shadow-2xl border border-neutral-700/80 flex items-center gap-3.5 transition-all duration-300 hover:scale-105 animate-float-badge-1">
              <div className="w-10 h-10 rounded-xl bg-[#FF5500] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF5500]/30">
                <Star className="w-5 h-5 fill-white" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">Full Stack &</div>
                <div className="text-xs font-semibold text-[#FF5500]">Backend Developer</div>
              </div>
            </div>

            {/* Floating Experience Badge 2 (Bottom Left Overlay) */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 z-20 bg-[#1E1E24] text-white p-4 rounded-2xl shadow-2xl border border-neutral-700/80 flex items-center gap-3.5 transition-all duration-300 hover:scale-105 animate-float-badge-2">
              <div className="w-10 h-10 rounded-xl bg-[#FF5500] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF5500]/30">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">Software Engineering</div>
                <div className="text-xs font-semibold text-[#FF5500]">NIBM & UOC Undergrad</div>
              </div>
            </div>

            {/* Vertical Scroll Label on side */}
            <div className="hidden xl:flex absolute -right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-3 text-neutral-400">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-500 rotate-90">
                SCROLL
              </span>
              <div className="w-0.5 h-12 bg-neutral-300" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
