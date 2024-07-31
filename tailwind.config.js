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
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "25v": "25vh",
        "30v": "30vh",
        "35v": "35vh",
        "40v": "40vh",
        "50v": "50vh",
        "55v": "55vh",
        "60v": "60vh",
        "65v": "65vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
  plugins: [],
}

