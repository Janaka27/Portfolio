"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, ShieldCheck, Mail } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

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
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-12 text-xs text-neutral-600 dark:text-neutral-400 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Logo & Direct Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#FF5500] text-white flex items-center justify-center font-extrabold text-xs shadow-md shadow-[#FF5500]/20">
                J
              </div>
              <span className="font-extrabold text-neutral-900 dark:text-white text-sm">Janaka<span className="text-[#FF5500]">.</span></span>
            </div>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">•</span>
            
            {/* Direct Contact, GitHub & LinkedIn Pills */}
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px]">
              <a
                href="mailto:janakanamal.mails@gmail.com"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-[#FF5500] dark:hover:text-[#FF5500] hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>janakanamal.mails@gmail.com</span>
              </a>
              <a
                href="https://github.com/Janaka27"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-[#FF5500] dark:hover:text-[#FF5500] hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>github.com/Janaka27</span>
              </a>
              <a
                href="https://www.linkedin.com/in/janaka-namal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-[#FF5500] dark:hover:text-[#FF5500] hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>linkedin.com/in/janaka-namal</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            <a href="#overview" className="hover:text-[#FF5500] transition-colors">Overview</a>
            <a href="#services" className="hover:text-[#FF5500] transition-colors">Services</a>
            <a href="#case-studies" className="hover:text-[#FF5500] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#FF5500] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#FF5500] transition-colors">Contact</a>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} T.M. Janaka Namal Thennakoon. All rights reserved.</p>
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Software Engineering Undergraduate | Full Stack Developer | Backend Developer</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
