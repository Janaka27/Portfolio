"use client";

import React, { useState } from "react";
import { X, Download, Check, Mail, MapPin, Globe, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-md">
      <div className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#1E1E24] text-white p-5 border-b border-neutral-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF5500] text-white flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">T.M.JANAKA NAMAL THENNAKOON</h3>
              <p className="text-xs text-neutral-400 font-mono">Software Engineering Undergraduate | Full Stack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF5500] text-white text-xs font-bold hover:bg-[#E04B00] transition-all shadow-md shadow-[#FF5500]/20"
            >
              {downloaded ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              <span>{downloaded ? "Saving PDF..." : "Export PDF / Print"}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-white text-neutral-800 font-sans text-xs">
          {/* Header Block */}
          <div className="border-b border-neutral-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-black tracking-tight text-neutral-900">T.M. JANAKA NAMAL THENNAKOON</h1>
              <p className="text-sm font-bold text-[#FF5500]">SOFTWARE ENGINEERING UNDERGRADUATE | FULL STACK DEVELOPER</p>
              <p className="text-xs text-neutral-600 max-w-xl pt-1 leading-relaxed">
                Software Engineering undergraduate with a strong interest in backend development, system design, and modern web technologies. Hands-on experience building full-stack applications using Laravel, Next.js, React, and databases such as MySQL and PostgreSQL. Enjoys designing scalable backend systems, developing RESTful APIs, and exploring AI/LLM technologies.
              </p>
            </div>

            <div className="space-y-1 text-xs font-mono text-neutral-600 shrink-0">
              <div className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#FF5500]" /> janakanamal.mails@gmail.com</div>
              <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#FF5500]" /> +(94) 71 819 5740</div>
              <div className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-[#FF5500]" /> Kurunegala / Colombo, Sri Lanka</div>
            </div>
          </div>

          {/* Core Skills Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">Technical Skills & Expertise</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <strong className="text-neutral-900 block mb-1">Programming Languages</strong>
                <p className="text-neutral-600 text-[11px]">Python, Java, PHP, JavaScript, TypeScript</p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <strong className="text-neutral-900 block mb-1">Backend Development</strong>
                <p className="text-neutral-600 text-[11px]">Laravel, Flask, Django, NodeJs, SpringBoot, RESTful APIs</p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <strong className="text-neutral-900 block mb-1">Frontend & Mobile</strong>
                <p className="text-neutral-600 text-[11px]">NextJs, ReactJs, Laravel Blade, React Native</p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <strong className="text-neutral-900 block mb-1">DevOps, DB & Tools</strong>
                <p className="text-neutral-600 text-[11px]">Git, GitHub, Docker, Nginx, PostMan, AWS, MySQL, PostgreSQL</p>
              </div>
            </div>
          </div>

          {/* Professional Work History */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">Professional Experience</h2>

            <div className="space-y-4">
              <div className="border-l-2 border-[#FF5500] pl-4 space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-bold text-neutral-900">Backend Developer — HexCode Pvt Ltd, Kurunegala, Sri Lanka</strong>
                  <span className="font-mono text-xs font-bold text-[#FF5500]">2024 — PRESENT</span>
                </div>
                <ul className="text-xs text-neutral-600 leading-relaxed list-disc list-inside space-y-1">
                  <li>Develop and maintain backend APIs and services, supporting reliable communication between frontend applications, databases, and server-side systems.</li>
                  <li>Design and implement scalable and secure backend architectures, following modern software development and API design practices.</li>
                  <li>Collaborate closely with frontend developers and cross-functional team members to deliver and integrate new application features.</li>
                  <li>Optimize backend application performance, reliability, and scalability to support efficient system operations.</li>
                  <li>Troubleshoot, debug, and resolve backend issues, while maintaining and upgrading existing services and systems.</li>
                  <li>Apply software development, security, testing, and documentation best practices throughout the development lifecycle.</li>
                </ul>
              </div>

              <div className="border-l-2 border-neutral-300 pl-4 space-y-1">
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-bold text-neutral-900">Freelance Full Stack Developer (Web / Mobile)</strong>
                  <span className="font-mono text-xs text-neutral-500">2025 — PRESENT</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Building custom full-stack web and mobile applications using Next.js, React, React Native, Laravel, and Flask for diverse client projects.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <strong className="text-neutral-900 block mb-1">1. Storevia</strong>
                <p className="text-neutral-600 text-[11px]">Multi-Vendor E-Commerce Platform with merchant dashboards & payment pipeline.</p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <strong className="text-neutral-900 block mb-1">2. HexUniverse</strong>
                <p className="text-neutral-600 text-[11px]">University-focused peer-to-peer marketplace designed specifically for Sri Lankan university students.</p>
              </div>
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <strong className="text-neutral-900 block mb-1">3. Cardly</strong>
                <p className="text-neutral-600 text-[11px]">Credit Card Management Mobile App built with React Native & RESTful backend.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 border-t border-neutral-200 pt-4">
            <h2 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                <div className="font-bold text-neutral-900">BSc (Hons) Computer Science with Software Engineering</div>
                <div className="text-neutral-600 text-[11px]">National Institute of Business Management (NIBM)</div>
                <div className="text-neutral-400 font-mono text-[10px] mt-1">AUG 2023 – PRESENT</div>
              </div>
              <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                <div className="font-bold text-neutral-900">Bachelor of Information and Communication Technology Honours</div>
                <div className="text-neutral-600 text-[11px]">University of Colombo – Faculty of Technology</div>
                <div className="text-neutral-400 font-mono text-[10px] mt-1">AUG 2024 – PRESENT</div>
              </div>
              <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                <div className="font-bold text-neutral-900">G.C.E. Advanced Level - Technology Stream (2A & 1B)</div>
                <div className="text-neutral-600 text-[11px]">Walisingha Harishchandra College Anuradhapura</div>
                <div className="text-neutral-400 font-mono text-[10px] mt-1">2022</div>
              </div>
              <div className="bg-neutral-50 p-3.5 rounded-xl border border-neutral-200">
                <div className="font-bold text-neutral-900">G.C.E. Ordinary Level (7A & 2B)</div>
                <div className="text-neutral-600 text-[11px]">Walisingha Harishchandra College Anuradhapura</div>
                <div className="text-neutral-400 font-mono text-[10px] mt-1">2019</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2 border-t border-neutral-200 pt-4">
            <h2 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">Certifications & Workshops</h2>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 font-semibold">AWS Academy Cloud Developing (JUN 2026)</span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 font-semibold">Full Stack Web Dev Next.js 14 — MLSA</span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 font-semibold">Navigate GitHub Copilot — MLSA</span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 font-semibold">REST APIs Python Flask — Udemy (Nov 2025)</span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 font-semibold">Laravel From Scratch — Udemy (May 2025)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
