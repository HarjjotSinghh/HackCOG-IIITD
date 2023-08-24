/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{html,js,jsx,tsx}',
    './components/**/*.{html,js,jsx,tsx}',
    "./src/**/*.{html,js,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      "text": "#2e3e57",
      "background": "#fbfdff",
      "primary": "#C8FFD4",
      "secondary": "#B8E8FC",
      "accent": "#A4A2F9"
    },
  },
  plugins: [],
}