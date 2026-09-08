"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Sparkles, Layers, Video, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export const AboutFounders: React.FC = () => {
  const pillars = [
    { name: "STRATEGY", icon: <Sparkles className="w-4 h-4 text-studio-accent" />, desc: "Positioning & topic authority mapping" },
    { name: "STORYTELLING", icon: <Layers className="w-4 h-4 text-studio-accent" />, desc: "Scriptwriting & hook structure" },
    { name: "PRODUCTION", icon: <Video className="w-4 h-4 text-studio-accent" />, desc: "4K studio shoots & teleprompter guidance" },
    { name: "DISTRIBUTION", icon: <Share2 className="w-4 h-4 text-studio-accent" />, desc: "Algorithm publishing & paid growth" },
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-studio-black border-t border-studio-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="LEADERSHIP & VISION"
          title={
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-studio-text tracking-tight leading-[1.05]">
              TWO PEOPLE. <br />
              <span className="text-studio-accent">ONE MISSION.</span>
            </h2>
          }
          subtitle="NLB Studios was founded by Neeraj Verma and Lalit Bist with a clear conviction: real expertise deserves a world-class production engine."
        />

        {/* Core Philosophy Statement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-studio-dark border-2 border-studio-accent/40 p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-studio-accent block mb-3">
            FOUNDING PHILOSOPHY
          </span>
          <p className="text-xl sm:text-3xl font-extrabold uppercase text-studio-text leading-tight">
            "We believe professionals shouldn't have to become influencers to build influence. <span className="text-studio-accent">They simply need a better way to communicate what they already know.</span>"
          </p>
        </motion.div>

        {/* Founders Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Neeraj Verma */}
          <div className="bg-studio-dark border border-studio-border p-8 md:p-10 space-y-6 flex flex-col justify-between group hover:border-studio-accent/60 transition-colors">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] w-full border border-studio-border overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                  alt="Neeraj Verma — Co-Founder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-3 py-1 bg-studio-accent text-studio-black text-xs font-bold uppercase tracking-widest">
                    CO-FOUNDER
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold uppercase text-studio-text">
                  NEERAJ VERMA
                </h3>
                <p className="text-xs font-semibold text-studio-accent uppercase tracking-wider mt-1">
                  Brand Strategy & Content Operations
                </p>
              </div>

              <p className="text-xs md:text-sm text-studio-text-muted leading-relaxed font-light">
                Specializes in extracting deep medical, tax, and business insights from founders and professionals, structuring them into high-converting personal brand positioning frameworks.
              </p>
            </div>
          </div>

          {/* Lalit Bist */}
          <div className="bg-studio-dark border border-studio-border p-8 md:p-10 space-y-6 flex flex-col justify-between group hover:border-studio-accent/60 transition-colors">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] w-full border border-studio-border overflow-hidden">
                <Image
                  src="/images/lalit.jpeg"
                  alt="Lalit Bist — Co-Founder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-3 py-1 bg-studio-accent text-studio-black text-xs font-bold uppercase tracking-widest">
                    CO-FOUNDER
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold uppercase text-studio-text">
                  LALIT BIST
                </h3>
                <p className="text-xs font-semibold text-studio-accent uppercase tracking-wider mt-1">
                  Creative Direction & Reel Production
                </p>
              </div>

              <p className="text-xs md:text-sm text-studio-text-muted leading-relaxed font-light">
                Leads cinema camera setups, lighting, audio acoustic design, and high-retention post-production, ensuring every short reel looks editorial and broadcast-ready.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-studio-border">
          {pillars.map((pil) => (
            <div key={pil.name} className="p-4 bg-studio-dark border border-studio-border flex items-center gap-3">
              <div className="p-2 bg-studio-surface border border-studio-border shrink-0">
                {pil.icon}
              </div>
              <div>
                <div className="text-xs font-extrabold uppercase text-studio-text tracking-wider">{pil.name}</div>
                <div className="text-[11px] text-studio-text-muted">{pil.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
