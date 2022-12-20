/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#404040",
      pink: "#C91961",
      darkPink: "#851342",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },

    },
  },
  plugins: [],
};
