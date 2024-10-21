/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'blue-50': 'rgba(43, 120, 227, 0.8)'
      }
    },
  },
  plugins: [],
}