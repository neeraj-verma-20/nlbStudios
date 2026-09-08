import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#FAF9F6",
          white: "#FFFFFF",
          black: "#0A0A0C",
          dark: "#141417",
          subtle: "#F2F1ED",
          border: "#E5E4E0",
          "border-dark": "#D1D0CB",
          text: "#0A0A0C",
          muted: "#666663",
          dim: "#8E8E8A",
          accent: "#0A0A0C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-inter)", "sans-serif"],
      },
      aspectRatio: {
        "9/16": "9 / 16",
        "4/5": "4 / 5",
        "16/9": "16 / 9",
        "3/4": "3 / 4",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

