/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'fade-in-up': 'fadeInUp 1s ease-out forwards',
                'fade-in-down': 'fadeInDown 1s ease-out forwards',
                'fade-in-up-rotate': 'fadeInUpRotate 1s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-50px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInUpRotate: {
                    '0%': { opacity: '0', transform: 'translateY(50px) rotate(10deg)' },
                    '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
                },
            },
        },
    },
    plugins: [],
}
