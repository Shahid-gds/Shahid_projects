/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    
  ],
  theme: {
    colors: {
      'primary': '#3D5AA9',
      'secondry': '#838383'
    },
    extend: {
      fontFamily: {

      },
    },
  },
  plugins: [require('flowbite/plugin'), ],
}
