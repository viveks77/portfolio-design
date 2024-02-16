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
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
        },
        secondary: "var(--secondary)",
        default: "var(--default)",
        foreground: {
          DEFAULT : "var(--foreground)",
          secondary: "var(--foreground-secondary)",
        }
      }
    },
  },
  plugins: [],
};
export default config;
