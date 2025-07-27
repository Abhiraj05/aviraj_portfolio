/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonYellow: '#D9FF00',  // Neon yellow
        darkBlack: '#000000',   // Black
        lightGray: '#AAAAAA',   // Light gray
      },
    },
  },
  plugins: [],
}
