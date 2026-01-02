/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { 
          DEFAULT: "#550000", 
          50: "#f9eaea", 
          100: "#f2d4d4", 
          200: "#e6aaaa", 
          300: "#d98080", 
          400: "#cc5555", 
          500: "#a64444", 
          600: "#802e2e", 
          700: "#5c1f1f", 
          800: "#3a1111", 
          900: "#1a0505", 
        },
        oak: "#decaab",
        secondary: "#ffffff",
      }
    },
  },
  plugins: [],
}