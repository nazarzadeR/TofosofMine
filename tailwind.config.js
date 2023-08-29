/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'dark-primary': '#303642',
                'dark-secondary': '#3D4552',
                'dark-warning': '#F8AA4C',
                'dark-danger': ' #FC7461',
                'dark-info': '#62B4FE',
                'dark-text': '#F0F4F6',
                'dark-accent': '#747883',
                'dark-success': '#B2D198',
                'light-primary': '#F4F6F8',
                'light-secondary': '#FFFFFF',
                'light-warning': '#FFCD2F',
                'light-danger': '#F44334',
                'light-info': '#4551E5',
                'light-text': '#414D81',
                'light-accent': '#A4ACC4',
                'light-success': '#70b14f',
            },
        },
        fontFamily: {
            rob: ['Roboto', 'sans-serif'],
        },
    },
    plugins: [
        require('tailwindcss-no-scrollbar'),
        require('@kamona/tailwindcss-perspective'),
    ],
}
