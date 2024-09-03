/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ["Bebas Neue", "sans-serif"],
				body: ["Inter Tight", "sans-serif"],
			},
			boxShadow: {
				button: '-10px 5px 0px rgba(75, 85, 99, 1)',
				button_hover: '-15px 8px 0px rgba(74, 222, 128, 1)'
			}
		},
	},
	plugins: [],
}
