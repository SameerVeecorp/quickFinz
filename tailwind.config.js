/* prettier-ignore */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'montserrat' : "Montserrat, sans-serif"
    },
    colors: {
      'text-color': '#052F5F',
      'blue': '#005cde',
      'orange' : '#FF0000',
      'dark-orange': '#C83809',
      'bg-2': '#FBFBFB',
    },
  },
  plugins: [],
}