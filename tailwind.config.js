/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
