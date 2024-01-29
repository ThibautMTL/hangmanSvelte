/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{svelte,js,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#3366FF',
				secondary: '#FF3131',
				tertiary: '#66CC66',
				text: '#333333'
			},
			fontFamily: {
				sans: ['Coming Soon', 'sans-serif'],
				heading: ['Coming Soon', 'sans-serif']
			}
		}
	},
	plugins: [
		plugin(({ addComponents }) => {
			addComponents({
				'.title-1': {
					fontFamily: 'Coming Soon',
					fontSize: '36px'
				},
				'.title-2': {
					fontFamily: 'Coming Soon',
					fontSize: '24px'
				},
				'standard-text': {
					fontFamily: 'Coming Soon',
					fontSize: '20px'
				},
				'small-text': {
					fontFamily: 'Coming Soon',
					fontSize: '16px'
				}
			});
		})
	]
};
