"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const FinalCTASection: React.FC = () => {
  return (
    <section className="w-full py-24 md:py-36 bg-[#0A0A0C] text-[#FAF9F6] border-b border-[#E5E4E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtle Tag */}
          <div className="text-xs font-mono text-[#8E8E8A] uppercase tracking-widest mb-6">
            06 — Get Started
          </div>

          {/* Large Editorial Headline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#FAF9F6] tracking-tighter leading-none uppercase font-display mb-8">
            HAVE SOMETHING <br />
            WORTH SAYING?
          </h2>

          {/* Subtext */}
          <p className="text-lg sm:text-2xl text-[#D1D0CB] font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            Let's turn it into content people remember.
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FAF9F6] text-[#0A0A0C] px-9 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#E5E4E0] transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
