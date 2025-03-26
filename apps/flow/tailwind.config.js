/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx,mdx}',
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
        senBurnt: '#BF3617',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['var(--font-rubik)'],
        display: ['var(--font-bodoni-moda)']
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