/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'web-background': "url(/images/snake_and_ladder_background.jpg)"
      }
    },
  },
  plugins: [],
}