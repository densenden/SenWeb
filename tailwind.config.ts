import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
        'variable-text': 'variableText 8s infinite'
      },
      keyframes: {
        variableText: {
          '0%, 100%': { fontVariationSettings: '"wght" 400, "ital" 0' },
          '50%': { fontVariationSettings: '"wght" 600, "ital" 8' }
        }
      }
    }
  },
  plugins: [],
}

export default config 