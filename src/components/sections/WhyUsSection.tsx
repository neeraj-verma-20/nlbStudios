"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Award, Target, Camera, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const WhyUsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-8 h-8 text-studio-accent" />,
      title: "EXPERTISE FIRST",
      copy: "We don't force generic social trends onto medical doctors or finance partners. We extract what you actually know and communicate it with gravity and clarity."
    },
    {
      icon: <Target className="w-8 h-8 text-studio-accent" />,
      title: "STRATEGY BEFORE CONTENT",
      copy: "Every single reel, caption, and graphic has a distinct strategic objective — whether building patient trust, attracting corporate retainers, or establishing founder authority."
    },
    {
      icon: <Camera className="w-8 h-8 text-studio-accent" />,
      title: "PRODUCTION QUALITY",
      copy: "We deploy 4K Cinema cameras, wireless acoustic mics, studio lighting rigs, and teleprompter guidance so you look and sound like a industry broadcast expert."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-studio-accent" />,
      title: "LONG-TERM AUTHORITY",
      copy: "We aren't chasing cheap, gimmicky viral trends or temporary algorithm hacks. We build a recognizable, compounding personal brand asset."
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-studio-dark border-t border-studio-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="WHY NLB STUDIOS"
          title={
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-studio-text tracking-tight leading-[1.05]">
              WHY PROFESSIONALS <br />
              <span className="text-studio-accent">WORK WITH US.</span>
            </h2>
          }
          subtitle="Four core principles that separate NLB Studios from generic social media marketing agencies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-studio-black border border-studio-border p-8 md:p-12 hover:border-studio-accent/60 transition-all duration-300"
            >
              <div className="mb-6">{p.icon}</div>
              <h3 className="text-2xl font-extrabold uppercase text-studio-text mb-4">
                {p.title}
              </h3>
              <p className="text-sm md:text-base text-studio-text-muted leading-relaxed font-light">
                {p.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
