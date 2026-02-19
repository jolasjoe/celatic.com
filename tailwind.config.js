/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'leetcode-dark': '#1e1e1e',
        'leetcode-gray': '#282828',
      }
    },
  },
  plugins: [],
}
