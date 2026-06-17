/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#11151C",
        "ink-soft": "#1B2230",
        paper: "#F7F4EC",
        "paper-dim": "#EDE9DD",
        charcoal: "#23262E",
        blueprint: "#6FA8DC",
        "blueprint-dim": "#3D5C75",
        brass: "#C9A668",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
}

