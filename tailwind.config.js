const colors = require("tailwindcss/colors")

module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media",
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            blue: colors.blue,
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            accent: {
                DEFAULT: "#FF2C55",
                hover: "#FFA5AB",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
