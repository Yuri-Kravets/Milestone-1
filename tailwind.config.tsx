
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1E40AF", // Custom primary color
                secondary: "#FACC15", // Custom secondary color
                red: "#ef4444",
                green: "#10b981",
            },
        },
    },
    mode: "jit",
    plugins: [],
};