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
          0: "#E5F5FF",
          100: "#B8E3FF",
          200: "#8AD2FF",
          300: "#5CC0FF",
          400: "#2EAEFF",
          500: "#009CFF",
          600: "#007DCC",
          700: "#005E99",
          800: "#003E66",
          900: "#001F33",
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
