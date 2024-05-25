/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#84BF2C',
        secondary: '#594114',
        tertiary: '#F26B1D',
        auxiliar: '#9EBF26',
        customBlue: '#1EB7D9'
      },
      fontFamily: {
        alegreya: ['Alegreya', 'sans-serif']
      }
    }
  },
  plugins: []
}
