"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AlertCircle, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const ProblemSection: React.FC = () => {
  const problems = [
    { title: "Inconsistent Posting", text: "Long gaps between videos destroy algorithm momentum and viewer memory." },
    { title: "No Clear Positioning", text: "Blending into generic social noise without a distinct, recognizable expertise angle." },
    { title: "Poor Production Quality", text: "Bad lighting, echoey phone audio, and amateur edits hurt professional credibility." },
    { title: "Zero Time to Film", text: "Managing surgeries, consultations, or companies leaves no bandwidth to write & record." },
    { title: "Difficulty Explaining Expertise", text: "Struggling to translate complex medical, financial, or strategic advice into simple reels." },
    { title: "Weak Social Presence", text: "A world-class offline reputation that looks silent or non-existent on digital channels." },
    { title: "No Repeatable System", text: "Treating content like random one-offs instead of a structured monthly production engine." },
    { title: "Competitors Taking Spotlight", text: "Less qualified peers gaining market share simply because they show up consistently." },
  ];

  return (
    <section className="py-24 md:py-36 bg-studio-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="THE REALITY FOR PROFESSIONALS"
          title={
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-studio-text tracking-tight leading-[1.05]">
              BEING GOOD AT WHAT YOU DO <br />
              <span className="text-studio-accent">ISN'T ENOUGH ANYMORE.</span>
            </h2>
          }
          subtitle="You can be an excellent doctor, CA, founder, or consultant and still remain invisible online to the exact people who need your expertise."
        />

        {/* 8 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((prob, idx) => (
            <motion.div
              key={prob.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-studio-dark border border-studio-border p-6 md:p-8 hover:border-red-500/40 transition-colors group relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-studio-text-dim">0{idx + 1}</span>
                <AlertCircle className="w-5 h-5 text-red-500/80 group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-base font-bold uppercase text-studio-text mb-2 group-hover:text-studio-accent transition-colors">
                {prob.title}
              </h3>
              <p className="text-xs md:text-sm text-studio-text-muted leading-relaxed">
                {prob.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition Hero Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-studio-surface via-studio-dark to-studio-surface border-2 border-studio-accent/50 p-8 md:p-14 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-studio-accent/10 rounded-full blur-3xl pointer-events-none" />

          <span className="inline-block text-xs font-extrabold tracking-[0.3em] uppercase text-studio-accent mb-4">
            THE SOLUTION
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase text-studio-text tracking-tight mb-6">
            THAT'S WHERE <span className="text-studio-accent">NLB STUDIOS</span> COMES IN.
          </h2>
          <p className="text-base md:text-xl text-studio-text-muted max-w-3xl mx-auto font-light leading-relaxed mb-8">
            We build the complete personal branding and production system. We plan, write, direct, shoot, edit, publish, and amplify — so you focus on your practice while your personal brand grows.
          </p>

          <a href="#services" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-studio-accent hover:text-studio-text transition-colors">
            <span>Explore The System Below</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
