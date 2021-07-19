const colors = require("tailwindcss/colors")

module.exports = {
    mode: "jit",
    purge: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media",
    theme: {
        screens: {
            why: "280px",
            se: "320px",
            i8: "375px",
            i8plus: "414px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
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
                DEFAULT: "#828AE0",
                hover: "#9A9EC8",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
