export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  iconName: string;
  image: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "strategy",
    number: "01",
    title: "PERSONAL BRAND STRATEGY",
    subtitle: "Positioning & Content Blueprint",
    description: "We define your authority positioning, target audience profile, content pillars, distinct voice, and the core topics you should become known for across digital channels.",
    deliverables: [
      "Brand Positioning & Messaging Framework",
      "Audience Persona & Market Mapping",
      "Core Content Pillars & Topic Bank",
      "Visual Identity & On-Camera Styling Guidelines",
      "Channel Strategy (Instagram, LinkedIn, YouTube)"
    ],
    iconName: "Target",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "reel-production",
    number: "02",
    title: "REEL PRODUCTION",
    subtitle: "High-End On-Location & Studio Shoots",
    description: "Full production studio execution — from expert teleprompter direction and script crafting to cinema camera setups, studio lighting, dual-mic audio, and on-set creative direction.",
    deliverables: [
      "Scriptwriting & Hook Architecture",
      "Full Studio & Cinema Camera Setup",
      "Professional Lighting & Acoustic Audio",
      "On-Camera Teleprompter & Live Direction",
      "Focused 3-Hour Monthly Content Shoots"
    ],
    iconName: "Video",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "short-form",
    number: "03",
    title: "SHORT-FORM CONTENT",
    subtitle: "High-Retention Editing & Visual Storytelling",
    description: "Engineered short-form video content specifically crafted for high retention, algorithm reach, and editorial authority on Instagram Reels, YouTube Shorts, and LinkedIn Video.",
    deliverables: [
      "Dynamic B-Roll & Visual Pacing",
      "Custom Editorial Typography & Subtitles",
      "Motion Graphics & Visual Diagrams",
      "Sound Design & Atmospheric Audio Mixing",
      "Platform-Native Aspect Ratio Optimization"
    ],
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "smm",
    number: "04",
    title: "SOCIAL MEDIA MANAGEMENT",
    subtitle: "End-to-End System Execution",
    description: "We handle the entire operational workflow. From scheduling and SEO copywriting to thumbnail curation, engagement monitoring, and detailed monthly analytics reporting.",
    deliverables: [
      "Monthly Editorial Content Calendar",
      "High-Conversion Copywriting & Captions",
      "Hashtag & Platform SEO Optimization",
      "Custom Thumbnail & Cover Design",
      "Monthly Performance & Conversion Audits"
    ],
    iconName: "Calendar",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "paid-growth",
    number: "05",
    title: "PAID GROWTH",
    subtitle: "Targeted Audience Amplification",
    description: "Amplify your best-performing organic content directly to high-intent decision-makers, high-net-worth clients, patients, and strategic business partners.",
    deliverables: [
      "Audience Targeting & Geo-Demographic Setup",
      "High-Performing Reel Ad Formatting",
      "Campaign Budget & Lead Funnel Optimization",
      "Retargeting Custom Audiences",
      "ROI & Direct Enquiry Tracking"
    ],
    iconName: "TrendingUp",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop"
  }
];
