/*
 * @type {import('tailwindcss').Config}
 */

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
        darkPurple: '#8B5CF6',
        // orange: '#FFDEB4',
        yellow: '#FDF7C3',
        white: '#FFFFFF',
        black: '#000000',
        offWhite: '#F2F2F2',
      },

      maxWidth: {
        content: '1300px',
      },

      fontSize: {
        '4xl': '2.25rem',
        '2xl': '1.875rem',
        'lg': '1rem',
        'sm': '0.9rem',
      },
    },
  },
  plugins: [],
};
