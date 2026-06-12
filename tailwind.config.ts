import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: "#070b1a",
          dark: "#050815",
          primary: "#0a0f2e",
          secondary: "#111842",
          light: "#1a237e",
        },
        green: {
          accent: "#2e7d32",
          light: "#4caf50",
        },
        muted: {
          DEFAULT: "#b0bec5",
          dim: "#78909c",
        },
        amber: {
          badge: "#f59e0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee-left": "marquee-left 45s linear infinite",
        "marquee-right": "marquee-right 45s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "marquee-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
