/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Signature Midnight (replaces navy)
        navy: {
          50: '#f0f1f4',
          100: '#d8dce5',
          200: '#b4bccf',
          300: '#8a97b5',
          400: '#5f7199',
          500: '#3d5280',
          600: '#2d3f66',
          700: '#1f2e4d',
          800: '#152038',
          900: '#0E1A2E',
          950: '#0B1426',
        },
        // Warm Brass (replaces gold)
        gold: {
          50: '#fdf9f3',
          100: '#faf0de',
          200: '#f3ddb8',
          300: '#e8c48a',
          400: '#D4A85C',
          500: '#C9944A',
          600: '#B07A34',
          700: '#8E6128',
          800: '#724E20',
          900: '#5A3D1A',
        },
        // Warm ivory tones
        ivory: {
          50: '#FDFCFA',
          100: '#F8F6F2',
          200: '#F0EDE6',
          300: '#E5E0D6',
          400: '#D5CFC2',
          500: '#C0B8A8',
        },
        // Parchment
        parchment: {
          50: '#FDFBF7',
          100: '#F7F4EE',
          200: '#F0EAE0',
          300: '#E5DCCE',
          400: '#D5C7B3',
        },
        // Sand
        sand: {
          50: '#FAFAF8',
          100: '#F3F1EC',
          200: '#E8E4DC',
          300: '#D8D1C4',
          400: '#C5BBA8',
        },
        // Terracotta accent (NEW)
        terra: {
          400: '#D4735E',
          500: '#C1614A',
          600: '#A5503D',
          700: '#863F30',
        },
        // Deep Forest (NEW - for contrast sections)
        forest: {
          800: '#1A3A2A',
          900: '#0F2418',
          950: '#091810',
        },
        // Legacy maroon
        maroon: {
          500: '#9b1c31',
          600: '#841527',
          700: '#6e1120',
        },
        // Mist (background)
        mist: {
          50: '#F7F8FA',
          100: '#F0F2F5',
          200: '#E4E7EC',
          300: '#D1D5DC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 20, 38, 0.06), 0 2px 6px -1px rgba(11, 20, 38, 0.04)',
        'card': '0 10px 30px -5px rgba(11, 20, 38, 0.08), 0 4px 12px -2px rgba(11, 20, 38, 0.03)',
        'lift': '0 20px 35px -8px rgba(11, 20, 38, 0.12), 0 8px 16px -4px rgba(11, 20, 38, 0.04)',
        'glow': '0 0 25px rgba(201, 148, 74, 0.25)',
        'hero': '0 30px 60px -15px rgba(11, 20, 38, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'ken-burns': 'kenBurns 25s ease-in-out infinite alternate',
        'float-indicator': 'floatIndicator 2s ease-in-out infinite',
        'word-reveal': 'wordReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'width-grow': 'widthGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
        floatIndicator: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
        wordReveal: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        widthGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      }
    },
  },
  plugins: [],
}
