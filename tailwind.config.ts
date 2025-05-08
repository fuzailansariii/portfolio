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
      fontFamily: {
        quicksand: "var(--font-quicksand)",
        nunito: "var(--font-nunito)",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["business"],
  },
} satisfies Config;
