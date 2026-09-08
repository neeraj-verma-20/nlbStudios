export interface PortfolioItem {
  id: string;
  category: 'DOCTOR' | 'CA' | 'FOUNDER' | 'CONSULTANT' | 'EXECUTIVE';
  categoryLabel: string;
  clientTitle: string;
  clientRole: string;
  videoTitle: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  };
  posterUrl: string;
  videoUrl: string;
  aspectRatio: string;
  featured?: boolean;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "work-1",
    category: "DOCTOR",
    categoryLabel: "Doctor — Medical Authority",
    clientTitle: "Dr. A. Sharma",
    clientRole: "Senior Cardiologist & Surgeon",
    videoTitle: "Explaining Heart Health Misconceptions in 60 Seconds",
    description: "Transformed complex cardiac surgical insights into clear, empathetic reel scripts that built trust with patients across North India.",
    metrics: {
      label: "Organic Reach",
      value: "1.2M+ Views"
    },
    posterUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-doctor-explaining-a-diagnosis-to-a-patient-41550-large.mp4",
    aspectRatio: "9/16",
    featured: true
  },
  {
    id: "work-2",
    category: "CA",
    categoryLabel: "CA — Financial Education",
    clientTitle: "Vikram Mehta, FCA",
    clientRole: "Taxation & Wealth Consultant",
    videoTitle: "3 Tax Breakdown Strategies Every Founder Ignores",
    description: "Simplified GST and corporate tax planning into highly engaging, step-by-step whiteboard reel breakdowns.",
    metrics: {
      label: "Inbound Enquiries",
      value: "+340% Growth"
    },
    posterUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4",
    aspectRatio: "9/16",
    featured: true
  },
  {
    id: "work-3",
    category: "FOUNDER",
    categoryLabel: "Founder — Personal Brand",
    clientTitle: "Ananya Roy",
    clientRole: "SaaS Co-Founder & CEO",
    videoTitle: "How We Bootstrapped to $2M ARR Without VC Funding",
    description: "Authentic founder talking-head series highlighting lessons learned, hiring frameworks, and product decisions.",
    metrics: {
      label: "LinkedIn Profile Visits",
      value: "45K/Month"
    },
    posterUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-to-camera-in-an-office-41539-large.mp4",
    aspectRatio: "9/16",
    featured: true
  },
  {
    id: "work-4",
    category: "CONSULTANT",
    categoryLabel: "Consultant — Thought Leadership",
    clientTitle: "Rohan Varma",
    clientRole: "Management & Strategy Advisor",
    videoTitle: "Why Most Corporate Restructures Fail in Year One",
    description: "High-production studio interviews breaking down executive leadership decisions and organizational scaling.",
    metrics: {
      label: "High-Retainer Leads",
      value: "14 Inquiries"
    },
    posterUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-explaining-something-during-a-meeting-41544-large.mp4",
    aspectRatio: "9/16",
    featured: true
  },
  {
    id: "work-5",
    category: "DOCTOR",
    categoryLabel: "Doctor — Dermatology",
    clientTitle: "Dr. R. Nambiar",
    clientRole: "Dermatologist & Clinical Lead",
    videoTitle: "Skincare Myths Debunked by a Certified Specialist",
    description: "Clear, clinical breakdowns contrasting viral internet hacks with evidence-based medical dermatology advice.",
    metrics: {
      label: "Patient Consultations",
      value: "+180% Inbound"
    },
    posterUrl: "https://images.unsplash.com/photo-1594824813566-78853b769229?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-female-doctor-holding-a-tablet-41549-large.mp4",
    aspectRatio: "9/16"
  },
  {
    id: "work-6",
    category: "EXECUTIVE",
    categoryLabel: "Executive — Business Leader",
    clientTitle: "Karan Malhotra",
    clientRole: "Managing Director, Logistics Corp",
    videoTitle: "Navigating Supply Chain Disruptions in 2026",
    description: "Editorial video podcasts turned into high-impact short reels for industry peers and B2B partners.",
    metrics: {
      label: "Industry Reputation",
      value: "Top Voice"
    },
    posterUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-business-people-having-a-meeting-41538-large.mp4",
    aspectRatio: "9/16"
  }
];
