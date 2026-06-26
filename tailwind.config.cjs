/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                forest: {
                    50: "#f0f7f4",
                    100: "#dceee5",
                    200: "#bbddcc",
                    300: "#8cc5aa",
                    400: "#5aa583",
                    500: "#3b8865",
                    600: "#2d6a4f",
                    700: "#22543d",
                    800: "#1a4332",
                    900: "#143224",
                    950: "#0c1f16",
                },
                neutral: {
                    50: "#f4f7f5",
                    100: "#ebf1ee",
                    200: "#d7e2dc",
                    300: "#b9c9c0",
                    400: "#93a79d",
                    500: "#71867c",
                    600: "#576b62",
                    700: "#44544d",
                    800: "#33413a",
                    900: "#17201c",
                    950: "#0e1310",
                },
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: 0, transform: "translateY(20px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
                "float": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "pulse-slow": {
                    "0%, 100%": { opacity: 0.15, transform: "scale(1)" },
                    "50%": { opacity: 0.3, transform: "scale(1.05)" },
                },
            },
            animation: {
                "fade-in": "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "float": "float 6s ease-in-out infinite",
                "pulse-slow": "pulse-slow 8s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
