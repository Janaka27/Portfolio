"use client";

import React, { useState } from "react";
import { Mail, Calendar, CheckCircle2, ArrowUpRight, Building, Clock, ShieldCheck, Send, Linkedin } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Full Stack Engineering",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#F7F7F8] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 left-0 right-0 z-0 text-center pointer-events-none select-none">
        <span className="watermark-text text-8xl sm:text-[12rem] lg:text-[15rem] font-black uppercase tracking-widest block opacity-40">
          CONTACT US
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching template: `- Contact Us` + `Contact Us Today` / `Grow Your Business` */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#FF5500]" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FF5500]">
                Contact Us
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
              Get In Touch Today<br />
              <span className="text-[#FF5500]">Let&apos;s Build Together</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Have a project in mind or interested in collaborating? Feel free to reach out for backend development, full-stack web/mobile builds, or API engineering.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side Information & Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-neutral-200/80 shadow-sm space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2EC] text-[#FF5500] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Direct Email</div>
                  <a href="mailto:janakanamal.mails@gmail.com" className="text-sm font-bold text-neutral-900 hover:text-[#FF5500] transition-colors">
                    janakanamal.mails@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Direct Phone</div>
                  <a href="tel:+94718195740" className="text-sm font-bold text-neutral-900 hover:text-[#FF5500] transition-colors">
                    +(94) 71 819 5740
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2EC] text-[#FF5500] flex items-center justify-center shrink-0">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">LinkedIn Profile</div>
                  <a
                    href="https://www.linkedin.com/in/janaka-namal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-neutral-900 hover:text-[#FF5500] transition-colors"
                  >
                    linkedin.com/in/janaka-namal
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFF2EC] text-[#FF5500] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-neutral-900">Message Received</h3>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message has been sent directly to Janaka Namal. Expect a reply shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-3 rounded-full bg-[#FF5500] text-white text-xs font-bold hover:bg-[#E04B00] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-neutral-700 font-bold text-[11px]">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#FF5500] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-neutral-700 font-bold text-[11px]">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#FF5500] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-neutral-700 font-bold text-[11px]">Organization / Company</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#FF5500] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-neutral-700 font-bold text-[11px]">Service Interest</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-[#FF5500] transition-colors"
                      >
                        <option value="Full Stack Engineering">Full Stack Engineering Contract</option>
                        <option value="System Architecture Audit">System Architecture & Audit</option>
                        <option value="Fractional CTO">Fractional CTO Leadership</option>
                        <option value="Performance & Cloud Migration">Performance & Cloud Migration</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-neutral-700 font-bold text-[11px]">Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project scope, timeline, and targets..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-[#FF5500] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button matching the orange pill `Let's Discuss Project ↗` from reference image */}
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold text-white bg-[#FF5500] hover:bg-[#E04B00] transition-all shadow-md shadow-[#FF5500]/25 hover:shadow-lg group"
                  >
                    <span>Let&apos;s Discuss Project</span>
                    <div className="w-5 h-5 rounded-full bg-white text-[#FF5500] flex items-center justify-center group-hover:rotate-45 transition-transform">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
