/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        "navy-mid": "#112240",
        "navy-light": "#1a3a5c",
        cream: "#FAFAF7",
        "cream-dim": "#F0EDE4",
        "cream-dark": "#E8E4D9",
        charcoal: "#1A1A2E",
        forest: "#1B3A0E",
        "forest-hover": "#244F13",
        gold: "#B8860B",
        "gold-light": "#D4A017",
        slate: "#4A5568",
        muted: "#718096",
        blue: "#1E5FA8",
        "blue-light": "#3B82C4",
        "warm-gray": "#9CA3AF",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      fontSize: {
        "hero": ["72px", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "hero-sm": ["52px", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "section": ["42px", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "section-sm": ["32px", { lineHeight: "1.15" }],
      },
    },
  },
  plugins: [],
}
