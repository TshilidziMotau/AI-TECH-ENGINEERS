import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#070B14",
        foreground: "#E6EEFF",
        muted: "#8A97B8",
        card: "rgba(14, 20, 36, 0.72)",
        accent: "#5BE7FF",
        primary: "#6E86FF"
      },
      boxShadow: {
        glow: "0 0 60px rgba(91, 231, 255, 0.25)",
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 1px 1px, rgba(123,146,186,0.2) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
