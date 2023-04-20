/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {},
    fontFamily: {
      'oleo-script': ['Oleo Script', 'cursive'],
      'raleway': ['Raleway', 'sans-serif'],
    },

    colors:{
      'colorNavBar': '#303030;',
      'colorTextNavbar': '#ffffff;'
    }

  },
  plugins: [],
}

