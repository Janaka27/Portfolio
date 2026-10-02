"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, CheckCircle2, ArrowUpRight, Building, Clock, ShieldCheck, Send, Loader2, AlertCircle } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "Full Stack Engineering",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let data: { error?: string; success?: boolean } = {};
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON API response:", text);
        throw new Error("Dev server needs a quick restart. Please stop and re-run `npm run dev` in your terminal.");
      }

      if (!response.ok || data.error) {
        throw new Error(data.error || "Failed to send email. Please try again.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
        inquiryType: "Full Stack Engineering",
        message: "",
      });
    } catch (err: unknown) {
      console.error("Error submitting contact form:", err);
      setError(err instanceof Error ? err.message : "Failed to send email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Side Information & Direct Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-sm flex flex-col justify-around h-full space-y-6">
              
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
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">GitHub Profile</div>
                  <a
                    href="https://github.com/Janaka27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-neutral-900 hover:text-[#FF5500] transition-colors"
                  >
                    github.com/Janaka27
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2EC] text-[#FF5500] flex items-center justify-center shrink-0">
                  <LinkedinIcon className="w-6 h-6" />
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
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-sm h-full flex flex-col justify-between">
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
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-start gap-2.5 text-xs">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

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
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold text-white bg-[#FF5500] hover:bg-[#E04B00] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-md shadow-[#FF5500]/25 hover:shadow-lg group"
                  >
                    <span>{isSubmitting ? "Sending Message..." : "Let's Discuss Project"}</span>
                    <div className="w-5 h-5 rounded-full bg-white text-[#FF5500] flex items-center justify-center group-hover:rotate-45 transition-transform">
                      {isSubmitting ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#FF5500]" />
                      ) : (
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
