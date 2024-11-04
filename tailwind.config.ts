import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./helpers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        paragraph: ['"Inter"', 'sans-serif'], 
      },
      boxShadow: {
        'custom': '0px 0px 20px 0px #079DFC, 0px 0px 12px 0px #079DFC inset, 0px -8px 24px 0px rgba(128, 255, 219, 0.40) inset',
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      grayscale: {
        "100": "100%",
      },
      contrast: {
        "100": "100%",
      },
      brightness: {
        "100": "100%",
      },
      colors: {
        gray: {
          charcoal: "#121212",
          dark: "#181818",
          light: "#D1D5DB",
          cool: "#E5E7EB",
          disabled: "#6B6B6B",
          gray2: "#6B7280",
          gray3:"#272727",
          gray4:"#060606",
          downloadDark: "#101010",
          graydark:"#060606",
          cardgray:"#0A0A0A"
        },
        
        blue: {
          azure: "#056EE1",
          bright: "#079DFC",
          dark: "#079DFC4D",
          darkBtn: "#163BED",
        },
        white: {
          DEFAULT: "#FFFFFF",
          offWhite: "#F9FAFB",
          light:"#FCFCFC"
        },
        text_gradient:{
          primary:"#056EE1",
          faded:"#6EB4EB"
        }
      },
      screens: {
        xlc: { min: "1919" },
        xl:{min:"1140px"},
        "3xl": { min: "2685px" },
        "4xl": { min: "2500px" },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
