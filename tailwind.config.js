/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        purple: '#B2A4FF',
        red: '#FFB4B4',
        orange: '#FFDEB4',
        yellow: '#FDF7C3',
      },
      maxWidth: {
        content: '1200px',
      },
      fontSize: {
        '4xl': '2.5rem',
        '2xl': '1.5rem',
        'lg': '1.125rem',
        'sm': '0.875rem',
      },
    },
  },
  plugins: [],
};
