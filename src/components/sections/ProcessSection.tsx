"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/portfolioData";

export const ProcessSection: React.FC = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E5E4E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E4E0]">
          <div>
            <div className="text-xs font-mono text-[#666663] uppercase tracking-widest mb-3">
              04 — How We Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0C] tracking-tighter uppercase font-display">
              THE PROCESS
            </h2>
          </div>
          <p className="text-sm font-mono text-[#666663] uppercase tracking-wider mt-4 md:mt-0">
            PLAN → SHOOT → CREATE → PUBLISH
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((item, index) => (
            <div key={item.step} className="flex flex-col justify-between p-6 bg-[#FAF9F6] border border-[#E5E4E0]">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E4E0]">
                  <span className="text-xs font-mono text-[#666663]">0{index + 1}</span>
                  <span className="text-sm font-mono font-bold text-[#0A0A0C] uppercase tracking-wider">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0C] tracking-tight uppercase font-display mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#444440] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
