const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      megrim: ['"Megrim"', ...defaultTheme.fontFamily.sans],
      montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      trirong: ['"Trirong"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        home: "0px -4px 4px 0px rgba(0, 0, 0, 0.25)",
        button: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
