import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#F2F2F2',
        black: '#0C0C0C',

        pink: "#F5C5D2",
        fuzzy: "#D5626D",

        gray: {
          200: "#D5D5D5",
          400: "#616161",
          500: "#4F4F4F",
          600: "#444444",
          700: "#232323"
        },

        blue: {
          300: "#4678BC",
          600: "#20376C",
        }
      },
      borderRadius: {
        xxs: "1px",
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "16px",
        xl: "28px",
        full: "99999px"
      },
      fontSize: {
        xxs: "0.813rem",
        xs: "0.875rem",
        sm: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.375rem",
        "2xl": "1.875rem",
        "3xl": "2.125rem",
        "4xl": "2.5rem",
        "5xl": "2.625rem"
      },
      fontWeight: {
        lifgt: "400",
        extraLight: "450",
        normal: '500',
        extraNormal: "550",
        medium: "600",
        extraMedium: "650",
        bold: '700',
        extraBold: "750"
      },
      fontFamily: {
        ncs: "NCS Radhiumz",
        avenir: "Avenir LT Std"
      }
    },
  },
  plugins: [],
}
export default config
