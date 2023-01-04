/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#404040",
      pink: "#C91961",
      darkPink: "#851342",
      indigo: "#4338ca",
      glass: "rgba(255, 255, 255,0.25)",
      brown: "rgb(30, 30, 17)",
      indigo: "#6d28d9",
      grey: "#D9D9D9"

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
