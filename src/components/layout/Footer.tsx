"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FAF9F6] border-t border-[#E5E4E0] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#E5E4E0]">
          
          {/* Brand */}
          <div>
            <span className="text-2xl font-extrabold tracking-tighter text-[#0A0A0C] uppercase font-display block mb-1">
              NLB STUDIOS
            </span>
            <p className="text-xs font-mono text-[#666663] uppercase tracking-widest">
              Personal Branding • Content • Growth
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-8">
            <a
              href="#work"
              className="text-sm font-medium text-[#444440] hover:text-[#0A0A0C] transition-colors tracking-wide"
            >
              Work
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-[#444440] hover:text-[#0A0A0C] transition-colors tracking-wide"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-[#444440] hover:text-[#0A0A0C] transition-colors tracking-wide"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[#444440] hover:text-[#0A0A0C] transition-colors tracking-wide"
            >
              Contact
            </a>
          </nav>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666663]">
          <div>© 2026 NLB Studios. All rights reserved.</div>
          <div>nlbstudios.in</div>
        </div>
      </div>
    </footer>
  );
};
