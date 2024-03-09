import type { Config } from "tailwindcss";
// import {COLOR_BASE_GRAY_LIGHT} from "./build/web/tokens";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        btnPrimary: "var(--buttonBgColorPrimary)",
      },
      borderRadius: {
        primaryRadius: "var(--buttonBorderRadius)",
      }
    },
  },
  plugins: [],
};
export default config;
