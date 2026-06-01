import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:       'rgb(var(--color-primary) / <alpha-value>)',
        secondary:     'rgb(var(--color-secondary) / <alpha-value>)',
        muted:         'rgb(var(--color-muted) / <alpha-value>)',
        base:          'rgb(var(--color-base) / <alpha-value>)',
        surface:       'rgb(var(--color-surface) / <alpha-value>)',
        'surface-nav': 'rgb(var(--color-surface-nav) / <alpha-value>)',
        'hover-bg':    'rgb(var(--color-hover-bg) / <alpha-value>)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
