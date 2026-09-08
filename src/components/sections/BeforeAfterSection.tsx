"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const BeforeAfterSection: React.FC = () => {
  const beforePoints = [
    "Random, ad-hoc posting whenever free time permits",
    "No distinct personal positioning or core content pillars",
    "Inconsistent phone video quality with echoey audio",
    "No content system or script planning",
    "Invisible online despite 15+ years offline expertise",
  ];

  const afterPoints = [
    "Clear, authoritative positioning as the top voice in your field",
    "4K Cinema studio production with crisp broadcast audio",
    "Consistent, scheduled publication 3–5x weekly",
    "Recognizable personal brand trusted by clients & patients",
    "Inbound high-value inquiries and market leadership",
  ];

  return (
    <section className="py-24 md:py-36 bg-studio-dark border-t border-studio-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="THE TRANSFORMATION"
          title={
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-studio-text tracking-tight leading-[1.05]">
              FROM INVISIBLE TO <br />
              <span className="text-studio-accent">UNMISSABLE AUTHORITY.</span>
            </h2>
          }
          subtitle="See the direct shift when professionals partner with NLB Studios to execute a dedicated content system."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-12">
          {/* BEFORE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-studio-black border-2 border-red-500/30 p-8 md:p-12 space-y-6 relative"
          >
            <div className="flex items-center justify-between border-b border-red-500/20 pb-4">
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-extrabold">
                STATUS QUO
              </span>
              <span className="text-2xl font-extrabold uppercase text-red-500">
                BEFORE NLB
              </span>
            </div>

            <ul className="space-y-4">
              {beforePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-studio-text-muted">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AFTER CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-studio-surface border-2 border-studio-accent p-8 md:p-12 space-y-6 relative shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-studio-accent/30 pb-4">
              <span className="text-xs font-mono text-studio-accent uppercase tracking-widest font-extrabold">
                THE NLB SYSTEM
              </span>
              <span className="text-2xl font-extrabold uppercase text-studio-accent">
                AFTER NLB
              </span>
            </div>

            <ul className="space-y-4">
              {afterPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-studio-text font-medium">
                  <CheckCircle2 className="w-5 h-5 text-studio-accent shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
