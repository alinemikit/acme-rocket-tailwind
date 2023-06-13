/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc',
        }
      },
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      },
      keyframes: {
        'open-menu': {
          '0%': { tranform: 'scaleY(0)' },
          '80%': { tranform: 'scaleY(1.2)' },
          '100%': { tranform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s easy-in-out forwards',
      }
    },
  },
  plugins: [],
}

