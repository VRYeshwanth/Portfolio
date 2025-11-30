/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "fade-in": {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
            animation: {
                "fade-in-200": "fade-in 1s ease-in 200ms",
                "fade-in-300": "fade-in 1s ease-in 300ms",
                "fade-in-400": "fade-in 1s ease-in 400ms",
                "fade-in-500": "fade-in 1s ease-in 500ms",
                "fade-in-600": "fade-in 1s ease-in 600ms",
                "fade-in-700": "fade-in 1s ease-in 700ms",
            },
        },
    },
    plugins: [],
};
