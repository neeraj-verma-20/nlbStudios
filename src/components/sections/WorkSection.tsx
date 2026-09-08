"use client";

import React, { useState } from "react";
import { PROJECTS_DATA, ProjectItem } from "@/data/portfolioData";
import { ReelModal } from "@/components/ui/ReelModal";
import { Play, ArrowUpRight } from "lucide-react";

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Explicit grid column mappings to prevent Tailwind CSS purge issues
  const getGridColumnClass = (index: number) => {
    switch (index) {
      case 0:
        return "col-span-12 lg:col-span-7";
      case 1:
        return "col-span-12 lg:col-span-5";
      case 2:
        return "col-span-12 lg:col-span-5";
      case 3:
        return "col-span-12 lg:col-span-7";
      case 4:
        return "col-span-12 lg:col-span-6";
      case 5:
        return "col-span-12 lg:col-span-6";
      default:
        return "col-span-12 lg:col-span-6";
    }
  };

  return (
    <section id="work" className="w-full py-20 md:py-32 bg-[#FAF9F6] border-b border-[#E5E4E0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E5E4E0]">
          <div>
            <div className="text-xs font-mono text-[#666663] uppercase tracking-widest mb-3">
              03 — Visual Portfolio
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A0A0C] tracking-tighter uppercase font-display">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-sm font-mono text-[#666663] uppercase tracking-wider mt-4 md:mt-0">
            9:16 Vertical Content Editorial Grid
          </p>
        </div>

        {/* Editorial Grid Rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`${getGridColumnClass(index)} group cursor-pointer flex flex-col justify-between`}
            >
              {/* Media Container (Vertical 9:16 Aspect Ratio) */}
              <div className="relative w-full aspect-[9/16] bg-[#0A0A0C] border border-[#E5E4E0] overflow-hidden mb-5 max-h-[580px]">
                <img
                  src={project.imagePlaceholder}
                  alt={`${project.role} - ${project.category}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Overlay Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#FAF9F6]/95 text-[#0A0A0C] text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 border border-[#E5E4E0] shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Play Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#FAF9F6] text-[#0A0A0C] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Meta Info */}
              <div className="flex items-start justify-between border-t border-[#E5E4E0] pt-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0C] tracking-tight uppercase font-display group-hover:underline">
                    {project.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666663] mt-1 line-clamp-1 font-normal">
                    {project.tagline}
                  </p>
                </div>
                <div className="p-1 text-[#0A0A0C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Reel Modal */}
      <ReelModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

