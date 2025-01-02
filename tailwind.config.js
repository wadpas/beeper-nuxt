/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        secondary: '#EA580C',
        black: '#020617',
        white: '#F8FAFC',
      },
    },
  },
  plugins: [],
}
