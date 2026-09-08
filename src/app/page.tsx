"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0A0A0C] font-sans selection:bg-[#0A0A0C] selection:text-[#FAF9F6]">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. HERO */}
      <HeroSection />

      {/* 3. SHORT INTRO */}
      <IntroSection />

      {/* 4. SERVICES */}
      <ServicesSection />

      {/* 5. WORK (Main Visual Section) */}
      <WorkSection />

      {/* 6. PROCESS */}
      <ProcessSection />

      {/* 7. ABOUT */}
      <AboutSection />

      {/* 8. FINAL CTA */}
      <FinalCTASection />

      {/* 9. CONTACT */}
      <ContactSection />

      {/* 10. FOOTER */}
      <Footer />
    </div>
  );
}
