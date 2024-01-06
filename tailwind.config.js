/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}', './*.html'],
  theme: {
    extend: {
      fontFamily: {
        "figtree" : ["FigTree", "sans-serif"]
      },
      colors: {
        'yellow-custom': "hsl(47, 88%, 63%)"
      },
      // boxShadow: {
      //   "black-bottom-right": "2",
      // },
    },
  },
  plugins: [],
}

