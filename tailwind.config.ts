// tailwind.config.ts (atau tailwind.config.js)

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Ini yang bikin Dark Mode lu jalan
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;