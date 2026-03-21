import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        navy: {
          900: "#0a0e1a",
          950: "#060810",
        },
      },
      fontFamily: {
        serif: ["var(--font-noto-serif)", "Georgia", "serif"],
        sans: ["var(--font-noto-sans)", "system-ui", "sans-serif"],
      },
      lineHeight: {
        relaxed: "1.9",
        loose: "2.2",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#e2e8f0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
