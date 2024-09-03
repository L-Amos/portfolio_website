/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ["Bebas Neue", "sans-serif"],
				body: ["Inter Tight", "sans-serif"],
			}
		},
	},
	plugins: [],
}
