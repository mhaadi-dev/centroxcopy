import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    
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
          downloadDark: "#101010",
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
        },
      },
      screens: {
        xlc: { min: "1919" },
        "3xl": { min: "2000px" },
        "4xl": { min: "2500px" },
		
		// "smallLaptops":"1366px" ,
		// "mediumLaptops":"1500px",
		// "largeLaptops":"2300px",
      },
    },
  },
  plugins: [],
};
export default config;
