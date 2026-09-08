"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-none uppercase tracking-wider disabled:opacity-50 disabled:pointer-events-none cursor-pointer group",
          {
            "bg-studio-text text-studio-black hover:bg-studio-accent hover:text-studio-black shadow-lg hover:shadow-studio-accent/20":
              variant === "primary",
            "bg-studio-surface text-studio-text hover:bg-studio-border border border-studio-border hover:border-studio-accent/40":
              variant === "secondary",
            "border border-studio-text/30 text-studio-text hover:border-studio-accent hover:text-studio-accent bg-transparent":
              variant === "outline",
            "text-studio-text hover:text-studio-accent bg-transparent px-0":
              variant === "ghost",
          },
          {
            "text-xs px-4 py-2.5 gap-2": size === "sm",
            "text-sm px-6 py-3.5 gap-2.5": size === "md",
            "text-base px-8 py-4 gap-3": size === "lg",
          },
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
