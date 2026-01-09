/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#002B80',
        'primary-blue': '#1476BA',
        'text-primary': '#1A1919',
        'text-secondary': '#2F363B',
        'bluish-gray': '#454F63',
      }
    },
  },
  plugins: [],
}

