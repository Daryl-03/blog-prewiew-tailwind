/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        "figtree" : ["FigTree", "sans-serif"]
      },
      // boxShadow: {
      //   "black-bottom-right": "2",
      // },
    },
  },
  plugins: [],
}

