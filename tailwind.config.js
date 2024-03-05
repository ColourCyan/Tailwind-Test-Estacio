/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'casita': "url('/img/bg-image.png')",
    },
  },
  plugins: [],
}
}
