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
      "text": "#FAFFFF",
      "background": "#010A0C",
      "primary": "#C42015",
      "secondary": "#001013",
      "accent": "#E13C1F"
    },
  },
  plugins: [],
}