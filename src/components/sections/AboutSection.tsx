"use client";

import React from "react";

export const AboutSection: React.FC = () => {
  const founders = [
    {
      name: "Neeraj Verma",
      role: "Co-Founder",
      image: "/images/neeraj.jpeg",
      focus: "Creative Direction & Brand Strategy"
    },
    {
      name: "Lalit Bist",
      role: "Co-Founder",
      image: "/images/lalit.jpeg",
      focus: "Production & Digital Growth"
    }
  ];

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-[#FAF9F6] border-b border-[#E5E4E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-[#666663] uppercase tracking-widest mb-3">
            05 — The Team
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A0A0C] tracking-tighter uppercase font-display mb-6">
            WHO'S BEHIND NLB
          </h2>
          <p className="text-lg sm:text-xl text-[#444440] font-normal leading-relaxed">
            We're a small creative team focused on helping professionals communicate their expertise better online.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {founders.map((founder) => (
            <div key={founder.name} className="flex flex-col group">
              <div className="relative w-full aspect-[4/5] bg-[#0A0A0C] border border-[#E5E4E0] overflow-hidden mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="border-t border-[#E5E4E0] pt-4">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-2xl font-bold text-[#0A0A0C] tracking-tight uppercase font-display">
                    {founder.name}
                  </h3>
                  <span className="text-xs font-mono text-[#666663] uppercase tracking-widest">
                    {founder.role}
                  </span>
                </div>
                <p className="text-sm font-mono text-[#666663] uppercase tracking-wider">
                  {founder.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
