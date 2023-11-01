/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      primary:"Montserrat"
    },
    backgroundColor:{
      primary:"#2e2f34"
    }
  },
  plugins: [],
}