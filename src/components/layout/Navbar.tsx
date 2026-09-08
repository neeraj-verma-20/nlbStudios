"use client";

import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E5E4E0] transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo / Identifier */}
        <a href="#" className="flex flex-col group">
          <span className="text-lg md:text-xl font-extrabold tracking-tighter text-[#0A0A0C] uppercase font-display group-hover:opacity-80 transition-opacity">
            NLB STUDIOS
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#666663] uppercase hidden sm:inline-block">
            Personal Branding • Content • Reels
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#444440] hover:text-[#0A0A0C] transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Small CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-[#0A0A0C] text-[#FAF9F6] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#252528] transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#0A0A0C] p-2 hover:bg-[#F2F1ED] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-[#E5E4E0] px-6 py-6 animate-fade-in">
          <nav className="flex flex-col space-y-4 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#0A0A0C] hover:text-[#666663] transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#0A0A0C] text-[#FAF9F6] py-3 text-sm font-semibold uppercase tracking-wider"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
