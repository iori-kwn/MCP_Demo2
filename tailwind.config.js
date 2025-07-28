/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'gray-100': '#f5f5f5',
        'gray-200': '#e3e3e3',
        'gray-300': '#d9d9d9',
        'gray-400': '#757575',
        'gray-500': '#767676',
        'gray-800': '#2c2c2c',
        'gray-900': '#1e1e1e',
      },
    },
  },
  plugins: [],
};
