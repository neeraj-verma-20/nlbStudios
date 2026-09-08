export interface ProjectItem {
  id: string;
  role: string;
  category: string;
  tagline: string;
  aspectRatio: "9/16" | "4/5" | "3/4";
  sizeClass: string; // for editorial rhythm grid
  imagePlaceholder: string;
  videoUrl?: string;
  summary: string;
  highlights: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "doctor-reels",
    role: "Doctor",
    category: "Educational Reels",
    tagline: "Simplifying medical insights into authoritative, engaging short clips.",
    aspectRatio: "9/16",
    sizeClass: "col-span-12 md:col-span-7 md:row-span-2",
    imagePlaceholder: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-doctor-talking-to-a-patient-41584-large.mp4",
    summary: "High-integrity clinical communication engineered for patient trust, clarity, and social authority.",
    highlights: [
      "Medical jargon translated into clear visual hooks",
      "Studio lighting & acoustic sound treatment",
      "Compliant, evidence-backed educational structure"
    ]
  },
  {
    id: "ca-financial",
    role: "CA",
    category: "Financial Content",
    tagline: "Demystifying tax, compliance, and wealth building for entrepreneurs.",
    aspectRatio: "9/16",
    sizeClass: "col-span-12 md:col-span-5",
    imagePlaceholder: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4",
    summary: "Positioning Chartered Accountants as high-value strategic financial advisors.",
    highlights: [
      "Tax saving breakdowns & policy updates",
      "Clean graphics & dynamic text callouts",
      "Direct inbound client inquiry flow"
    ]
  },
  {
    id: "founder-brand",
    role: "Founder",
    category: "Personal Brand",
    tagline: "Building authentic founder led storytelling for venture scale companies.",
    aspectRatio: "9/16",
    sizeClass: "col-span-12 md:col-span-5",
    imagePlaceholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-tablet-in-an-office-41527-large.mp4",
    summary: "Documenting company vision, startup lessons, and leadership philosophy.",
    highlights: [
      "Behind-the-scenes company building narrative",
      "Executive posture and delivery coaching",
      "Investor & talent attraction content strategy"
    ]
  },
  {
    id: "consultant-expert",
    role: "Consultant",
    category: "Expert Content",
    tagline: "Transforming deep industry frameworks into high-converting video series.",
    aspectRatio: "9/16",
    sizeClass: "col-span-12 md:col-span-6",
    imagePlaceholder: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-a-video-call-41526-large.mp4",
    summary: "B2B expertise communicated with precision, confidence, and editorial polish.",
    highlights: [
      "Case study breakdowns & framework videos",
      "LinkedIn & Instagram cross-platform formatting",
      "Lead magnet video funnels"
    ]
  },
  {
    id: "professional-thought",
    role: "Professional",
    category: "Thought Leadership",
    tagline: "Establishing category authority and key opinion leadership.",
    aspectRatio: "9/16",
    sizeClass: "col-span-12 md:col-span-6",
    imagePlaceholder: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-serious-businessman-working-in-his-office-41530-large.mp4",
    summary: "Articulating complex industry opinions into crisp, persuasive 60-second reels.",
    highlights: [
      "Industry commentary & macro trend analysis",
      "Polished sound design & typography",
      "Speaking engagement & media attraction"
    ]
  },
  {
    id: "business-owner-brand",
    role: "Business Owner",
    category: "Brand Content",
    tagline: "Humanizing enterprise services into relatable personal storytelling.",
    aspectRatio: "9/16",
    sizeClass: "col-span-12 md:col-span-12",
    imagePlaceholder: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4",
    summary: "Connecting business heritage with modern digital presence to drive trust.",
    highlights: [
      "Behind-the-brand storytelling",
      "Customer transformation narratives",
      "High-converting video creative assets"
    ]
  }
];

export const SERVICES_LIST = [
  {
    number: "01",
    title: "Reel Production",
    description: "End-to-end 9:16 vertical video studio production. We handle scripting, professional multi-camera shooting, acoustics, color grading, and crisp editorial typography."
  },
  {
    number: "02",
    title: "Personal Branding",
    description: "Strategic positioning for high-credibility professionals. We define your unique narrative, content pillars, visual identity, and core message."
  },
  {
    number: "03",
    title: "Content Management",
    description: "Full-stack publishing, scheduling, multi-platform optimization, and continuous content ops so you never have to worry about social logistics."
  },
  {
    number: "04",
    title: "Digital Growth",
    description: "Audience acquisition, conversion funnels, and targeted reach strategies designed to convert viewers into clients, partners, and opportunities."
  }
];

export const PROCESS_STEPS = [
  {
    step: "PLAN",
    title: "Strategy & Scripting",
    description: "We map out your positioning, key content pillars, and script engaging video hooks tailored to your target audience."
  },
  {
    step: "SHOOT",
    title: "Production",
    description: "We handle high-quality on-location or studio production with minimal intrusion into your busy schedule."
  },
  {
    step: "CREATE",
    title: "Post-Production",
    description: "Our editors turn raw footage into crisp 9:16 reels with precise pacing, typography, and visual clarity."
  },
  {
    step: "PUBLISH",
    title: "Distribution & Growth",
    description: "We manage distribution, captioning, and platform strategy to turn views into high-value relationships."
  }
];
