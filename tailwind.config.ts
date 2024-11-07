import flowbitePlugin from 'flowbite/plugin';
import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#d2f0e2',
					100: '#b4e5ce',
					200: '#8ed9b6',
					300: '#68cc9e',
					400: '#43bf85',
					500: '#18945b',
					600: '#137749',
					700: '#0f5937',
					800: '#0a3b24',
					900: '#062416',
					base: '#1db26d'
				},
				'ap-gold': {
					50: '#FEF0D6',
					100: '#FDE5BB',
					200: '#FCD999',
					300: '#FBCC77',
					400: '#FABF55',
					base: '#F9B233',
					600: '#D0942B',
					700: '#A67722',
					800: '#7D591A',
					900: '#533B11',
					1000: '#32240A'
				},
				'ap-blue': {
					50: '#D5EEF9',
					100: '#B9E3F5',
					200: '#96D5F0',
					300: '#73C6EB',
					400: '#50B6E6',
					base: '#2DAAE1',
					600: '#268EB6',
					700: '#1E7196',
					800: '#175571',
					900: '#0F394B',
					1000: '#092224'
				},
				'ap-gray': {
					50: '#F8F8F8',
					100: '#F3F3F3',
					200: '#EDEDED',
					300: '#E6E6E6',
					400: '#E0E0E0',
					base: '#DADADA',
					600: '#B6B6B6',
					700: '#919191',
					800: '#6D6D6D',
					900: '#494949',
					1000: '#2C2C2C'
				}
			}
		}
	},

	plugins: [flowbitePlugin]
} satisfies Config;
