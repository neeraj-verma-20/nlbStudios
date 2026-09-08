"use client";

import React, { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VerticalVideoCard } from "@/components/ui/VerticalVideoCard";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Film } from "lucide-react";

interface PortfolioSectionProps {
  onOpenBooking: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const categories = ["ALL", "DOCTOR", "CA", "FOUNDER", "CONSULTANT", "EXECUTIVE"];

  const filteredItems = activeFilter === "ALL"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="work" className="py-24 md:py-36 bg-studio-dark border-t border-studio-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="SELECTED WORK"
          title={
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-studio-text tracking-tight leading-[1.05]">
              WE DON'T JUST <br />
              MANAGE CONTENT. <br />
              <span className="text-studio-accent">WE PRODUCE IT.</span>
            </h2>
          }
          subtitle="Explore selected 9:16 vertical short-form reels crafted for Doctors, CAs, Founders, and Consultants across India."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12 border-b border-studio-border pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                activeFilter === cat
                  ? "bg-studio-text text-studio-black border-studio-text shadow-md"
                  : "bg-transparent text-studio-text-muted border-studio-border hover:border-studio-accent/40 hover:text-studio-text"
              }`}
            >
              {cat === "ALL" ? "All Selected Work" : cat}
            </button>
          ))}
        </div>

        {/* 9:16 Vertical Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <VerticalVideoCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom Call to Action Bar */}
        <div className="mt-16 p-8 bg-studio-surface border border-studio-accent/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-studio-accent/10 border border-studio-accent/30 text-studio-accent hidden sm:block">
              <Film className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold uppercase text-studio-text">
                Want to see a custom video breakdown for your niche?
              </h4>
              <p className="text-xs md:text-sm text-studio-text-muted">
                We craft tailored script concepts for your medical practice, firm, or company during our discovery call.
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={onOpenBooking}
            icon={<ArrowRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Book a Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};
