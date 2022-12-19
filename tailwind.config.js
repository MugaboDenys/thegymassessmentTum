/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgound : '#072140',
        bluebland : '#3070B3',
        banana : '#F7B11E',
        darkpink : '#B55CA5',
        redyellow : '#EA7237',
        bluelight : "#F0F5FA",
        bluebright : '#8F81EA',
        gradient : 'gradient(to left, rgb(37, 85, 141) 0%, #072140 70%);'
      }
    },
    boxShadow : {
      shadowGallery : 'inset 100px 40px 20px 10px #f8a100'
    },
  },
  plugins: [],
}
