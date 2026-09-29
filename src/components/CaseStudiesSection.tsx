"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  ExternalLink, 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  Terminal, 
  X, 
  Check, 
  Copy,
  ArrowUpRight,
  Layers,
  Code2,
  Server,
  Zap
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  metrics: { label: string; value: string }[];
  problem: string;
  architecture: string;
  solution: string;
  techStack: string[];
  jsonPayload: object;
}

export function CaseStudiesSection() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const studies: CaseStudy[] = [
    {
      id: "storevia",
      title: "Storevia Multi-Vendor E-Commerce",
      subtitle: "Scalable E-Commerce Marketplace with Vendor Dashboards & Payment Gateway",
      category: "E-Commerce & Web Platform",
      badge: "Multi-Vendor Engine",
      metrics: [
        { label: "Vendor Management", value: "Multi-Tenant" },
        { label: "API Response", value: "< 45 ms" },
        { label: "Database Security", value: "Role RBAC" },
        { label: "Order Pipeline", value: "Automated" },
      ],
      problem: "Traditional single-vendor e-commerce solutions lacked dynamic multi-merchant product catalogs, vendor-level inventory synchronization, and localized checkout processing.",
      architecture: "Full-stack e-commerce architecture utilizing Laravel REST APIs, MySQL relational database design, Next.js / Blade dynamic UI components, and secure payment processing.",
      solution: "Engineered a robust multi-vendor marketplace engine featuring isolated merchant portals, automated order splitting, real-time inventory tracking, and responsive customer checkout.",
      techStack: ["Laravel", "PHP", "Next.js", "React.js", "MySQL", "Tailwind CSS", "REST API"],
      jsonPayload: {
        storevia_order_id: "ord_storevia_998124",
        status: "PROCESSING_VENDOR_DISPATCH",
        vendor_details: {
          vendor_id: "vnd_lanka_tech_store",
          commission_rate: "8.5%",
          payout_status: "SCHEDULED"
        },
        items: [
          { sku: "SKU_DEV_BOARD_ESP32", qty: 2, price_lkr: 4500 },
          { sku: "SKU_USB_C_HUB_PRO", qty: 1, price_lkr: 8200 }
        ],
        database_sync: {
          engine: "MySQL 8.0 / InnoDB",
          query_execution_time: "12ms",
          acid_status: "VERIFIED"
        }
      }
    },
    {
      id: "hexuniverse",
      title: "HexUniverse P2P Campus Marketplace",
      subtitle: "University Peer-to-Peer Trading Platform for Sri Lankan Students",
      category: "EdTech & Community P2P",
      badge: "Student P2P Network",
      metrics: [
        { label: "Target Audience", value: "UOC & NIBM" },
        { label: "Verification", value: "University Email" },
        { label: "Search Latency", value: "< 25 ms" },
        { label: "Trade Safety", value: "Verified Profiles" },
      ],
      problem: "University students in Sri Lanka needed a secure, closed-loop community marketplace to buy, sell, and exchange academic textbooks, hardware gear, and student essentials.",
      architecture: "Decoupled web platform powered by React.js & Next.js frontend, Node.js / Laravel RESTful backend, PostgreSQL database, and real-time item listing filter engines.",
      solution: "Developed a campus-centric P2P marketplace featuring verified university email sign-ups, category-based search filters, student profile reviews, and direct buyer-seller messaging.",
      techStack: ["Next.js", "React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
      jsonPayload: {
        listing_id: "hex_p2p_item_77281",
        campus: "University of Colombo - Faculty of Technology",
        seller: {
          student_id: "uoc_ft_tech_2024_091",
          verification_status: "VERIFIED_STUDENT_EMAIL",
          reputation_score: 4.9
        },
        listing: {
          title: "Advanced Data Structures & Algorithms Textbook",
          price_lkr: 3500,
          category: "Academic Books & Electronics",
          condition: "LIKE_NEW"
        }
      }
    },
    {
      id: "cardly",
      title: "Cardly Credit Card Management App",
      subtitle: "Mobile App for Card Tracking, Expense Analytics & Payment Reminders",
      category: "FinTech & Mobile",
      badge: "Cross-Platform Mobile",
      metrics: [
        { label: "Platform", value: "iOS & Android" },
        { label: "Data Security", value: "Encrypted Storage" },
        { label: "UI Response", value: "60 FPS Native" },
        { label: "Sync Latency", value: "< 30 ms" },
      ],
      problem: "Users managing multiple credit cards struggled to keep track of payment due dates, interest free grace periods, and spending breakdown across different bank accounts.",
      architecture: "Cross-platform mobile app built with React Native, state management, secure device storage, and RESTful Python Flask / Node backend microservices.",
      solution: "Created an intuitive mobile credit card management experience with automated statement due alerts, graphical category expense breakdowns, and encrypted local card metadata.",
      techStack: ["React Native", "TypeScript", "Python (Flask)", "PostgreSQL", "Docker", "REST API"],
      jsonPayload: {
        card_id: "card_visa_platinum_9012",
        card_holder: "Janaka Namal",
        analytics: {
          total_credit_limit_lkr: 500000,
          current_utilization: "24.5%",
          next_due_date: "2026-10-15",
          interest_saved_lkr: 14500
        },
        security: {
          biometric_auth_enabled: true,
          tokenized_storage: "AES_256_SECURE_STORAGE"
        }
      }
    }
  ];

  const copyPayload = (payload: object) => {
    navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  return (
    <section id="case-studies" className="py-24 bg-[#F7F7F8] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 right-0 z-0 text-center pointer-events-none select-none">
        <span className="watermark-text text-8xl sm:text-[12rem] lg:text-[15rem] font-black uppercase tracking-widest block opacity-40">
          PROJECTS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching template: `- Projects` + `My Latest Projects` */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                Projects
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
              My <span className="text-[#FF5500]">Latest Projects</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Proven enterprise platforms designed, engineered, and shipped for high availability, sub-second latency, and scale.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {studies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm border border-neutral-200/80 card-hover group"
            >
              <div className="space-y-4">
                {/* Category & Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    {study.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#FF5500] bg-[#FFF2EC] px-3 py-1 rounded-full border border-[#FF5500]/20">
                    {study.badge}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-black text-neutral-900 group-hover:text-[#FF5500] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium mt-1">
                    {study.subtitle}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="bg-neutral-50 p-3 rounded-2xl border border-neutral-100">
                      <div className="text-[10px] text-neutral-500 font-semibold uppercase">{m.label}</div>
                      <div className="text-sm font-black text-neutral-900 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-2 text-xs text-neutral-600 leading-relaxed font-normal">
                  <p>
                    <strong className="text-neutral-900 font-semibold">Challenge: </strong>
                    {study.problem}
                  </p>
                  <p>
                    <strong className="text-neutral-900 font-semibold">Solution: </strong>
                    {study.solution}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-[11px] font-mono bg-neutral-100 text-neutral-700 border border-neutral-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FF5500]" /> Verified Architecture
                </span>

                <button
                  onClick={() => setSelectedStudy(study)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#FF5500] hover:bg-[#E04B00] transition-all shadow-md shadow-[#FF5500]/20 group/btn"
                >
                  <span>Inspect Spec</span>
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <ArrowUpRight className="w-3 h-3 text-white" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#1E1E24] text-white p-6 border-b border-neutral-800 flex items-center justify-between">
              <div>
                <span className="px-3 py-1 text-[10px] font-mono font-bold bg-[#FF5500] text-white rounded-full">
                  {selectedStudy.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-2">{selectedStudy.title}</h3>
              </div>
              <button
                onClick={() => setSelectedStudy(null)}
                className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-neutral-800">
              {/* Metrics Header */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedStudy.metrics.map((m, idx) => (
                  <div key={idx} className="bg-neutral-50 p-3.5 rounded-2xl border border-neutral-200">
                    <div className="text-[10px] text-neutral-500 font-semibold">{m.label}</div>
                    <div className="text-base font-black text-neutral-900 mt-1">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-neutral-900 uppercase tracking-wider font-mono">
                  Problem Statement
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  {selectedStudy.problem}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-neutral-900 uppercase tracking-wider font-mono">
                  Architectural Solution & Strategy
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                  {selectedStudy.architecture}
                </p>
              </div>

              {/* JSON API Response Payload Simulator */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold text-neutral-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-[#FF5500]" />
                    Simulated Payload & Telemetry Spec
                  </h4>
                  <button
                    onClick={() => copyPayload(selectedStudy.jsonPayload)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold bg-neutral-100 text-neutral-700 hover:bg-neutral-200 rounded-full border border-neutral-200 transition-colors"
                  >
                    {copiedPayload ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPayload ? "Copied" : "Copy JSON"}</span>
                  </button>
                </div>

                <div className="bg-[#1E1E24] p-4 rounded-2xl border border-neutral-800 font-mono text-[11px] text-neutral-300 overflow-x-auto">
                  <pre className="text-emerald-400 leading-relaxed">
                    {JSON.stringify(selectedStudy.jsonPayload, null, 2)}
                  </pre>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-neutral-50 p-4 sm:p-5 border-t border-neutral-200 flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-500">Target SLA: 99.99% Availability</span>
              <button
                onClick={() => setSelectedStudy(null)}
                className="px-5 py-2.5 rounded-full bg-[#1E1E24] hover:bg-neutral-800 text-white text-xs font-bold transition-colors"
              >
                Close Spec Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
