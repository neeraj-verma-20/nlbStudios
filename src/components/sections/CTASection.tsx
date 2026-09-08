"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface CTASectionProps {
  onOpenBooking: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-32 md:py-44 bg-studio-black overflow-hidden border-t border-studio-border">
      {/* Background Cinematic Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
          alt="NLB Cinematic Backdrop"
          fill
          className="object-cover brightness-[0.25] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/80 to-studio-black" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-studio-accent/40 bg-studio-accent/10 text-studio-accent"
        >
          <span className="w-2 h-2 rounded-full bg-studio-accent animate-pulse" />
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase">
            TAKE THE NEXT STEP
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase text-studio-text tracking-tight leading-[0.95] font-display"
        >
          READY TO BUILD <br />
          <span className="text-studio-accent">YOUR PERSONAL BRAND?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-studio-text-muted max-w-2xl mx-auto font-light leading-relaxed"
        >
          Your expertise is already there. Let's make sure the right clients, patients, and decision-makers see it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenBooking}
            icon={<ArrowUpRight className="w-5 h-5" />}
          >
            Book a Strategy Call
          </Button>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              icon={<MessageSquare className="w-5 h-5 text-studio-accent" />}
            >
              WhatsApp Us
            </Button>
          </a>
        </motion.div>

        <div className="pt-8 text-xs text-studio-text-dim uppercase tracking-widest">
          No obligation • 30-minute discovery call • India
        </div>
      </div>
    </section>
  );
};
