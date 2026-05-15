import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#050507",
        obsidian: "#0b0c10",
        ash: "#15161b",
        pewter: "#a9adb8",
        bone: "#f4f0e8",
        ice: "#b9dfff",
        veil: "#b9b3ff"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: [
          "Cormorant Garamond",
          "Iowan Old Style",
          "Palatino Linotype",
          "Palatino",
          "Georgia",
          "serif"
        ]
      },
      boxShadow: {
        altar: "0 0 80px rgba(185, 223, 255, 0.12)"
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        14: "0.14",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        72: "0.72",
        86: "0.86",
        88: "0.88"
      }
    }
  },
  plugins: []
};

export default config;
