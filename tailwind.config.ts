import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    colors: {
      "theme-red": "#C43302",
      "theme-yellow": "#EDAA25",
      "theme-kaki": "#B7BF99",
      "theme-turquoise": "#0A7373",
      "theme-dark": "#010221",
    },
  },
  plugins: [],
} satisfies Config;
