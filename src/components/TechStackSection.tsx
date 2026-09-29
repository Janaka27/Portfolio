"use client";

import React, { useState } from "react";
import {
  Code2,
  Server,
  Cloud,
  Database,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";

import { motion } from "framer-motion";

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState<"all" | "services" | "architecture" | "cloud">("all");

  const services = [
    {
      id: "s1",
      title: "Backend Engineering & RESTful APIs",
      category: "backend",
      description: "Designing scalable, secure backend systems and RESTful APIs using Laravel, Flask, Django, Node.js, and SpringBoot with robust authentication and database integrations.",
      isFeatured: true,
      tags: ["Laravel", "Flask", "Django", "Node.js", "SpringBoot", "Python", "PHP"],
      impact: "Clean Architecture & Secure RESTful API Services",
      icon: Server,
    },
    {
      id: "s2",
      title: "Full-Stack & Web Application Dev",
      category: "frontend",
      description: "Crafting modern, responsive web applications leveraging Next.js, React.js, TypeScript, and Laravel Blade with rich interactive user interfaces.",
      isFeatured: false,
      tags: ["Next.js", "React.js", "TypeScript", "JavaScript", "Laravel Blade"],
      impact: "Responsive, Fast & User-Centric Web Apps",
      icon: Code2,
    },
    {
      id: "s3",
      title: "Mobile App Development",
      category: "mobile",
      description: "Building intuitive cross-platform mobile solutions using React Native with seamless REST API synchronization and state management.",
      isFeatured: false,
      tags: ["React Native", "JavaScript", "TypeScript", "Mobile REST APIs"],
      impact: "Cross-Platform Mobile Application Delivery",
      icon: Cloud,
    },
    {
      id: "s4",
      title: "Database Systems & DevOps Tools",
      category: "devops",
      description: "Designing normalized relational schemas in MySQL and PostgreSQL, containerizing apps with Docker, Nginx server configs, Git, Postman, and AWS cloud.",
      isFeatured: false,
      tags: ["MySQL", "PostgreSQL", "Docker", "Nginx", "Git", "AWS", "Postman"],
      impact: "Reliable Database Management & Containerization",
      icon: Database,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F7F7F8] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 right-0 z-0 text-center pointer-events-none select-none">
        <span className="watermark-text text-8xl sm:text-[12rem] lg:text-[15rem] font-black uppercase tracking-widest block opacity-40">
          SERVICES
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                Services & Expertise
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
              My <span className="text-[#FF5500]">Services</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Comprehensive engineering capabilities tailored for fast-growing scaleups and mission-critical enterprise platforms.
            </p>
          </div>

          {/* Action Button */}
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-bold text-white bg-[#FF5500] hover:bg-[#E04B00] transition-all shadow-md shadow-[#FF5500]/20 hover:shadow-lg shrink-0 self-start md:self-auto group"
          >
            <span>Inquire Service</span>
            <div className="w-6 h-6 rounded-full bg-white text-[#FF5500] flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </motion.a>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;

            if (service.isFeatured) {
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="bg-[#1E1E24] text-white p-7 rounded-3xl shadow-2xl flex flex-col justify-between relative group border border-neutral-800 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between pb-6">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[#FF5500]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="w-9 h-9 rounded-full bg-[#FF5500] text-white flex items-center justify-center group-hover:rotate-45 transition-transform shadow-md shadow-[#FF5500]/30">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                      {service.title}
                    </h3>

                    <p className="text-xs text-neutral-300 leading-relaxed font-normal mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-neutral-800">
                    <div className="flex items-center gap-1.5 text-xs text-[#FF5500] font-semibold">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{service.impact}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-neutral-800 text-neutral-300 border border-neutral-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="bg-white text-neutral-900 p-7 rounded-3xl shadow-sm border border-neutral-200/80 flex flex-col justify-between relative group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-6">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-800 group-hover:bg-[#FF5500] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center group-hover:bg-[#FF5500] group-hover:text-white group-hover:rotate-45 transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-3 group-hover:text-[#FF5500] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-800 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>{service.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-neutral-100 text-neutral-700 border border-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
