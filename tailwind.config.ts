// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        moveBackground: "moveBackground 20s linear infinite",
      },
      keyframes: {
        moveBackground: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "300px 300px" },
        },
      },
      backgroundSize: {
        '300px': '300px 300px',
      },
    },
  },
  plugins: [],
} satisfies Config;
