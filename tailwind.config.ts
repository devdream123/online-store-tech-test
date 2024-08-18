import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        navbar: "0px 1px 2px 0px #00000040",
      },
      borderRadius: {
        "harvey-radius-0": "10px",
      },
      colors: {
        "harvey-gray-0": "#707784",
        "harvey-gray-1": "#374151",
      },
      borderColor: {
        "harvey-gray-0": "#707784",
        "harvey-gray-1": "#EFF0F3",
        "harvey-gray-2": "#D1D5DB",
      },
      backgroundColor: {
        "harvey-primary": "#4F46E5",
        "harvey-overlay": "rgba(217, 217, 217, 0.75)",
        "harvery-success": "#16A34A",
        "harvery-disabled": "#16A34A",
      },
    },
  },
  plugins: [],
};
export default config;
