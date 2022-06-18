/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#fff',
      'scarlet': '#ed6a5a',
      'brandGreen': 'rgba(10, 135, 84, 0.5)',
      'successGreen': 'rgba(10, 135, 84)',
      'blue': '#508ca4',
      'darkGray': '#e2e2e2',
      'darkerGray': '#b2b2b2',
    },
    fontFamily: {
    },
    fontWeight: {
      normal: '400',
      medium: '600',
      bold: '700',
      bolder: '900',
    },
    extend: {
      fontFamily: {
        'sans': ['Nunito'],
      },
      spacing: {
      },
      borderRadius: {
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0, zIndex: 1000 },
          '20%, 80%': { opacity: 1, zIndex: 1000 },
          '100%': { opacity: 0, zIndex: 1000 },
        },
      },
      animation: {
        fade: 'fade 5s',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addBase, theme }) => {
      addComponents({
        '.example': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
      });
      addBase({
        'h4': { fontSize: '32px' },
        'h5': { fontSize: '24px' },
        'h6': { fontSize: '18px' },
      });
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
