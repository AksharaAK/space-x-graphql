/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: {
          dark: "#272727;",
          light: "#ffffff;",
        },
        helper: {
          grey: "#efefef",
          dark: "#040301",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
