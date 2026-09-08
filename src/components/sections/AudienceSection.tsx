"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AUDIENCE_PROFILES } from "@/data/audience";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const AudienceSection: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState(0);

  return (
    <section id="who-we-help" className="py-24 md:py-36 bg-studio-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="TARGET AUDIENCE PROFILE"
          title={
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-studio-text tracking-tight leading-[1.05]">
              BUILT FOR PEOPLE <br />
              <span className="text-studio-accent">WHOSE EXPERTISE MATTERS.</span>
            </h2>
          }
          subtitle="We work exclusively with high-credibility professionals who possess deep domain knowledge and want their digital reputation to match their real-world authority."
        />

        {/* Audience Category Selector Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {AUDIENCE_PROFILES.map((profile, idx) => (
            <button
              key={profile.id}
              onClick={() => setSelectedPersona(idx)}
              className={`px-5 py-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                selectedPersona === idx
                  ? "bg-studio-accent text-studio-black border-studio-accent shadow-lg"
                  : "bg-studio-dark text-studio-text-muted border-studio-border hover:border-studio-accent/40"
              }`}
            >
              {profile.title}
            </button>
          ))}
        </div>

        {/* Selected Persona Deep Dive Card */}
        {AUDIENCE_PROFILES[selectedPersona] && (
          <motion.div
            key={AUDIENCE_PROFILES[selectedPersona].id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-studio-dark border-2 border-studio-border p-8 md:p-12 shadow-2xl"
          >
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-mono text-studio-accent uppercase font-bold tracking-widest">
                {AUDIENCE_PROFILES[selectedPersona].roleTag}
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold uppercase text-studio-text leading-tight">
                {AUDIENCE_PROFILES[selectedPersona].headline}
              </h3>

              <p className="text-sm md:text-base text-studio-text-muted font-light leading-relaxed">
                {AUDIENCE_PROFILES[selectedPersona].description}
              </p>

              {/* Core Friction Points & Solution */}
              <div className="space-y-3 pt-4 border-t border-studio-border">
                <div className="text-xs font-bold uppercase tracking-wider text-studio-text">
                  Common Frustrations Solved:
                </div>
                {AUDIENCE_PROFILES[selectedPersona].painPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-xs md:text-sm text-studio-text-muted">
                    <span className="text-red-500 font-bold text-base leading-none">✕</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Solution Strategy */}
              <div className="p-4 bg-studio-surface border border-studio-accent/30 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-studio-accent font-bold">
                    NLB CUSTOMIZED STRATEGY
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-studio-text mt-0.5">
                    {AUDIENCE_PROFILES[selectedPersona].solution}
                  </div>
                </div>
                <span className="text-xs font-bold text-studio-accent whitespace-nowrap hidden sm:block">
                  {AUDIENCE_PROFILES[selectedPersona].impactMetrics}
                </span>
              </div>
            </div>

            {/* Right Cinematic Editorial Visual */}
            <div className="lg:col-span-5 relative aspect-[4/5] w-full border border-studio-border overflow-hidden group">
              <Image
                src={AUDIENCE_PROFILES[selectedPersona].image}
                alt={AUDIENCE_PROFILES[selectedPersona].title}
                fill
                className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs font-mono text-studio-accent uppercase font-bold tracking-widest mb-1">
                  EDITION: {AUDIENCE_PROFILES[selectedPersona].title}
                </div>
                <div className="text-sm font-bold uppercase text-studio-text">
                  Turn domain experience into personal brand authority.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
