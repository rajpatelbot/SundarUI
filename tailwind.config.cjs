/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      sky: "#00b7ff",
      cyan: "#00c4cc",
      violet: "#7c2ae8",
      pink: "#88a4d8",
      orange: "#F472B6",
      light: "#f7f8fc",
      lightRed: "#FAF0E6",
    },
    extend: {},
  },
  plugins: [],
};
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  }
}
