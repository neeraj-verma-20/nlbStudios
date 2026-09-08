"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Eye, Users, MousePointer, TrendingUp, MessageSquare, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const ResultsSection: React.FC = () => {
  const metrics = [
    { icon: <Eye className="w-6 h-6 text-studio-accent" />, category: "ORGANIC REACH", desc: "Expanding qualified visibility across target patient, client, and executive demographics." },
    { icon: <Users className="w-6 h-6 text-studio-accent" />, category: "ENGAGEMENT", desc: "High-retention video watch time and meaningful comments from domain peers." },
    { icon: <MousePointer className="w-6 h-6 text-studio-accent" />, category: "PROFILE VISITS", desc: "Driving decision-makers directly to your website, clinic page, or booking calendar." },
    { icon: <TrendingUp className="w-6 h-6 text-studio-accent" />, category: "AUDIENCE GROWTH", desc: "Building an owned audience of followers who recognize your brand authority." },
    { icon: <MessageSquare className="w-6 h-6 text-studio-accent" />, category: "INBOUND ENQUIRIES", desc: "Direct inquiries from high-ticket prospective clients and consultation seekers." },
    { icon: <Briefcase className="w-6 h-6 text-studio-accent" />, category: "QUALIFIED LEADS", desc: "Converting online visibility into real-world retainers and surgical bookings." },
  ];

  return (
    <section className="py-24 md:py-36 bg-studio-black border-t border-studio-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="MEASURABLE IMPACT"
          title={
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-studio-text tracking-tight leading-[1.05]">
              THE GOAL ISN'T <br />
              <span className="text-studio-accent">JUST VIEWS.</span>
            </h2>
          }
          subtitle="Viral vanity metrics don't pay bills or build clinical trust. We design content systems engineered for authority, reputational dominance, and direct business results."
        />

        {/* Supporting Quote Block */}
        <div className="mb-16 p-8 bg-studio-dark border border-studio-accent/40 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-2xl font-extrabold uppercase tracking-tight text-studio-text">
            "Attention is useful. Authority is valuable. <span className="text-studio-accent">Business results are the goal.</span>"
          </p>
        </div>

        {/* 6 Metric Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-studio-dark border border-studio-border p-8 hover:border-studio-accent/60 transition-colors space-y-4"
            >
              <div className="p-3 bg-studio-surface border border-studio-border w-fit">
                {m.icon}
              </div>
              <h3 className="text-lg font-bold uppercase text-studio-text tracking-wide">
                {m.category}
              </h3>
              <p className="text-xs md:text-sm text-studio-text-muted leading-relaxed font-light">
                {m.desc}
              </p>
              <div className="pt-3 border-t border-studio-border/50 text-[10px] text-studio-accent font-bold uppercase tracking-wider">
                TRACKED MONTHLY VIA ANALYTICS
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
