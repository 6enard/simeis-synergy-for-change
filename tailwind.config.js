/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Fredoka One', 'cursive'],
        'body': ['Open Sans', 'sans-serif'],
      },
      colors: {
        'cream': '#EDEAE9',
        'orange': '#FFAD33',
        'lime': '#B5E949',
      }
    },
  },
  plugins: [],
};
