/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F3F6F7',
          100: '#E9EDF0',
          200: '#D4DDE2',
          300: '#BFCDD4',
          400: '#ABBDC6',
          500: '#96ACB8',
          600: '#829CAA',
          700: '#6E8C9D',
          800: '#597B8E',
          900: '#456B81',
          1000: '#3D5A72'
        }
      }
    },
  },
  plugins: [],
}
