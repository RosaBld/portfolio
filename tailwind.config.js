import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

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
      gradientColorStops: {
        'cyan': '#00FFFF',
        'blue': '#0000FF',
        'violet': '#8F59F6',
        'fuchsia': '#FF00FF',
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}