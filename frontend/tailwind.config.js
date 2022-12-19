/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
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
    colors: {
      black: "#404040",
      white: "#FFFFFF",
      pink: "#C91961",
      darkPink: "#851342",
    },
  },
  plugins: [],
};
