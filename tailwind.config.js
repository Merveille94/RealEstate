/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns:{
        '70/30': '70% 30%',
      },
      backgroundImage: {
        'hero-image': "url('/src/assets/images/hero_1.jpg')" 
      },
      colors:{
        'customGreen': '#91b029'
      },
    },
  },
  plugins: [],
}

