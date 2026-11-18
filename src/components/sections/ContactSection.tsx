"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, MessageSquare, Instagram, Mail } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    profession: "",
    needHelpWith: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-[#FAF9F6] border-b border-[#E5E4E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#666663] uppercase tracking-widest mb-3">
                07 — Contact Us
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0A0A0C] tracking-tighter uppercase font-display mb-6">
                START A CONVERSATION
              </h2>
              <p className="text-base sm:text-lg text-[#444440] font-normal leading-relaxed mb-10">
                Tell us about your brand, your goals, or your content challenges. We respond to every serious inquiry within 24 hours.
              </p>
            </div>

            {/* Touchpoint Placeholders */}
            <div className="space-y-6 border-t border-[#E5E4E0] pt-8">
              <a
                href="https://wa.me/918770326893?text=Hi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-[#0A0A0C] hover:text-[#666663] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#F2F1ED] border border-[#E5E4E0] flex items-center justify-center group-hover:bg-[#0A0A0C] group-hover:text-[#FAF9F6] transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#666663] uppercase">WhatsApp</div>
                  <div className="text-sm font-semibold">+91 87703 26893</div>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-[#0A0A0C] hover:text-[#666663] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#F2F1ED] border border-[#E5E4E0] flex items-center justify-center group-hover:bg-[#0A0A0C] group-hover:text-[#FAF9F6] transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#666663] uppercase">Instagram</div>
                  <div className="text-sm font-semibold">@nlbstudios</div>
                </div>
              </a>

              <a
                href="mailto:hello@nlbstudios.in"
                className="flex items-center gap-4 text-[#0A0A0C] hover:text-[#666663] transition-colors group"
              >
                <div className="w-10 h-10 bg-[#F2F1ED] border border-[#E5E4E0] flex items-center justify-center group-hover:bg-[#0A0A0C] group-hover:text-[#FAF9F6] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#666663] uppercase">Email</div>
                  <div className="text-sm font-semibold">hello@nlbstudios.in</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="lg:col-span-7 bg-[#FAF9F6] border border-[#E5E4E0] p-8 sm:p-12">
            {submitted ? (
              <div className="py-16 text-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#0A0A0C] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#0A0A0C] uppercase tracking-tight font-display mb-2">
                  THANK YOU FOR REACHING OUT
                </h3>
                <p className="text-base text-[#444440] max-w-md mx-auto mb-6">
                  We have received your message. A member of the NLB Studios team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#0A0A0C] underline uppercase tracking-wider"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#666663] tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full bg-[#FAF9F6] border border-[#E5E4E0] px-4 py-3.5 text-sm text-[#0A0A0C] focus:outline-none focus:border-[#0A0A0C] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#666663] tracking-wider mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 00000"
                      className="w-full bg-[#FAF9F6] border border-[#E5E4E0] px-4 py-3.5 text-sm text-[#0A0A0C] focus:outline-none focus:border-[#0A0A0C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#666663] tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full bg-[#FAF9F6] border border-[#E5E4E0] px-4 py-3.5 text-sm text-[#0A0A0C] focus:outline-none focus:border-[#0A0A0C] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#666663] tracking-wider mb-2">
                    Profession *
                  </label>
                  <input
                    type="text"
                    name="profession"
                    required
                    value={formData.profession}
                    onChange={handleChange}
                    placeholder="Doctor / CA / Founder / Executive"
                    className="w-full bg-[#FAF9F6] border border-[#E5E4E0] px-4 py-3.5 text-sm text-[#0A0A0C] focus:outline-none focus:border-[#0A0A0C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#666663] tracking-wider mb-2">
                    What do you need help with? *
                  </label>
                  <textarea
                    name="needHelpWith"
                    required
                    rows={4}
                    value={formData.needHelpWith}
                    onChange={handleChange}
                    placeholder="Briefly describe your content goals or current personal brand status..."
                    className="w-full bg-[#FAF9F6] border border-[#E5E4E0] px-4 py-3.5 text-sm text-[#0A0A0C] focus:outline-none focus:border-[#0A0A0C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0A0A0C] text-[#FAF9F6] py-4 text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2A2E] transition-colors"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
