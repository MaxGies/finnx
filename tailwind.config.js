/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-panther": "#000000",
        "persian-cat": "#8B8B8B",
        "grey-wolf": "#C7C7C7",
        "polar-bear": "#F0F0F0",
        "white-rabbit": "#FFFFFF",
        bubblegum: "#4C71F1",
        blueberry: "#AFD4FF",
        "cotton-candy": "#DEEDFF",
        avocado: "#00AF70",
        mint: "#D1FFEF",
        strawberry: "#F34336",
        sherbet: "#ED6238",
        pumpkin: "#FF9D2B",
        caramel: "#FFEEDB",
        vannila: "#FFF6EC",
        cheesecake: "#FFEDED",
        sweets: "#FFD8CC",
        denied: "#D9D9D9",
      },
      boxShadow: {
        "custom-shadow": " 0px 2px 4px 0px #00000014",
      },
    },
  },
  plugins: [],
});
