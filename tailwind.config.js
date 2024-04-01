/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        main: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#00F2B2",
          secondary: "#18CCD9",
          100: "#ffffff",
          200: "#FFFBF9",
          300: "#f9f3f0",
          700: "#000000",
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
}
