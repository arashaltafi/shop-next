import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(100, 116, 139.25)',
        '4xl': '0 50px 50px rgba(100, 116, 139.25)',
      },
      borderRadius: {
        'xLarge': '0% 0% 50% 50% / 0% 0% 10% 10%',
        'large': '0% 0% 50% 50% / 0% 0% 7% 7%',
        'medium': '0% 0% 50% 50% / 0% 0% 5% 5%',
        'small': '0% 0% 50% 50% / 0% 0% 3% 3%',
        'xSmall': '0% 0% 50% 50% / 0% 0% 1% 1%',
      }
    },
  },
  plugins: [],
};
export default config;
