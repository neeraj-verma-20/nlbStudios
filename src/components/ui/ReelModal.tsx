"use client";

import React, { useEffect } from "react";
import { X, Play, Volume2, VolumeX } from "lucide-react";
import { ProjectItem } from "@/data/portfolioData";

interface ReelModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ project, onClose }) => {
  const [isMuted, setIsMuted] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-label="Close background overlay"
      />

      <div className="relative z-10 flex flex-col md:flex-row bg-[#FAF9F6] text-[#0A0A0C] border border-[#E5E4E0] rounded-none max-w-4xl w-full overflow-hidden max-h-[90vh] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-[#0A0A0C] text-[#FAF9F6] hover:bg-[#333333] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Vertical 9:16 Media Container */}
        <div className="w-full md:w-1/2 bg-[#0A0A0C] relative flex items-center justify-center min-h-[400px] md:min-h-[560px]">
          {project.videoUrl ? (
            <div className="relative w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                src={project.videoUrl}
                poster={project.imagePlaceholder}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                className="w-full h-full object-cover max-h-[600px] aspect-[9/16]"
                onClick={togglePlay}
              />
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                <button
                  onClick={togglePlay}
                  className="bg-[#0A0A0C]/80 text-white p-2 text-xs font-mono uppercase tracking-wider flex items-center gap-1 hover:bg-black"
                >
                  <Play className="w-3.5 h-3.5" />
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button
                  onClick={toggleMute}
                  className="bg-[#0A0A0C]/80 text-white p-2 text-xs font-mono uppercase tracking-wider flex items-center gap-1 hover:bg-black"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  {isMuted ? "Unmute" : "Mute"}
                </button>
              </div>
            </div>
          ) : (
            <img
              src={project.imagePlaceholder}
              alt={`${project.role} - ${project.category}`}
              className="w-full h-full object-cover aspect-[9/16]"
            />
          )}
        </div>

        {/* Project Details Panel */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="text-xs font-mono tracking-widest text-[#666663] uppercase mb-2">
              {project.category}
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#0A0A0C] mb-4">
              {project.role}
            </h3>
            <p className="text-base text-[#444440] font-normal leading-relaxed mb-6">
              {project.summary}
            </p>

            <div className="border-t border-[#E5E4E0] pt-6 mb-6">
              <div className="text-xs font-mono text-[#666663] uppercase tracking-wider mb-3">
                Key Highlights
              </div>
              <ul className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="text-sm text-[#0A0A0C] flex items-start gap-2">
                    <span className="text-xs font-mono text-[#666663] mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E5E4E0] flex items-center justify-between">
            <span className="text-xs font-mono text-[#666663] uppercase">
              NLB STUDIOS Showcase
            </span>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-[#0A0A0C] text-[#FAF9F6] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#2A2A2E] transition-colors"
            >
              Start Similar Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
