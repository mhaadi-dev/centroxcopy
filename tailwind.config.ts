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
			colors: {
				gray: {
					charcoal: "#121212",
					dark: "#181818",
					light: "#D1D5DB",
				},
				blue: {
					azure: "#056EE1",
				},
				white: {
					DEFAULT: "#FFFFFF",
					offWhite: "#F9FAFB",
				},
			},
			screens: {
				"xlc": {  'min': "1919" },
				"3xl": { 'min': "2000px" },
				"4xl": { 'min': "2500px" },
			},
		},
	},
	plugins: [],
};
export default config;
