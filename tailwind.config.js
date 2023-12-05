/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '10rem',
                lg: '4rem',
                xl: '10rem',
                '2xl': '12rem',
            }
        },
        colors: {
            'light': {
                100: '#f8f9fa',
                200: '#e9ecee',
                300: '#dce0e4',
                400: '#cfd4d9',
                500: '#bfc6cd',
                600: '#adb5bd',
                700: '#939ba4',
                800: '#727981',
                900: '#51575e',
                1000: '#353a3f',
                1100: '#212529',
                blue: '#1862ab'
            },
            'dark': {
                100: '#0f1216',
                200: '#171b20',
                300: '#20262c',
                400: '#2c3239',
                500: '#39414a',
                600: '#4a535c',
                700: '#5f6871',
                800: '#778089',
                900: '#949ca3',
                1000: '#b5bbc0',
                1100: '#d8dce0',
                blue: '#62abf3'
            },
        },
        extend: {},
    },
    plugins: [],
}










