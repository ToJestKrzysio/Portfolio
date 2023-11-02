/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'primary': {
                    DEFAULT: '#131221',
                    50: '#B9B6D8',
                    100: '#ADA9D1',
                    200: '#938EC2',
                    300: '#7A74B4',
                    400: '#6159A6',
                    500: '#514B8B',
                    600: '#423D71',
                    700: '#322E56',
                    800: '#23203C',
                    900: '#131221',
                    950: '#09080F'
                },
            }
        },
    },
    plugins: [],
};
