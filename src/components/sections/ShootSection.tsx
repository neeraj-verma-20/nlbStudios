"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Camera, Mic, Video, Sliders, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const ShootSection: React.FC = () => {
  const steps = [
    { num: "01", name: "PLAN", desc: "Monthly topic architecture & messaging strategy" },
    { num: "02", name: "SCRIPT", desc: "High-retention hooks & teleprompter formatting" },
    { num: "03", name: "SHOOT", desc: "3-hour studio recording with cinema camera & dual mic" },
    { num: "04", name: "EDIT", desc: "Editorial cuts, sound design, b-roll & custom captions" },
    { num: "05", name: "PUBLISH", desc: "Optimized scheduling, thumbnail design & captions" },
    { num: "06", name: "GROW", desc: "Performance tracking, audience analytics & scaling" },
  ];

  const features = [
    { icon: <Camera className="w-5 h-5 text-studio-accent" />, title: "Cinema Camera Rigs", desc: "Multi-angle 4K recording so you look crisp on every screen." },
    { icon: <Mic className="w-5 h-5 text-studio-accent" />, title: "Acoustic Audio", desc: "Broadcast-grade wireless mic setup — no echo, no noise." },
    { icon: <Video className="w-5 h-5 text-studio-accent" />, title: "Live Teleprompter Direction", desc: "Never memorize scripts; read naturally with expert pacing." },
    { icon: <Sliders className="w-5 h-5 text-studio-accent" />, title: "Post-Production Suite", desc: "Pacing cuts, motion graphic overlays, and platform sound mixing." },
  ];

  return (
    <section id="shoot-system" className="py-24 md:py-36 bg-studio-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="THE PRODUCTION ENGINE"
          title={
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-studio-text tracking-tight leading-[1.05]">
              ONE SHOOT. <br />
              <span className="text-studio-accent">WEEKS OF CONTENT.</span>
            </h2>
          }
          subtitle="We turn a single focused 3-hour recording session into a complete monthly library of high-retention short reels, keeping your brand consistent without taking over your calendar."
        />

        {/* Process Bar Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {steps.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-studio-dark border border-studio-border p-5 relative group hover:border-studio-accent/60 transition-colors"
            >
              <span className="text-xs font-mono text-studio-accent font-bold block mb-1">
                {s.num}
              </span>
              <h3 className="text-base font-extrabold uppercase text-studio-text tracking-wider group-hover:text-studio-accent transition-colors">
                {s.name}
              </h3>
              <p className="text-[11px] text-studio-text-muted mt-2 leading-tight">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Studio Production Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-studio-dark border border-studio-border p-8 md:p-12">
          {/* Left Features */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-studio-accent bg-studio-accent/10 px-3 py-1 border border-studio-accent/30">
              WE ARE A PRODUCTION STUDIO • NOT A MARKETING MIDDLEMAN
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold uppercase text-studio-text leading-tight">
              PRO EQUIPMENT. EXPERT DIRECTION. ZERO STRESS.
            </h3>
            <p className="text-sm md:text-base text-studio-text-muted font-light leading-relaxed">
              We bring professional studio lighting, multi-angle cameras, wireless mics, and on-camera direction to your clinic, office, or our studio. You just show up, talk about what you know, and we handle the rest.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-studio-border">
              {features.map((feat) => (
                <div key={feat.title} className="space-y-1">
                  <div className="flex items-center gap-2">
                    {feat.icon}
                    <h4 className="text-xs font-bold uppercase text-studio-text">{feat.title}</h4>
                  </div>
                  <p className="text-xs text-studio-text-muted leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Montage */}
          <div className="lg:col-span-6 relative aspect-[16/10] w-full border border-studio-border overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1200&auto=format&fit=crop"
              alt="NLB Studios Cinema Setup"
              fill
              className="object-cover brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-studio-text font-bold uppercase tracking-widest bg-studio-black/80 p-4 border border-white/10">
              <span>Studio Recording Environment</span>
              <span className="text-studio-accent">4K HDR Cinema Camera</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
