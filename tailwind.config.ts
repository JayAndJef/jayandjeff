const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts, tsx}", "./utils/*.ts"],
    darkMode: "class",
    theme: {},
    plugins: [require("@tailwindcss/aspect-ratio"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}