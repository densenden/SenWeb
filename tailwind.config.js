/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        senMidnight: '#1A2E40',
        senDeepBlue: '#023859',
        senSlate: '#364C59',
        senClay: '#BF947A',
        senSkin: '#F2CCB6',
        senOxide: '#732727',
        senRust: '#BF391B',
        senBark: '#4C2929',
        senBurnt: '#BF3617'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        display: ['"Bodoni Moda"', 'serif']
      },
      animation: {
        'variable-text': 'variable-text 2s ease-in-out infinite',
      },
      keyframes: {
        'variable-text': {
          '0%, 100%': { fontVariationSettings: '"wght" 400' },
          '50%': { fontVariationSettings: '"wght" 700' },
        }
      }
    },
  },
  darkMode: 'media',
  plugins: [],
} 