import type { Config } from "tailwindcss";
// const { addIconSelectors } = require("@iconify/tailwind");
const { addDynamicIconSelectors } = require("@iconify/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // 色は"https://tailwindcss.com/docs/customizing-colors#naming-your-colors"を参照する
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      noto: ["var(--font-noto)", "sans-serif"],
    },
    fontSize: {
      size1: "32px",
      size2: "24px",
      size3: "20px",
      size4: "16px",
      size5: "15px",
      size6: "13px",
      size7: "10px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
export default config;
