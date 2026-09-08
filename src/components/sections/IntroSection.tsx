"use client";

import React from "react";

export const IntroSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-[#FAF9F6] border-b border-[#E5E4E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {/* Subtle Tag */}
          <div className="text-xs font-mono text-[#666663] uppercase tracking-widest mb-8">
            01 — Our Mission
          </div>

          {/* Large Editorial Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A0A0C] tracking-tighter leading-[1.1] uppercase font-display mb-10">
            YOU KNOW YOUR CRAFT. <br />
            WE HELP PEOPLE KNOW YOU FOR IT.
          </h2>

          {/* One Short Paragraph Explaining Expertise Transformation */}
          <p className="text-lg sm:text-2xl text-[#444440] font-normal leading-relaxed max-w-3xl">
            We turn your domain expertise into clear, professional, and engaging content that establishes authority, builds trust, and attracts high-value opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};
