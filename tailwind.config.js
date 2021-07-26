module.exports = {
  purge: {
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkMode: "class", // false, 'media' or 'class'
  theme: {
    extend: {
      colors: {
        reader: {
          "50": "#f7f9fb",
          "100": "#e3f0fd",
          "200": "#c5d8fb",
          "300": "#9eb4f5",
          "400": "#7d8cee",
          "500": "#6667e9",
          "600": "#544ade",
          "700": "#4038c0",
          "800": "#2c2693",
          "900": "#18185e",
        },
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
  plugins: [],
};
