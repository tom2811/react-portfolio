/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pixelated: ['"Pixelify Sans"', 'monospace'],
      },
      keyframes: {
        'slide-left': {
          '0%, 100%': { transform: 'translateX(-30px)' },
          '50%': { transform: 'translateX(30px)' }
        },
        'slide-right': {
          '0%, 100%': { transform: 'translateX(30px)' },
          '50%': { transform: 'translateX(-30px)' }
        }
      },
      animation: {
        'slide-left': 'slide-left 3s linear infinite',
        'slide-right': 'slide-right 3s linear infinite'
      }
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant('landscape', '@media screen and (orientation: landscape) and (max-height: 500px) and (min-height: 200px) and (max-width: 915px)');
    },
  ],
}
