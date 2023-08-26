/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-primary': '#222831',
                'dark-secondary': ' #393e46',
                'dark-warning': '#f0a500',
                'dark-danger': ' #f76c6c',
                'dark-info': '#00adb5',
                'dark-text': '#f2f4f7',
                'dark-accent': '#ebecf1',
                'dark-success': '#259f6c',
                'light-primary': '#fefdfc',
                'light-secondary': '#bcbbb6',
                'light-warning': '#ec8a09',
                'light-danger': '#d64638',
                'light-info': '#417fe7',
                'light-text': '#232115',
                'light-accent': '#b1b0ab',
                'light-success': '#70b14f',
            },
        },
    },
    plugins: [
        require("tailwindcss-no-scrollbar"),
        require("@kamona/tailwindcss-perspective"),
    ],
}
