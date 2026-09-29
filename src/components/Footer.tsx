"use client";

import React from "react";
import { ArrowUp, ShieldCheck, Mail } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 py-12 text-xs text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Logo & Direct Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#FF5500] text-white flex items-center justify-center font-extrabold text-xs shadow-md shadow-[#FF5500]/20">
                J
              </div>
              <span className="font-extrabold text-neutral-900 text-sm">Janaka<span className="text-[#FF5500]">.</span></span>
            </div>
            <span className="hidden sm:inline text-neutral-300">•</span>
            
            {/* Direct Contact & LinkedIn Pills */}
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <a
                href="mailto:janakanamal.mails@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 hover:text-[#FF5500] hover:bg-neutral-200 transition-colors border border-neutral-200"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>janakanamal.mails@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/janaka-namal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 hover:text-[#FF5500] hover:bg-neutral-200 transition-colors border border-neutral-200"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>linkedin.com/in/janaka-namal</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold">
            <a href="#overview" className="hover:text-[#FF5500] transition-colors">Overview</a>
            <a href="#services" className="hover:text-[#FF5500] transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-[#FF5500] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#FF5500] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#FF5500] transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-neutral-100 hover:bg-[#FF5500] text-neutral-800 hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold shadow-sm"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} T.M. Janaka Namal Thennakoon. All rights reserved.</p>
          <div className="flex items-center gap-2 text-neutral-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Software Engineering Undergraduate | Full Stack Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
