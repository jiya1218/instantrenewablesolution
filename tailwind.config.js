/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        solar: {
          amber: '#FFA91F',
          gold: '#F59E0B',
          orange: '#E65644',
          green: '#10B981',
          emerald: '#059669',
          darkgreen: '#064E3B',
          navy: '#0A1128',
          midnight: '#070C1E',
          slate: '#0F172A',
          card: '#131B36',
          border: '#1E293B',
          lightbg: '#F8FAFC',
          lightcard: '#FFFFFF',
          textMuted: '#64748B',
          textDark: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'glow-green': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-orange': '0 0 25px -5px rgba(230, 86, 68, 0.3)',
        'card-hover': '0 20px 30px -10px rgba(15, 23, 42, 0.08)',
        'card-dark': '0 20px 35px -10px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

