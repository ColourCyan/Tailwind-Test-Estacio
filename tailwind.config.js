/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'bg-color': '#E8ECEC',
        'bg-header': '#0B4A51',
      },
      colors: {
        'btn-color': '#8B5032',
        'hover-color': '#AC8071',
        'dark-teal': '#0B4A51',
        'potter-clay': '#8B5032',
        'rose-white': '#FFF6F1',
      },
      opacity: {
        '80': '0.8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'halant': ['Halant', 'serif'],
        'hammersmith-one': ['Hammersmith One', 'sans-serif'],
      },
      screens: {
        'sm': {'max': '640px'},
        'md': {'max': '768px'},
        'lg': {'max': '1024px'},
        'xl': {'max': '1280px'},
        '2xl': {'max': '1536px'},
      },
    },
  },
  plugins: [],
}

