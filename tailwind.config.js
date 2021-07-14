module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: 'class', // false, 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pastel-orange': '#FECAA3',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  variants: {
    extend: {},

  },
  plugins: [],
}