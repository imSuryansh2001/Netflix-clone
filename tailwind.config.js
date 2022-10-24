/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'nb': "url('/src/Components/assets/netflixBackground.jpg')",
        'eleven': "url('/src/Components/assets/eleven.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-textshadow')
  ],
}
