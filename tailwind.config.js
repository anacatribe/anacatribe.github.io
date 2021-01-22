const defaultTheme = require("tailwindcss/defaultTheme");

// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Dosis", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["motion-safe"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
