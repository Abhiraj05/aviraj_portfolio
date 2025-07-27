/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansserif: ['Montserrat', 'sans-serif'],
      },
      colors: {
        neonYellow: '#D9FF00',
        darkBlack: '#000000',
        lightGray: '#AAAAAA',
      },
    },
  },
  plugins: [],
}
