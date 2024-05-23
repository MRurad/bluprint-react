/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi"],
      },
      // gridTemplateRows: {
      //   // Complex site-specific column configuration
      //   footer: "370px 330px 115px",
      // },
    },
  },
  plugins: [],
};
