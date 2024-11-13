/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Gotham', 'sans-serif'],
      serif: ['Playfair Display', 'serif']

    }
  },
  plugins: [require('tailwindcss-primeui')],
  darkMode: 'selector'
}

