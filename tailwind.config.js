/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      fontSize: {
      '2xs': "0.625rem"
      },
      height: {
        '128': '32rem'
      },
      colors: {
        'dark': '#333333'
      },
      spacing: {
        '18': '4.5rem'
      }
    },
  },
  plugins: [],
}
