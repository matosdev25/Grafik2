/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        queering: ["Queering", "sans-serif"],
        gilroy: ["Gilroy", "Inter", "sans-serif"],
      },
      colors: {
        teal: {
          50:  '#e6f0eb',
          100: '#c0d9cc',
          200: '#8fba9e',
          300: '#5d9b71',
          400: '#2a7a4a',
          500: '#004225',
          600: '#003119',
          700: '#00200f',
          800: '#001008',
          900: '#000503',
        },
      },
    },
  },
  plugins: [],
}
