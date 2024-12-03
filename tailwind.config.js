import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		 './storage/framework/views/*.php',
		 './resources/views/**/*.blade.php',
		 "./vendor/robsontenorio/mary/src/View/Components/**/*.php"
	],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#22c55e",
                    "primary-content": "#000e03",
                    "secondary": "#a3e635",
                    "secondary-content": "#0a1301",
                    "accent": "#2dd4bf",
                    "accent-content": "#01100d",
                    "neutral": "#0a0704",
                    "neutral-content": "#c7c6c4",
                    "base-100": "#29253b",
                    "base-200": "#221f32",
                    "base-300": "#1c1929",
                    "base-content": "#cfcfd5",
                    "info": "#bef264",
                    "info-content": "#0d1403",
                    "success": "#38bdf8",
                    "success-content": "#010d15",
                    "warning": "#fb923c",
                    "warning-content": "#150801",
                    "error": "#ef4444",
                    "error-content": "#140202",
                },
            },
        ],
    },

    plugins: [
		forms,
		require("daisyui")
	],
};
