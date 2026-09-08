export interface AudienceProfile {
  id: string;
  title: string;
  roleTag: string;
  headline: string;
  description: string;
  painPoints: string[];
  solution: string;
  impactMetrics: string;
  image: string;
}

export const AUDIENCE_PROFILES: AudienceProfile[] = [
  {
    id: "doctors",
    title: "DOCTORS",
    roleTag: "Medical Professionals & Clinic Owners",
    headline: "Turn Medical Expertise Into Patient Trust & Clinical Authority",
    description: "Patients search online before booking consultations. We help medical specialists, surgeons, dermatologists, and clinical founders educate patients without diluting medical ethics or clinical gravity.",
    painPoints: [
      "No time between consultations & surgeries to film videos",
      "Worry about sounding gimmicky or medically unethical",
      "Struggle to explain complex medical treatments simply"
    ],
    solution: "A monthly 2-hour scripted camera shoot in your clinic or our studio. We turn clinical insights into trusted educational reels.",
    impactMetrics: "Est. +180% Inbound Patient Consultations",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "cas",
    title: "CHARTERED ACCOUNTANTS",
    roleTag: "CAs, Tax Strategists & Financial Advisors",
    headline: "Turn Complex Financial Regulations Into High-Value Retainer Leads",
    description: "Financial advisory is built on trust. We enable top CAs and wealth advisors to demystify tax laws, GST updates, and corporate finance through clear, authoritative visual breakdowns.",
    painPoints: [
      "Financial jargon turns casual viewers away",
      "Competitors posting simplified advice are taking market share",
      "No structured content production pipeline"
    ],
    solution: "Short-form whiteboard breakdowns & legal updates scripted for high retention and high-net-worth client acquisition.",
    impactMetrics: "Est. 3.4x Corporate Advisory Retainers",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "founders",
    title: "FOUNDERS",
    roleTag: "Startup Founders & Tech Executives",
    headline: "Build Unshakeable Visibility Around The Person Behind The Business",
    description: "Investors, top talent, and enterprise customers buy into the founder before the product. We craft a compelling founder narrative that scales recruitment, investor relations, and brand reputation.",
    painPoints: [
      "Building a company leaves zero bandwidth for content creation",
      "Unsure how to balance personal opinions with company PR",
      "Generic social media posts get zero traction"
    ],
    solution: "Documented behind-the-scenes founder stories, podcast cutdowns, and strategic thought leadership pieces.",
    impactMetrics: "Est. 45K+ Monthly Founder Profile Visits",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "consultants",
    title: "CONSULTANTS",
    roleTag: "Management Consultants & Advisory Partners",
    headline: "Turn Industry Knowledge Into Undisputed Authority",
    description: "High-ticket consulting clients hire advisors with clear, demonstrated framework mastery. We convert your proprietary methodologies into premium short video masterclasses.",
    painPoints: [
      "Relying solely on word-of-mouth for client acquisition",
      "Difficulty demonstrating intangible strategic value online",
      "Lacking a polished studio setup for professional recording"
    ],
    solution: "Cinematic executive interview sessions that position you as the definitive voice in your vertical.",
    impactMetrics: "Est. High-Intent Inbound Advisory Enquiries",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "professionals",
    title: "SENIOR PROFESSIONALS",
    roleTag: "Architects, Lawyers & Industry Experts",
    headline: "A Digital Presence That Reflects Real-World Credibility",
    description: "You've built decades of offline reputation. We ensure your online presence commands the exact same prestige and respect.",
    painPoints: [
      "Current social profiles look outdated or inactive",
      "No internal video team to handle filming & editing",
      "Want to build a lasting legacy asset"
    ],
    solution: "Full-service turnkey personal branding engine taking care of strategy, scripting, production, and publishing.",
    impactMetrics: "Est. Industry Top Voice Recognition",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
  }
];
