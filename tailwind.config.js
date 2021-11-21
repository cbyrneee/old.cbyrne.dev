module.exports = {
    mode: "jit",
    purge: {
        content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
        safelist: [
            "bg-red-500",
            "bg-yellow-500",
            "bg-green-500",
            "hover:bg-red-500/50",
            "hover:bg-yellow-500/50",
            "hover:bg-green-500/50"
        ]
    },
    darkMode: false, // or "media" or "class"
    theme: {
        extend: {
            colors: {
                "window": "#FEF6F5",
                "background": "#F8D0CD"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/line-clamp")
    ],
}
