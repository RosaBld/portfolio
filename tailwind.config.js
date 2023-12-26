/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        '6': '6 6 0%',
      },
      fontFamily: {
        'custom': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}