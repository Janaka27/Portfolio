"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
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
  Zap,
  Image as ImageIcon,
  Maximize2
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
  images?: string[];
}

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Automatically collapse expanded projects when user scrolls past below the section
  useEffect(() => {
    if (!showAll) return;

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // If bottom of section scrolls past viewport top
        if (rect.bottom < 100) {
          setShowAll(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAll]);

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
      images: [
        "/resources/Project Images/storevia/Screenshot 2026-09-24 230042.png",
        "/resources/Project Images/storevia/Screenshot 2026-09-26 090733.png",
        "/resources/Project Images/storevia/Screenshot 2026-09-26 092254.png",
        "/resources/Project Images/storevia/Screenshot 2026-09-26 092507.png",
        "/resources/Project Images/storevia/Screenshot 2026-09-26 092542.png",
      ],
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
        { label: "Target Audience", value: "University Students" },
        { label: "Verification", value: "University Email" },
        { label: "Search Latency", value: "< 25 ms" },
        { label: "Trade Safety", value: "Verified Profiles" },
      ],
      problem: "University students in Sri Lanka needed a secure, closed-loop community marketplace to buy, sell, and exchange academic textbooks, hardware gear, and student essentials.",
      architecture: "Decoupled web platform powered by React.js & Next.js frontend, Node.js / Laravel RESTful backend, PostgreSQL database, and real-time item listing filter engines.",
      solution: "Developed a campus-centric P2P marketplace featuring verified university email sign-ups, category-based search filters, student profile reviews, and direct buyer-seller messaging.",
      techStack: ["Next.js", "React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST API"],
      images: [
        "/resources/Project Images/Hexuniverse/Screenshot 2026-09-30 103900.png",
        "/resources/Project Images/Hexuniverse/Screenshot 2026-09-30 103922.png",
        "/resources/Project Images/Hexuniverse/Screenshot 2026-09-30 103945.png",
        "/resources/Project Images/Hexuniverse/Screenshot 2026-09-30 104003.png",
        "/resources/Project Images/Hexuniverse/Screenshot 2026-09-30 104021.png",
        "/resources/Project Images/Hexuniverse/Screenshot 2026-09-30 104036.png",
      ],
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
      id: "codebrain",
      title: "CodeBrain Developer Intelligence Suite",
      subtitle: "Automated Code Analysis, Project Telemetry & Architecture Spec Platform",
      category: "DevTools & AI Automation",
      badge: "Developer Engine",
      metrics: [
        { label: "Code Parsing", value: "< 15 ms" },
        { label: "Analysis Engine", value: "AST Based" },
        { label: "Telemetry", value: "Real-time" },
        { label: "Automation", value: "CI/CD Pipeline" },
      ],
      problem: "Software developer teams needed a unified intelligence workspace to analyze codebase architecture, inspect dynamic project specs, and track real-time telemetry.",
      architecture: "High-performance developer platform engineered with Next.js, React, Node.js REST services, code syntax inspection engines, and interactive visual dashboards.",
      solution: "Developed CodeBrain—a powerful workspace providing deep architectural analysis, interactive project spec inspection, and real-time developer productivity insights.",
      techStack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "REST API", "Docker"],
      images: [
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105721.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105759.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105819.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105834.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105848.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105902.png",
      ],
      jsonPayload: {
        project_id: "prj_codebrain_v2",
        analysis_engine: "AST_PARSER_V3",
        telemetry: {
          files_scanned: 142,
          lines_analyzed: 28450,
          code_quality_score: "A+",
          security_vulnerabilities: 0
        },
        execution_env: "Node.js v20 / Next.js SSR"
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
      images: [
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105721.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105759.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105819.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105848.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105902.png",
      ],
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
    },
    {
      id: "devpulse",
      title: "DevPulse Microservice Health Monitor",
      subtitle: "Distributed API Monitoring & Infrastructure Telemetry Engine",
      category: "Cloud Infrastructure & Monitoring",
      badge: "System Telemetry",
      metrics: [
        { label: "Uptime SLA", value: "99.99%" },
        { label: "Health Poll", value: "5 sec interval" },
        { label: "Alert Dispatch", value: "< 100 ms" },
        { label: "Nodes Tracked", value: "50+ Microservices" },
      ],
      problem: "Distributed microservice architectures required continuous ping monitoring, anomaly detection, and automated alerting for database latency spikes.",
      architecture: "Decoupled health checking agent written in Python & Go, reporting back to Next.js dashboard UI via WebSockets and REST API endpoints.",
      solution: "Engineered DevPulse—an automated microservice health suite providing instant failover alerts, dynamic status badges, and synthetic uptime tracking.",
      techStack: ["Go", "Python", "Next.js", "Docker", "Redis", "REST API"],
      images: [
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105721.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105759.png"
      ],
      jsonPayload: {
        node_cluster: "cluster_ap_south_colombo",
        active_monitors: 52,
        system_load: "0.14",
        alert_channel: "SLACK_WEBHOOK_READY"
      }
    },
    {
      id: "taskflow",
      title: "TaskFlow Enterprise Kanban & Sprint Suite",
      subtitle: "Real-time Agile Workflow Engine with Role-Based Access Control",
      category: "SaaS & Productivity",
      badge: "Agile Workflow",
      metrics: [
        { label: "Realtime Sync", value: "WebSockets" },
        { label: "RBAC Roles", value: "Admin / Dev / Lead" },
        { label: "Sprint Board", value: "Drag & Drop" },
        { label: "Latency", value: "< 20 ms" },
      ],
      problem: "Project teams needed a ultra-fast, responsive task management tool with instant team updates, ticket drag-and-drop, and granular permission controls.",
      architecture: "React / Next.js frontend integrated with Node.js WebSocket gateway and PostgreSQL relational data schema.",
      solution: "Delivered TaskFlow—a modern sprint management tool supporting real-time board updates, automated notification triggers, and custom workflow states.",
      techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      images: [
        "/resources/Project Images/storevia/Screenshot 2026-09-24 230042.png",
        "/resources/Project Images/storevia/Screenshot 2026-09-26 090733.png"
      ],
      jsonPayload: {
        board_id: "sprint_board_q4_2026",
        active_sprint: "Sprint 14",
        velocity: "42 story points",
        db_transaction: "ISOLATION_READ_COMMITTED"
      }
    }
  ];

  const visibleStudies = showAll ? studies : studies.slice(0, 4);

  const copyPayload = (payload: object) => {
    navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  return (
    <section id="case-studies" ref={sectionRef} className="py-24 bg-[#F7F7F8] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 right-0 z-0 text-center pointer-events-none select-none">
        <span className="watermark-text text-8xl sm:text-[12rem] lg:text-[15rem] font-black uppercase tracking-widest block opacity-40">
          PROJECTS
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
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
        </motion.div>

        {/* Projects Grid (Responsive 2 columns, reduced width) */}
        <div className="grid lg:grid-cols-2 gap-7">
          {visibleStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-sm border border-neutral-200/80 card-hover group"
            >
              <div className="space-y-4">
                {/* Project Screenshot Cover Preview Banner */}
                {study.images && study.images.length > 0 && (
                  <div
                    onClick={() => {
                      setSelectedStudy(study);
                      setActiveImageIndex(0);
                    }}
                    className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-neutral-950 cursor-pointer group/img border border-neutral-200/80 mb-2 shadow-sm"
                  >
                    <img
                      src={encodeURI(study.images[0])}
                      alt={`${study.title} cover`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover/img:opacity-90 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="text-xs font-semibold text-white/90 truncate max-w-[70%]">
                        {study.title}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/60 text-white backdrop-blur-md border border-white/10">
                        <ImageIcon className="w-3 h-3 text-[#FF5500]" />
                        {study.images.length} UI Screenshots
                      </span>
                    </div>
                  </div>
                )}

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
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900 group-hover:text-[#FF5500] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium mt-1">
                    {study.subtitle}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-1">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="bg-neutral-50 p-2.5 rounded-2xl border border-neutral-100">
                      <div className="text-[10px] text-neutral-500 font-semibold uppercase">{m.label}</div>
                      <div className="text-xs sm:text-sm font-black text-neutral-900 mt-0.5">{m.value}</div>
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
                <div className="flex flex-wrap gap-1.5 pt-1">
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
                  onClick={() => {
                    setSelectedStudy(study);
                    setActiveImageIndex(0);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#FF5500] hover:bg-[#E04B00] transition-all shadow-md shadow-[#FF5500]/20 group/btn"
                >
                  <span>Inspect Spec</span>
                  <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <ArrowUpRight className="w-3 h-3 text-white" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Toggle Button */}
        {studies.length > 4 && (
          <div className="mt-12 text-center flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase text-white bg-[#1E1E24] hover:bg-[#FF5500] transition-all shadow-lg hover:shadow-[#FF5500]/25 group"
            >
              <span>{showAll ? "Show Less Projects" : `Show More Projects (${studies.length - 4} More)`}</span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-[#FF5500] group-hover:text-white transition-colors" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#FF5500] group-hover:text-white transition-colors" />
              )}
            </button>
          </div>
        )}

      </div>

      {/* Detail Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl max-h-[92vh] flex flex-col">
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

              {/* Project Screenshots & UI Interface Gallery */}
              {selectedStudy.images && selectedStudy.images.length > 0 && (
                <div className="space-y-3 bg-neutral-50 p-4 sm:p-5 rounded-2xl border border-neutral-200">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-extrabold text-neutral-900 uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#FF5500]" />
                      Project Screenshots & UI Spec ({selectedStudy.images.length} Screenshots)
                    </h4>
                    <span className="text-[11px] text-neutral-500 font-medium">Click image to expand full view</span>
                  </div>

                  {/* Main Active Image Display */}
                  <div className="relative group bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-200/90 aspect-[16/10] max-h-[360px] flex items-center justify-center shadow-inner">
                    <img
                      src={encodeURI(selectedStudy.images[activeImageIndex])}
                      alt={`${selectedStudy.title} screenshot ${activeImageIndex + 1}`}
                      className="w-full h-full object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.01]"
                      onClick={() => setFullscreenImage(selectedStudy.images![activeImageIndex])}
                    />

                    {/* Prev / Next arrows */}
                    {selectedStudy.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : selectedStudy.images!.length - 1));
                          }}
                          className="absolute left-3 p-2.5 rounded-full bg-black/60 hover:bg-[#FF5500] text-white backdrop-blur-md transition-all shadow-md"
                          title="Previous Screenshot"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex((prev) => (prev < selectedStudy.images!.length - 1 ? prev + 1 : 0));
                          }}
                          className="absolute right-3 p-2.5 rounded-full bg-black/60 hover:bg-[#FF5500] text-white backdrop-blur-md transition-all shadow-md"
                          title="Next Screenshot"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    {/* Fullscreen Button */}
                    <button
                      onClick={() => setFullscreenImage(selectedStudy.images![activeImageIndex])}
                      className="absolute top-3 right-3 p-2 rounded-xl bg-black/60 text-white hover:bg-[#FF5500] backdrop-blur-md transition-colors"
                      title="View Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Counter Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-white border border-white/10">
                      {activeImageIndex + 1} / {selectedStudy.images.length}
                    </div>
                  </div>

                  {/* Thumbnail Selector Row */}
                  {selectedStudy.images.length > 1 && (
                    <div className="flex items-center gap-2.5 overflow-x-auto py-1 scrollbar-thin">
                      {selectedStudy.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                            activeImageIndex === idx
                              ? "border-[#FF5500] ring-2 ring-[#FF5500]/30 scale-105"
                              : "border-neutral-200 opacity-65 hover:opacity-100"
                          }`}
                        >
                          <img src={encodeURI(img)} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

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

      {/* Fullscreen Lightbox Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-neutral-800 text-white hover:bg-[#FF5500] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={encodeURI(fullscreenImage)}
            alt="Fullscreen Spec Screenshot"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-neutral-800 cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
