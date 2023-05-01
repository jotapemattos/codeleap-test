/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        firstGray: '#999999',
        secondGray: '#777777',
        thirdGray: '#CCCCCC',
        mainBlue: '#7695EC'
      }
    }
  },
  plugins: []
};
