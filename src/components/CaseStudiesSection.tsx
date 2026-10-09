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
  CheckCircle2,
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
  status?: string;
  metrics: { label: string; value: string }[];
  problem: string;
  architecture: string;
  solution: string;
  keyFeatures?: string[];
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
      title: "Storevia",
      subtitle: "Multi-Vendor E-Commerce Platform",
      category: "Multi-Vendor E-Commerce Platform",
      badge: "Multi-Vendor Engine",
      metrics: [
        { label: "Architecture", value: "Modular Monolith" },
        { label: "Database", value: "Multi-DB Sync" },
        { label: "Auth & Push", value: "Firebase" },
        { label: "Order Engine", value: "Real-Time Tracking" },
      ],
      problem: "Managing multiple sellers, stores, products, customers, and orders in a single e-commerce platform can become complex and difficult to scale.",
      architecture: "Built a modular monolith backend with separate database connections for major business modules such as users, products, stores, and orders. The architecture separates business responsibilities while keeping the system manageable and scalable.",
      solution: "Developed a multi-vendor e-commerce platform where sellers can manage their stores and products while customers can browse products, manage carts, place orders, and track purchases.",
      keyFeatures: [
        "Multi-vendor store management",
        "Product and inventory management",
        "Customer authentication",
        "Cart and order management",
        "Voucher and discount management",
        "Real-time order status updates",
        "Firebase authentication and notifications"
      ],
      techStack: ["Laravel", "PHP", "Next.js", "React.js", "MySQL", "Firebase", "Tailwind CSS", "REST API"],
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
      id: "ai-code-reviewer",
      title: "CodeBrain AI Code Reviewer",
      subtitle: "AI-Powered Developer Tool & Code Quality Analyzer",
      category: "AI-Powered Developer Tool",
      badge: "AI Automation Engine",
      metrics: [
        { label: "AI Analysis", value: "Multi-Language" },
        { label: "Security Audit", value: "Vulnerability Check" },
        { label: "Code Feedback", value: "Structured AST" },
        { label: "Review Speed", value: "Automated Instant" },
      ],
      problem: "Manual code reviews can be time-consuming and may make it difficult for developers to quickly identify bugs, security vulnerabilities, code quality issues, and improvement opportunities.",
      architecture: "Built an AI-powered code analysis system that processes submitted source code and uses AI models to analyze the code. The generated results are organized into structured feedback that developers can use to improve their code.",
      solution: "Developed an AI code reviewer that automatically analyzes source code and provides feedback about bugs, security issues, code quality, best practices, and possible improvements.",
      keyFeatures: [
        "AI-powered code analysis",
        "Bug detection",
        "Security vulnerability identification",
        "Code quality analysis",
        "Best-practice suggestions",
        "Detailed AI-generated feedback",
        "Multi-language code analysis"
      ],
      techStack: ["Next.js", "TypeScript", "Node.js", "Gemini API", "Tailwind CSS", "REST API"],
      images: [
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105721.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105759.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105819.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105834.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105848.png",
        "/resources/Project Images/codeBrain/Screenshot 2026-09-30 105902.png",
      ],
      jsonPayload: {
        project_id: "prj_ai_code_reviewer_v2",
        analysis_engine: "GEMINI_AI_AST_PARSER",
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
      title: "Cardly",
      subtitle: "Credit Card Management Mobile App",
      category: "Credit Card Management Mobile App",
      badge: "Privacy-Focused Mobile",
      status: "Currently under development",
      metrics: [
        { label: "Platform", value: "iOS & Android" },
        { label: "Data Storage", value: "Local On-Device" },
        { label: "Card Security", value: "No Sensitive Storage" },
        { label: "Reminders", value: "Payment & Installments" },
      ],
      problem: "Managing multiple credit cards, tracking spending, monitoring available balances, and remembering payment or installment information can be difficult when financial information is scattered across different places.",
      architecture: "Built a privacy-focused mobile architecture where non-sensitive card information and spending records are managed locally on the device. Authentication and selected application services are handled separately, while sensitive card numbers are intentionally not stored.",
      solution: "Developed a mobile application that allows users to manage multiple credit cards, record purchases, monitor available balances, and keep track of payment and installment reminders.",
      keyFeatures: [
        "Multiple credit card management",
        "Custom card nicknames",
        "Purchase tracking",
        "Available balance tracking",
        "Payment reminders",
        "Installment tracking",
        "Local data storage",
        "Privacy-focused data handling"
      ],
      techStack: ["React Native", "TypeScript", "Node.js", "Python", "Local Storage", "REST API"],
      images: [
        "/resources/Project Images/cardly/cardly-1.png",
        "/resources/Project Images/cardly/cardly-2.png",
        "/resources/Project Images/cardly/cardly-3.png",
        "/resources/Project Images/cardly/cardly-4.png",
        "/resources/Project Images/cardly/cardly-logo.png",
        "/resources/Project Images/cardly/2.png",
        "/resources/Project Images/cardly/4.png",
        "/resources/Project Images/cardly/5.png",
        "/resources/Project Images/cardly/7.png",
        "/resources/Project Images/cardly/9.png",
      ],
      jsonPayload: {
        card_app_id: "cardly_app_v1",
        security: {
          storage: "LOCAL_DEVICE_ENCRYPTED",
          sensitive_card_numbers_stored: false,
          biometric_auth: "ENABLED"
        },
        analytics: {
          active_card_reminders: 4,
          installment_tracking: "ENABLED"
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
      keyFeatures: [
        "Campus email student verification",
        "Category-based academic textbook & gear search",
        "Direct buyer-seller student messaging",
        "Student seller trust & reputation ratings",
        "Real-time item filtering"
      ],
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
      id: "gradeflow",
      title: "GradeFlow",
      subtitle: "University Exam Timetables, Result Tracking & GPA Management Mobile App",
      category: "EdTech & Student Productivity Mobile App",
      badge: "GPA & Exam Timetable Engine",
      status: "Currently under development",
      metrics: [
        { label: "Platform", value: "iOS & Android" },
        { label: "Timetables", value: "Exam Schedules" },
        { label: "GPA Engine", value: "Real-Time Auto" },
        { label: "Result Vis", value: "Grade Breakdown" },
      ],
      problem: "University students often struggle to keep track of upcoming exam timetables, organize released subject results, and accurately calculate their semester and cumulative GPAs across academic terms.",
      architecture: "Cross-platform mobile application architecture built with React Native and Expo. Integrates an automated GPA calculation engine based on credit weighting algorithms, exam timetable tracking, and secure local data persistence.",
      solution: "Developed GradeFlow, a feature-rich mobile app tailored for university students to effortlessly manage exam timetables, track released subject results, log grade marks, and instantly calculate clear SGPA & CGPA metrics.",
      keyFeatures: [
        "Automated exam timetable tracking & countdowns",
        "Released subject result tracking & mark logging",
        "Instant automated SGPA & CGPA calculation engine",
        "Clear subject-wise grade point breakdown & visual performance analytics",
        "Clean, intuitive mobile user experience built for university students"
      ],
      techStack: ["React Native", "Expo", "TypeScript", "JavaScript", "Tailwind CSS", "Local Storage"],
      images: [
        "/resources/Project Images/gradeFlow/1.png",
        "/resources/Project Images/gradeFlow/2.png",
        "/resources/Project Images/gradeFlow/3.png",
        "/resources/Project Images/gradeFlow/4.png",
        "/resources/Project Images/gradeFlow/5.png",
        "/resources/Project Images/gradeFlow/6.png",
        "/resources/Project Images/gradeFlow/7.png",
        "/resources/Project Images/gradeFlow/8.png",
        "/resources/Project Images/gradeFlow/9.png",
      ],
      jsonPayload: {
        app_id: "gradeflow_mobile_v1",
        target_audience: "University & Higher Education Students",
        gpa_engine: {
          scale: "4.0 Weighted Grading Scale",
          calculation_status: "AUTOMATED_REAL_TIME",
          metrics_supported: ["SGPA", "CGPA", "Credit Point Breakdown"]
        },
        schedule_sync: {
          exam_timetable_management: "ACTIVE",
          result_tracking: "AUTOMATED"
        }
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
    <section id="case-studies" ref={sectionRef} className="py-24 bg-[#F7F7F8] dark:bg-[#0C0D11] transition-colors duration-300 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 right-0 z-0 text-center pointer-events-none select-none">
        <span className="watermark-text text-8xl sm:text-[12rem] lg:text-[15rem] font-black uppercase tracking-widest block opacity-40 dark:opacity-10">
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

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
              My <span className="text-[#FF5500]">Latest Projects</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              Proven enterprise platforms designed, engineered, and shipped for high availability, sub-second latency, and scale.
            </p>
          </div>
        </motion.div>

        {/* Projects Grid (Responsive 2 columns) */}
        <div className="grid lg:grid-cols-2 gap-7">
          {visibleStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-sm border border-neutral-200/80 dark:border-neutral-800 card-hover group"
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
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    {study.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {study.status && (
                      <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/15 px-2.5 py-0.5 rounded-full border border-amber-500/20 dark:border-amber-500/30 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        Under Dev
                      </span>
                    )}
                    <span className="text-xs font-mono font-bold text-[#FF5500] bg-[#FF5500]/10 dark:bg-[#FF5500]/15 px-3 py-1 rounded-full border border-[#FF5500]/20 dark:border-[#FF5500]/30">
                      {study.badge}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white group-hover:text-[#FF5500] dark:group-hover:text-[#FF5500] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-1">
                    {study.subtitle}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-1">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="bg-neutral-50 dark:bg-neutral-800/60 p-2.5 rounded-2xl border border-neutral-100 dark:border-neutral-700/80">
                      <div className="text-[10px] text-neutral-500 dark:text-neutral-400 font-semibold uppercase">{m.label}</div>
                      <div className="text-xs sm:text-sm font-black text-neutral-900 dark:text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                  <p>
                    <strong className="text-neutral-900 dark:text-white font-semibold">Problem: </strong>
                    {study.problem}
                  </p>
                  <p>
                    <strong className="text-neutral-900 dark:text-white font-semibold">Solution: </strong>
                    {study.solution}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
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

        {/* Show More / Show Less Toggle Button (if more than 4) */}
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
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold bg-[#FF5500] text-white rounded-full">
                    {selectedStudy.category}
                  </span>
                  {selectedStudy.status && (
                    <span className="px-3 py-1 text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      {selectedStudy.status}
                    </span>
                  )}
                </div>
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
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900">
              {/* Metrics Header */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedStudy.metrics.map((m, idx) => (
                  <div key={idx} className="bg-neutral-50 dark:bg-neutral-800/60 p-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-700/80">
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400 font-semibold">{m.label}</div>
                    <div className="text-base font-black text-neutral-900 dark:text-white mt-1">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Project Screenshots & UI Interface Gallery */}
              {selectedStudy.images && selectedStudy.images.length > 0 && (
                <div className="space-y-3 bg-neutral-50 dark:bg-neutral-800/60 p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-700/80">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-extrabold text-neutral-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <ImageIcon className="w-4 h-4 text-[#FF5500]" />
                      Project Screenshots & UI Spec ({selectedStudy.images.length} Screenshots)
                    </h4>
                    <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-medium">Click image to expand full view</span>
                  </div>

                  {/* Main Active Image Display */}
                  <div className="relative group bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-200/90 dark:border-neutral-700 aspect-[16/10] max-h-[360px] flex items-center justify-center shadow-inner">
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
                              : "border-neutral-200 dark:border-neutral-700 opacity-65 hover:opacity-100"
                          }`}
                        >
                          <img src={encodeURI(img)} alt="Thumbnail" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Problem Statement */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-neutral-900 dark:text-white uppercase tracking-wider font-mono">
                  Problem Statement
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-neutral-800/60 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-700/80">
                  {selectedStudy.problem}
                </p>
              </div>

              {/* Architectural Solution & Strategy */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-neutral-900 dark:text-white uppercase tracking-wider font-mono">
                  Architectural Solution & Strategy
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-neutral-800/60 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-700/80">
                  {selectedStudy.architecture}
                </p>
              </div>

              {/* Solution Overview */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-neutral-900 dark:text-white uppercase tracking-wider font-mono">
                  Solution Overview
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed bg-neutral-50 dark:bg-neutral-800/60 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-700/80">
                  {selectedStudy.solution}
                </p>
              </div>

              {/* Key Features & Capabilities */}
              {selectedStudy.keyFeatures && selectedStudy.keyFeatures.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold text-neutral-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#FF5500]" />
                    Key Features & System Capabilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5 bg-neutral-50 dark:bg-neutral-800/60 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-700/80">
                    {selectedStudy.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-700 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* JSON API Response Payload Simulator */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold text-neutral-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-[#FF5500]" />
                    Simulated Payload & Telemetry Spec
                  </h4>
                  <button
                    onClick={() => copyPayload(selectedStudy.jsonPayload)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full border border-neutral-200 dark:border-neutral-700 transition-colors"
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
            <div className="bg-neutral-50 dark:bg-neutral-900 p-4 sm:p-5 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Target SLA: 99.99% Availability</span>
              <button
                onClick={() => setSelectedStudy(null)}
                className="px-5 py-2.5 rounded-full bg-[#1E1E24] dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-700 text-white text-xs font-bold transition-colors"
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
