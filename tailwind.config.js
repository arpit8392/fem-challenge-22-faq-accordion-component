/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				softViolet: 'hsl(273, 75%, 66%)',
				softBlue: 'hsl(240, 73%, 65%)',
				darkDesaturatedBlue: 'hsl(238, 29%, 16%)',
				softRed: 'hsl(14, 88%, 65%)',
				veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
				darkGrayishBlue: 'hsl(240, 6%, 50%)',
				lightGrayishBlue: 'hsl(240, 5%, 91%)',
			},
		},
	},
	plugins: [],
}
