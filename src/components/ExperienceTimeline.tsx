"use client";

import React from "react";
import { Building2, Calendar, MapPin, Award, CheckCircle2, GraduationCap } from "lucide-react";

export function ExperienceTimeline() {
  const experiences = [
    {
      role: "Backend Developer",
      company: "HexCode Pvt Ltd",
      location: "Kurunegala, Sri Lanka",
      period: "2024 — PRESENT",
      type: "Full-Time",
      achievements: [
        "Develop and maintain backend APIs and services, supporting reliable communication between frontend applications, databases, and server-side systems.",
        "Design and implement scalable and secure backend architectures following modern software development and REST API design practices.",
        "Collaborate closely with frontend developers and cross-functional team members to deliver and integrate new application features.",
        "Optimize backend application performance, reliability, and database operations to support efficient system operations.",
        "Troubleshoot, debug, and resolve backend issues while maintaining and upgrading existing services and systems.",
        "Apply software development, security, testing, and documentation best practices throughout the development lifecycle.",
      ],
      stack: ["Laravel", "PHP", "Node.js", "MySQL", "PostgreSQL", "REST API", "Git", "Postman"],
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Self-Employed (Web / Mobile)",
      location: "Sri Lanka",
      period: "2025 — PRESENT",
      type: "Freelance",
      achievements: [
        "Architecting and delivering full-stack web and mobile applications for global and local clients.",
        "Building cross-platform mobile apps using React Native and modern web platforms with Next.js, React, and Laravel.",
        "Integrating cloud infrastructure (AWS), containerization (Docker), and database backend services.",
      ],
      stack: ["Next.js", "React.js", "React Native", "Laravel", "Flask", "Python", "Docker", "AWS"],
    },
  ];

  const education = [
    {
      degree: "BSc (Hons) Computer Science with Software Engineering",
      institution: "National Institute of Business Management (NIBM)",
      period: "AUG 2023 — PRESENT",
      honors: "Undergraduate Degree Program",
    },
    {
      degree: "Bachelor of Information and Communication Technology Honours",
      institution: "University of Colombo – Faculty of Technology",
      period: "AUG 2024 — PRESENT",
      honors: "Undergraduate Degree Program",
    },
    {
      degree: "G.C.E. Advanced Level - Technology Stream",
      institution: "Walisingha Harishchandra College Anuradhapura",
      period: "2022",
      honors: "Pass Results: 2A & 1B",
    },
    {
      degree: "G.C.E. Ordinary Level",
      institution: "Walisingha Harishchandra College Anuradhapura",
      period: "2019",
      honors: "Pass Results: 7A & 2B",
    },
  ];

  const certifications = [
    {
      title: "AWS Academy Cloud Developing – Training Badge",
      issuer: "AWS Academy",
      date: "JUN 2026",
    },
    {
      title: "Full stack Web Development with Next.js 14: From Concept to Azure Deployment",
      issuer: "Microsoft Learn Student Ambassador Workshop Certificate",
      date: "2024",
    },
    {
      title: "Microsoft Learn Student Ambassador – Navigate GitHub Copilot",
      issuer: "Microsoft Learn Student Ambassador Workshop Certificate",
      date: "2024",
    },
    {
      title: "REST APIs Python Flask: Docker, AWS, Git and SQLAlchemy",
      issuer: "Udemy (Credential: UC-2eb19619-a319-4cb3-972c-7daOc613ce54)",
      date: "November 2025",
    },
    {
      title: "Laravel From Scratch",
      issuer: "Udemy (Credential: UC-c01fc86d-f28e-48bc-bafe-b786200af7a3)",
      date: "May 2025",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#F7F7F8] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 right-0 z-0 text-center pointer-events-none select-none">
        <span className="watermark-text text-8xl sm:text-[12rem] lg:text-[15rem] font-black uppercase tracking-widest block opacity-40">
          EXPERIENCE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                Education & Experience
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
              Education & <span className="text-[#FF5500]">Work Experience</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Academic background in Software Engineering and ICT Honours paired with hands-on industry experience at HexCode Pvt Ltd.
            </p>
          </div>
        </div>

        {/* Experience Cards List */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Work Experience Subhead */}
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#FF5500] mb-4 flex items-center gap-2">
            <Building2 className="w-4 h-4" />
            <span>Work Experience</span>
          </div>

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm border border-neutral-200/80 card-hover space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900">{exp.role}</h3>
                  <div className="text-sm font-bold text-[#FF5500] mt-1 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span className="text-xs text-neutral-400 font-normal">• {exp.location}</span>
                  </div>
                </div>

                <div className="shrink-0">
                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold text-neutral-700 bg-neutral-100 border border-neutral-200">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2.5 pt-1">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-2.5 text-xs text-neutral-600 leading-relaxed font-normal">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-3">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-[11px] font-mono bg-neutral-100 text-neutral-700 border border-neutral-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Education Subhead */}
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#FF5500] pt-6 mb-4 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200/80 card-hover flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-neutral-900 mt-3">{edu.degree}</h3>
                  <p className="text-xs font-bold text-[#FF5500] mt-1">{edu.institution}</p>
                </div>
                <div className="text-xs text-neutral-500 font-medium pt-2 border-t border-neutral-100">
                  {edu.honors}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Subhead */}
          <div className="text-xs font-extrabold uppercase tracking-widest text-[#FF5500] pt-6 mb-4 flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>Certifications & Workshops</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-200/80 card-hover flex flex-col justify-between space-y-2"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#FF5500] bg-[#FFF2EC] px-2.5 py-0.5 rounded-full border border-[#FF5500]/20">
                    {cert.date}
                  </span>
                  <h4 className="text-xs font-bold text-neutral-900 mt-2 leading-snug">{cert.title}</h4>
                </div>
                <p className="text-[11px] text-neutral-500 font-medium pt-2 border-t border-neutral-100">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
