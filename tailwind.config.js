/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        primary: "#113393",
        secondary: "#FFED00",
        ebelierGreen: "#00BD13",
        ebelierLight: "#474747",
        ebelierBlack: "#232323",
        ebelierGrey: "#939393",
        ebelierGrey2: "#DCDFE3",
        ebelierRed : "#E02424"
      },
      fontFamily:{
        'sf-pro-text': ['SF Pro Text', 'sans'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

