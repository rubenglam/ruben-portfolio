/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'pulse-slow': 'pulse 1s linear infinite',
			},
		},
	},
	plugins: [],
};
