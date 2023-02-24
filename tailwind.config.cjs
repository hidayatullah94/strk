/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Outfit", "sans-serif"],
			},
			backgroundColor: {
				hero: "#2C3E66",
				primary: "#E70014",
			},
		},
	},
	plugins: [],
};
