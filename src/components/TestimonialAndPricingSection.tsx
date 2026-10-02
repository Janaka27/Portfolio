"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle2, ArrowUpRight, Quote, Building } from "lucide-react";

export function TestimonialAndPricingSection() {
  const testimonials = [
    {
      quote: "Janaka delivered exceptional backend services for HexCode Pvt Ltd. His attention to API security, database structure, and seamless integration with our frontend team was invaluable for our release cycles.",
      name: "HexCode Team",
      role: "Engineering Management, HexCode Pvt Ltd",
      rating: 5.0,
      avatar: "HC",
    },
    {
      quote: "Working with Janaka on custom Web & Mobile projects was a smooth experience. He communicates clearly, builds clean Laravel and Next.js applications, and delivers reliable software solutions on schedule.",
      name: "Freelance Partner",
      role: "Client Project Lead, Full Stack Solutions",
      rating: 5.0,
      avatar: "FP",
    },
  ];

  const pricingPlans = [
    {
      name: "Backend & API Contract",
      price: "Flexible",
      period: "Project / Hourly",
      subtitle: "RESTful API development, database architecture design, and system optimization.",
      features: [
        "Laravel, Flask, Django or Node.js Backend API Development",
        "MySQL & PostgreSQL Relational Schema Design",
        "Authentication, JWT, & Role-Based Access Control",
        "Postman Documentation & API Integration",
        "Performance Optimization & Bug Fixing",
      ],
      isPopular: false,
    },
    {
      name: "Full Stack & Mobile Development",
      price: "Retainer",
      period: "Dedicated",
      subtitle: "Complete end-to-end web & mobile application building (Next.js, React, React Native).",
      features: [
        "Next.js / React Web App & React Native Mobile App",
        "Full Stack Architecture (Laravel / Node Backend + React Frontend)",
        "Docker Containerization & AWS Cloud Setup",
        "Continuous Communication & Daily Updates",
        "Code Maintenance & Feature Enhancements",
      ],
      isPopular: true,
    },
  ];

  return (
    <section className="py-24 bg-[#F7F7F8] dark:bg-[#0C0D11] transition-colors duration-300 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 right-0 z-0 text-center pointer-events-none select-none">
        <span className="watermark-text text-8xl sm:text-[12rem] lg:text-[15rem] font-black uppercase tracking-widest block opacity-40 dark:opacity-10">
          RESULTS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Testimonials Block */}
        <div>
          {/* Section Subtitle `- Testimonials` */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-3 mb-12"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                Client Feedback
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
              Testimonials that Lead to <span className="text-[#FF5500]">My Results</span>
            </h2>
          </motion.div>

          {/* Testimonial Cards Grid (Featuring the dark card matching top right of image) */}
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="bg-[#1E1E24] dark:bg-neutral-900 text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative flex flex-col justify-between border border-neutral-800 card-hover"
              >
                <div>
                  {/* Rating Stars matching image */}
                  <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#FF5500] text-[#FF5500]" />
                      ))}
                      <span className="ml-2 font-black text-white text-sm">5.0</span>
                    </div>

                    <Quote className="w-8 h-8 text-neutral-700" />
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic my-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Client Avatar & Details */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
                  <div className="w-12 h-12 rounded-full bg-[#FF5500] text-white font-extrabold flex items-center justify-center text-sm shadow-md">
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{item.name}</h4>
                    <p className="text-xs text-[#FF5500] font-semibold">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pricing / Retainer Cards Block (Matching bottom right of reference image) */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-3 mb-12"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                Engagement Models
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
              Flexible <span className="text-[#FF5500]">Retainer Options</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm border transition-all card-hover relative ${
                  plan.isPopular
                    ? "bg-white dark:bg-neutral-900 border-[#FF5500] dark:border-[#FF5500] ring-2 ring-[#FF5500]/20 shadow-xl"
                    : "bg-white dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 right-8 bg-[#FF5500] text-white text-[10px] font-mono font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    Recommended Engagement
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{plan.name}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 mb-6 font-medium">{plan.subtitle}</p>

                  <div className="flex items-baseline gap-1 my-4">
                    <span className="text-4xl sm:text-5xl font-black text-[#FF5500]">{plan.price}</span>
                    <span className="text-sm font-bold text-neutral-500 dark:text-neutral-400">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 my-8 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                        <div className="w-4 h-4 rounded-full bg-[#FFF2EC] dark:bg-[#FF5500]/20 text-[#FF5500] flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-xs font-bold transition-all shadow-md group ${
                    plan.isPopular
                      ? "bg-[#FF5500] text-white hover:bg-[#E04B00] shadow-[#FF5500]/25"
                      : "bg-[#1E1E24] dark:bg-neutral-800 text-white hover:bg-neutral-800 dark:hover:bg-neutral-700"
                  }`}
                >
                  <span>Get Started Today</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
