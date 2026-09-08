"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "Doctor",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleReset} title="Book a Strategy Call" maxWidth="lg">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <p className="text-sm md:text-base text-studio-text-muted">
            Select a session with the NLB Studios founding team to audit your current brand presence and map your content strategy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-studio-text-muted mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Dr. Rajesh Kumar / Ananya Roy"
                className="w-full bg-studio-surface border border-studio-border px-4 py-3 text-studio-text focus:outline-none focus:border-studio-accent text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-studio-text-muted mb-2">
                Profession / Discipline *
              </label>
              <select
                value={formData.profession}
                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                className="w-full bg-studio-surface border border-studio-border px-4 py-3 text-studio-text focus:outline-none focus:border-studio-accent text-sm"
              >
                <option value="Doctor">Doctor / Medical Specialist</option>
                <option value="CA">Chartered Accountant / Tax Consultant</option>
                <option value="Founder">Founder / CEO</option>
                <option value="Consultant">Management Consultant</option>
                <option value="Professional">Business Leader / Executive</option>
                <option value="Other">Other High-Value Expertise</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-studio-text-muted mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@domain.com"
                className="w-full bg-studio-surface border border-studio-border px-4 py-3 text-studio-text focus:outline-none focus:border-studio-accent text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-studio-text-muted mb-2">
                Phone Number (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full bg-studio-surface border border-studio-border px-4 py-3 text-studio-text focus:outline-none focus:border-studio-accent text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-studio-text-muted mb-2">
              Primary Goal / What would you like to achieve?
            </label>
            <textarea
              rows={3}
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              placeholder="e.g. Build patient trust through short reels / Launch founder podcast series..."
              className="w-full bg-studio-surface border border-studio-border p-4 text-studio-text focus:outline-none focus:border-studio-accent text-sm"
            />
          </div>

          <div className="p-4 bg-studio-surface/50 border border-studio-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-studio-accent" />
              <span className="text-xs text-studio-text-muted uppercase tracking-wider">
                30-Minute Confidential Discovery Session
              </span>
            </div>
            <span className="text-xs font-semibold text-studio-accent uppercase">Free Strategy Audit</span>
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary" size="lg" className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
              Confirm & Request Booking Call
            </Button>
          </div>
        </form>
      ) : (
        <div className="py-12 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-studio-accent/20 text-studio-accent">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold uppercase text-studio-text">
            Strategy Request Received
          </h3>
          <p className="text-studio-text-muted max-w-md mx-auto text-sm leading-relaxed">
            Thank you, <strong className="text-studio-text">{formData.name}</strong>. Neeraj or Lalit from the NLB Studios founding team will reach out to you via WhatsApp / Email within 4 hours to confirm your time slot.
          </p>
          <div className="pt-4">
            <Button variant="outline" onClick={handleReset}>
              Close Window
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
