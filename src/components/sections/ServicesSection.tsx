"use client";

import React, { useState } from "react";
import { SERVICES_LIST } from "@/data/portfolioData";
import { Plus, Minus } from "lucide-react";

export const ServicesSection: React.FC = () => {
  // Allow toggling details or simple subtle expand
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleService = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="w-full py-20 md:py-28 bg-[#FAF9F6] border-b border-[#E5E4E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E4E0]">
          <div>
            <div className="text-xs font-mono text-[#666663] uppercase tracking-widest mb-3">
              02 — What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0C] tracking-tighter uppercase font-display">
              SERVICES
            </h2>
          </div>
          <p className="text-sm font-mono text-[#666663] uppercase tracking-wider mt-4 md:mt-0">
            End-to-End Content Systems
          </p>
        </div>

        {/* Simple Numbered List (Thin Dividers, Clean Typography, Minimal Hover) */}
        <div className="divide-y divide-[#E5E4E0] border-b border-[#E5E4E0]">
          {SERVICES_LIST.map((service, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={service.number}
                className="py-8 lg:py-10 transition-colors duration-200 hover:bg-[#F2F1ED]/50 cursor-pointer px-2 sm:px-4"
                onClick={() => toggleService(idx)}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    {/* Number */}
                    <span className="text-sm sm:text-base font-mono text-[#666663] font-medium">
                      {service.number}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-4xl font-bold text-[#0A0A0C] tracking-tight uppercase font-display">
                      {service.title}
                    </h3>
                  </div>

                  {/* Minimal Expand Toggle Icon */}
                  <button
                    className="p-2 text-[#0A0A0C] hover:opacity-70 transition-opacity"
                    aria-label={`Toggle details for ${service.title}`}
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </button>
                </div>

                {/* Description Text */}
                {isOpen && (
                  <div className="mt-6 sm:pl-20 max-w-3xl animate-fade-in">
                    <p className="text-base sm:text-lg text-[#444440] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
