import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
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
      },
      animation: {
        'beat': 'beat 1s infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-out': 'slide-out 0.5s ease-in',
      },
      keyframes: {
        beat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
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