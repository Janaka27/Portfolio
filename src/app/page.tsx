"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { TechStackSection } from "@/components/TechStackSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { SystemSimulator } from "@/components/SystemSimulator";
import { EngineeringStandards } from "@/components/EngineeringStandards";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { TestimonialAndPricingSection } from "@/components/TestimonialAndPricingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F7F8] text-[#111827] selection:bg-[#FF5500] selection:text-white font-sans antialiased">
      {/* Header */}
      <Header onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content */}
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <MarqueeTicker />
        <TechStackSection />
        <CaseStudiesSection />
        <SystemSimulator />
        <EngineeringStandards />
        <ExperienceTimeline />
        <TestimonialAndPricingSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTopButton />

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
