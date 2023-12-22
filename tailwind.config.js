/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"General Sans"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
