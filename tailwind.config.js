/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js}", "./index.html"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      colors: {
        "logo-main": "#9b0404",
      },
      fontFamily: {
        main: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
