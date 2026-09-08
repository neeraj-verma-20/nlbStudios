"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const placeholders = [
    {
      category: "Doctor — Client Testimonial Placeholder",
      role: "Cardiologist & Clinic Director",
      quote: "NLB Studios made it completely effortless for me to record educational reels without disrupting my surgical schedule. My patients frequently mention watching my videos before booking their first consultation.",
      author: "Verified Medical Specialist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop"
    },
    {
      category: "CA — Client Testimonial Placeholder",
      role: "Senior Partner, Tax & Corporate Advisory",
      quote: "Before working with Neeraj and Lalit, our firm had zero video presence. Their teleprompter direction and short-form edits helped us convert complex GST updates into high-retainer corporate advisory leads.",
      author: "Chartered Accountant (FCA)",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=400&auto=format&fit=crop"
    },
    {
      category: "Founder — Client Testimonial Placeholder",
      role: "B2B SaaS Founder & CEO",
      quote: "The quality of production NLB brings to founder branding is outstanding. They are not just video editors — they are strategic partners who understand positioning and market authority.",
      author: "Tech Startup Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-studio-dark border-t border-studio-border relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="CLIENT TESTIMONIALS"
          title={
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-studio-text tracking-tight leading-[1.05]">
              PEOPLE WE'VE <br />
              <span className="text-studio-accent">HELPED SHOW UP BETTER.</span>
            </h2>
          }
          subtitle="Real client case studies and feedback from doctors, CAs, and founders showing up with authority."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {placeholders.map((item, idx) => (
            <div
              key={idx}
              className="bg-studio-black border border-studio-border p-8 flex flex-col justify-between relative group hover:border-studio-accent/60 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-studio-accent uppercase font-bold tracking-widest bg-studio-accent/10 px-2.5 py-1 border border-studio-accent/30">
                    {item.category}
                  </span>
                  <Quote className="w-6 h-6 text-studio-accent/40 group-hover:text-studio-accent transition-colors" />
                </div>

                <p className="text-sm md:text-base text-studio-text-muted italic leading-relaxed font-light">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-studio-border/60 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-studio-accent/40 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase text-studio-text">
                    {item.author}
                  </h4>
                  <p className="text-xs text-studio-text-muted">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
