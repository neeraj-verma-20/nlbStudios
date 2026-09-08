"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  maxWidth = "lg",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const maxWidthClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-[95vw] h-[90vh]",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-studio-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`relative w-full ${maxWidthClasses[maxWidth]} bg-studio-dark border border-studio-border p-6 md:p-10 shadow-2xl z-10 overflow-y-auto max-h-[90vh]`}
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-studio-border">
              {title && (
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-studio-text">
                  {title}
                </h3>
              )}
              <button
                onClick={onClose}
                className="p-2 text-studio-text-muted hover:text-studio-accent transition-colors ml-auto border border-studio-border hover:border-studio-accent/40"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
