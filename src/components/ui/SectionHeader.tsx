import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-20 max-w-4xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-studio-accent animate-pulse-slow" />
          <span className="text-xs md:text-sm font-semibold tracking-widest text-studio-accent uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      {typeof title === "string" ? (
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-studio-text uppercase">
          {title}
        </h2>
      ) : (
        title
      )}

      {subtitle && (
        <p className="mt-4 md:mt-6 text-base md:text-xl text-studio-text-muted max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
