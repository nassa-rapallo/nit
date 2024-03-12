import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        huge: "32px",
      },
      colors: {
        nassa: {
          main: "#007DCC",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        //"nassa-gradient":
        //"linear-gradient(102deg, #009CFF 0.77%, #76A195 60.68%, #F9A620 120.58%)",
        "nassa-gradient":
          "linear-gradient(96deg, #009CFF -4.25%, #76A195 29.44%, #AFA362 72.42%, #C5A44E 85.86%, #F9A620 130.23%)",
      },
      boxShadow: {
        hero: "-5px 14px 0 -5px rgba(112, 199, 255, 1), -8px 20px 0 -5px rgba(179, 225, 255, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
