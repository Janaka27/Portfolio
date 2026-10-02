"use client";

import React from "react";
import {
  ArrowUpRight,
  Download,
  Star,
  GraduationCap
} from "lucide-react";

import { motion } from "framer-motion";

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F7F7F8] dark:bg-[#0C0D11] transition-colors duration-300">
      {/* Faint Typographic Background Watermark */}
      <div className="absolute top-12 left-0 right-0 z-0 text-center pointer-events-none select-none overflow-hidden">
        <span className="watermark-text text-8xl sm:text-[13rem] lg:text-[17rem] font-black uppercase tracking-widest block opacity-60 dark:opacity-10">
          JANAKA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Sub-label matching template `- Hello` */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                Hello & Welcome
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
              I&apos;m Janaka Namal,<br />
              <span className="text-[#FF5500]">Full Stack Developer & Backend Specialist</span><br />
              based in Sri Lanka.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed font-normal">
              Software Engineering undergraduate at NIBM & University of Colombo. Passionate about building scalable backend systems, RESTful APIs, modern web apps (Laravel, Next.js, React), and exploring AI/LLM technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#case-studies"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF5500] hover:bg-[#E04B00] transition-all duration-200 shadow-lg shadow-[#FF5500]/25 hover:shadow-xl hover:shadow-[#FF5500]/40 group"
              >
                <span>View Projects</span>
                <div className="w-7 h-7 rounded-full bg-white text-[#FF5500] flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-[#FF5500]" />
                <span>View Resume</span>
              </motion.button>
            </div>

            {/* Social Proof & Metrics Badge */}
            <div className="pt-6 flex flex-wrap items-center gap-8 border-t border-neutral-200/80 dark:border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-neutral-700 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white dark:ring-neutral-900">
                    JT
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FF5500] text-white font-bold text-xs flex items-center justify-center ring-2 ring-white dark:ring-neutral-900">
                    BSc
                  </div>
                  <div className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-700 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white dark:ring-neutral-900">
                    AWS
                  </div>
                </div>
                <div>
                  <div className="text-sm font-extrabold text-neutral-900 dark:text-white">HexCode Backend Developer</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Full Stack & Mobile Freelance</div>
                </div>
              </div>

              {/* Key Quick Stats */}
              <div className="hidden sm:flex items-center gap-6 border-l border-neutral-200 dark:border-neutral-800 pl-6">
                <div>
                  <div className="text-lg font-black text-[#FF5500]">Dual Hons</div>
                  <div className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">NIBM & UOC</div>
                </div>
                <div>
                  <div className="text-lg font-black text-neutral-900 dark:text-white">4yrs+</div>
                  <div className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">Experience</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Showcase Card & Interactive Telemetry */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Main Showcase Image */}
            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-3 shadow-xl border border-neutral-200/80 dark:border-neutral-800 relative z-10 overflow-hidden">
              <img
                src="/my-image.png"
                alt="Janaka Namal - Full Stack & Backend Developer"
                className="w-full h-auto rounded-2xl object-cover shadow-sm"
              />
            </div>

            {/* Floating Experience Badge 1 */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="absolute -top-6 -right-4 sm:-right-6 z-20 bg-[#1E1E24] dark:bg-neutral-900 text-white p-4 rounded-2xl shadow-2xl border border-neutral-700/80 dark:border-neutral-700 flex items-center gap-3.5 transition-all duration-300 animate-float-badge-1"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF5500] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF5500]/30">
                <Star className="w-5 h-5 fill-white" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">Full Stack &</div>
                <div className="text-xs font-semibold text-[#FF5500]">Backend Developer</div>
              </div>
            </motion.div>

            {/* Floating Experience Badge 2 */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 z-20 bg-[#1E1E24] dark:bg-neutral-900 text-white p-4 rounded-2xl shadow-2xl border border-neutral-700/80 dark:border-neutral-700 flex items-center gap-3.5 transition-all duration-300 animate-float-badge-2"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF5500] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF5500]/30">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white">Software Engineering</div>
                <div className="text-xs font-semibold text-[#FF5500]">NIBM & UOC Undergrad</div>
              </div>
            </motion.div>

            {/* Vertical Scroll Label */}
            <div className="hidden xl:flex absolute -right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-3 text-neutral-400">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 rotate-90">
                SCROLL
              </span>
              <div className="w-0.5 h-12 bg-neutral-300 dark:bg-neutral-700" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
