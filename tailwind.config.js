/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        hue: 'hsl(228, 47%, 45%)',
        col: 'hsl(228, 45%, 44%)',
        darkblue: 'hsl(218, 44%, 22%)',
        grayishblue: 'hsl(220, 15%, 55%)',
        midWhite: 'hsl(0, 0%, 100%)',
        Lightgray: 'hsl(212, 45%, 89%)'
      },
      fontSize: {
        mid: '14px'
      }
    },
  },
  plugins: [],
}

