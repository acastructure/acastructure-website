/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0D1B2A",
        "navy-mid": "#152236",
        cream: "#F5F0E8",
        "cream-dim": "#EDE7DB",
        charcoal: "#1C2331",
        forest: "#2A4A1E",
        "forest-light": "#3A6229",
        gold: "#C4892A",
        "gold-light": "#D9A84E",
        slate: "#4A5568",
        muted: "#6B7280",
        blue: "#2B5EA7",
        "blue-light": "#4A7EC4",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
