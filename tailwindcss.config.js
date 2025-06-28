/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#007bff',
          900: '#005566',
        },
        red: {
          500: '#dc3545',
        },
      },
    },
  },
  plugins: [],
}