"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, TestTube, Gauge, CheckCircle2 } from "lucide-react";

export function EngineeringStandards() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Clean RESTful API Architecture",
      points: [
        "Structured controller, service, and repository layer separations",
        "JWT / Session authentication with fine-grained role-based access control (RBAC)",
        "Standardized JSON API error handling, HTTP status codes, and payload validation",
        "Comprehensive Postman API documentation and contract testing",
      ],
    },
    {
      icon: Activity,
      title: "Relational Database Optimization",
      points: [
        "Normalized relational schemas in MySQL & PostgreSQL",
        "Query execution plan optimization and index creation for high-performance reads",
        "ACID transactional integrity for order pipelines & financial transactions",
        "Efficient ORM usage with Eloquent, SQLAlchemy, and Prisma/TypeORM",
      ],
    },
    {
      icon: TestTube,
      title: "Modern Full-Stack & Mobile UX",
      points: [
        "Responsive, fast UI components using Next.js, React.js, and Tailwind CSS",
        "Cross-platform mobile apps with React Native and native module integration",
        "Optimistic UI state management and seamless REST API data syncing",
        "Clean, maintainable code structures achieving high reliability",
      ],
    },
    {
      icon: Gauge,
      title: "DevOps, Containerization & Cloud",
      points: [
        "Docker containerization for repeatable dev and staging environments",
        "Nginx reverse proxy and web server configuration",
        "AWS Cloud deployment and cloud development best practices",
        "Continuous integration, Git version control, and GitHub workflows",
      ],
    },
  ];

  return (
    <section id="architecture" className="py-24 bg-[#F7F7F8] dark:bg-[#0C0D11] transition-colors duration-300 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 right-0 z-0 text-center pointer-events-none select-none">
        <span className="watermark-text text-8xl sm:text-[12rem] lg:text-[15rem] font-black uppercase tracking-widest block opacity-40 dark:opacity-10">
          STANDARDS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching template `- Standards` */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                Engineering Methodology
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
              Enterprise <span className="text-[#FF5500]">Security & Quality</span> Standards
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              Writing clean code is only half the battle. Enterprise software demands security hardening, deep observability, test automation, and measurable SLA adherence.
            </p>
          </div>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="bg-white dark:bg-neutral-900 rounded-3xl p-7 sm:p-8 border border-neutral-200/80 dark:border-neutral-800 shadow-sm card-hover space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF2EC] dark:bg-[#FF5500]/20 text-[#FF5500] flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{pillar.title}</h3>
                </div>

                <ul className="space-y-3 pt-2">
                  {pillar.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
