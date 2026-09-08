"use client";

import React from "react";
import { Shield } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const categories = [
    "DOCTORS",
    "CHARTERED ACCOUNTANTS",
    "FOUNDERS & CEOs",
    "MANAGEMENT CONSULTANTS",
    "FINANCIAL ADVISORS",
    "SENIOR PROFESSIONALS",
    "BUSINESS LEADERS",
  ];

  return (
    <section className="bg-studio-dark border-y border-studio-border py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <div className="flex items-center justify-center gap-3 text-center">
          <Shield className="w-4 h-4 text-studio-accent" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-studio-text-muted">
            BUILT FOR PROFESSIONALS WHOSE REPUTATION MATTERS.
          </span>
        </div>
      </div>

      {/* Infinite Smooth Scrolling Typography Marquee */}
      <div className="relative w-full overflow-hidden flex whitespace-nowrap py-2 border-t border-b border-studio-border/40">
        <div className="flex animate-marquee items-center gap-12 text-sm md:text-base font-extrabold uppercase tracking-widest text-studio-text">
          {categories.concat(categories).map((cat, idx) => (
            <React.Fragment key={idx}>
              <span className="hover:text-studio-accent transition-colors">
                {cat}
              </span>
              <span className="text-studio-accent/50 text-xs">◆</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
