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
        'h6': { fontSize: '18px' },
      });
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
