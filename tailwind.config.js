/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        brand: "'Dancing Script', cursive",
        menu: "'Poppins', sans-serif",
        hero: "'Noto Serif Khitan Small Script', sans-serif",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
    },
  },
  plugins: [],
}
