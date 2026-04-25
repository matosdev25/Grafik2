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
    },
  },
  plugins: [],
}