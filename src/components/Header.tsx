"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface HeaderProps {
  onOpenResume: () => void;
}

export function Header({ onOpenResume }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#case-studies" },
    { name: "Architecture", href: "#architecture" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.substring(1));
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check if user is at the bottom of the page -> activate contact
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 80) {
        setActiveSection("contact");
        return;
      }

      const targetY = 250;
      let matched = false;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetY && rect.bottom > targetY) {
            setActiveSection(id);
            matched = true;
            break;
          }
        }
      }

      if (!matched && window.scrollY < 200) {
        setActiveSection("overview");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#0C0D11]/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 py-3.5 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#overview" className="flex items-center gap-2.5 group focus:outline-none">
          <div className="w-9 h-9 rounded-xl bg-[#FF5500] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#FF5500]/20 group-hover:scale-105 transition-transform">
            <span className="font-extrabold tracking-tighter">J</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-neutral-900 dark:text-white text-lg group-hover:text-[#FF5500] transition-colors">
              Janaka<span className="text-[#FF5500]">.</span>
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 dark:bg-neutral-900/80 p-1.5 rounded-full border border-neutral-200/80 dark:border-neutral-800 shadow-sm backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href.substring(1))}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/25 font-bold"
                    : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action buttons */}
        <div className="hidden md:flex items-center gap-3">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
            Available for Work
          </span>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 shadow-sm focus:outline-none"
            aria-label="Toggle Theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-neutral-700 dark:text-neutral-200 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 transition-all duration-200 shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            <FileText className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#FF5500] hover:bg-[#E04B00] transition-all duration-200 shadow-md shadow-[#FF5500]/25 hover:shadow-lg hover:shadow-[#FF5500]/35 group"
          >
            <span>Hire Me</span>
            <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
          </a>
        </div>

        {/* Mobile controls: Theme toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 focus:outline-none shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-neutral-700" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 focus:outline-none shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0C0D11]/95 border-b border-neutral-200 dark:border-neutral-800 backdrop-blur-xl px-4 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href.substring(1));
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                    isActive
                      ? "bg-[#FF5500] text-white font-bold"
                      : "text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                Available for Work
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
              >
                <FileText className="w-3.5 h-3.5 text-[#FF5500]" />
                Resume PDF
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-full text-xs font-bold bg-[#FF5500] text-white shadow-md shadow-[#FF5500]/20"
              >
                Hire Me
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
