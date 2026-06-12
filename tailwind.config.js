// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Using CSS variables for theming
        navy: "var(--navy-primary)",
        "navy-dark": "var(--navy-dark)",
        "navy-deep": "var(--navy-deep)",
        "navy-secondary": "var(--navy-secondary)",
        "navy-light": "var(--navy-light)",
        "green-accent": "var(--green-accent)",
        "green-light": "var(--green-light)",
        "blue-light": "var(--blue-light)",
        "blue-medium": "var(--blue-medium)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        "amber-badge": "var(--amber-badge)",
        "glass-light": "var(--glass-light)",
        "glass-medium": "var(--glass-medium)",
        "glass-strong": "var(--glass-strong)",
        "glass-border": "var(--glass-border)",
      },
    },
  },
  plugins: [],
};
