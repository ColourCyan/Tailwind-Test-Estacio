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
        'dawn-pink': '#E8ECEC',
      },
      opacity: {
        '80': '0.8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'halant': ['Halant', 'serif'],
        'hammersmith-one': ['Hammersmith One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

