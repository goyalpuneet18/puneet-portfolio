const { DEFAULT_RUNTIME_WEBPACK } = require('next/dist/shared/lib/constants');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)"
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: {
						height: "0px",
					},
					to: {
						height: "var(--radius-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radius-accordion-content-height)",
					},
					to: {
						height: "0px",
					},
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-in-out",
				"accordion-up": "accordion-up 0.2s ease-in-out"
			},
			colors: {
				primary: '#1c1c22',
				accent: {
					DEFAULT: '#00ff99',
					hover: '#00e187'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
