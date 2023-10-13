/** @type {import('tailwindcss').Config} */

import  withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#006285',
        gold: '#CBC04F',
        tertiary: {
          100: '#FFFFFF',
          200: '#E8E8E8',
          300: '#EDEDED',
          400: '#B2B2B2',
          500: '#969696',
        }
      },
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Roboto', 'sans-serif'],
      },
      screens: {
        '3xl': '1922px',
        'widescreen': { 'raw': 'min-aspect-ratio: 3/2'},
        'tailscree:': { 'raw': 'min-aspect-ratio: 1/2'},
      },
      keyframes: {  
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
});