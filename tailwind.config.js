/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#550000",
        "primary-light": "maroon",
        oak: "#decaab",
        secondary: "#ffffff",
      }
    },
  },
  plugins: [],
}