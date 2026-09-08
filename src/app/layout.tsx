import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nlbstudios.in"),
  title: "NLB STUDIOS — Personal Branding • Content • Reels",
  description:
    "We create professional reels, personal branding content and digital experiences for people who have something worth saying. nlbstudios.in",
  keywords: [
    "NLB Studios",
    "Personal Branding Studio",
    "Reels Production Agency",
    "Content Management",
    "Digital Growth",
    "Personal Branding for Doctors",
    "Personal Branding for CAs",
    "Personal Branding for Founders",
    "Neeraj Verma",
    "Lalit Bist",
  ],
  authors: [{ name: "NLB Studios" }],
  openGraph: {
    title: "NLB STUDIOS — Personal Branding • Content • Reels",
    description:
      "We help professionals get seen. High-end reel production, personal branding and digital growth.",
    url: "https://nlbstudios.in",
    siteName: "NLB Studios",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NLB STUDIOS — Personal Branding Studio",
    description: "We help professionals get seen through high-impact content.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NLB Studios",
    "url": "https://nlbstudios.in",
    "description": "Personal branding, content production and reels studio for professionals.",
    "founders": [
      { "@type": "Person", "name": "Neeraj Verma" },
      { "@type": "Person", "name": "Lalit Bist" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF9F6] text-[#0A0A0C] antialiased selection:bg-[#0A0A0C] selection:text-[#FAF9F6]">
        {children}
      </body>
    </html>
  );
}

