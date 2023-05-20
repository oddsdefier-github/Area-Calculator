/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js}",
    "./js/**/*.js",
    "./index.html",
    "./basic.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': ['Roboto']
    }
  },
  plugins: [require('tailwindcss-font-inter')]
}

