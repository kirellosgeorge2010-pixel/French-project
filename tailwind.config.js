/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        game: {
          darkest: '#020617',
          dark: '#050c26',
          panel: '#09153d',
          card: '#0c1b4e',
          border: '#1e3a8a',
          gold: '#facc15',
          goldLight: '#fef08a',
          goldDark: '#ca8a04',
          accent: '#38bdf8',
          correct: '#10b981',
          correctGlow: '#34d399',
          wrong: '#ef4444',
          wrongGlow: '#f87171',
          selected: '#f59e0b',
          selectedGlow: '#fbbf24',
        }
      },
      fontFamily: {
        game: ['Montserrat', 'Inter', 'sans-serif'],
        display: ['Cinzel', 'Trajan Pro', 'serif'],
      },
      animation: {
        'pulse-fast': 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulseGlow 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'spotlight': 'spotlight 8s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(245, 158, 11, 0.4), inset 0 0 10px rgba(245, 158, 11, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(245, 158, 11, 0.8), inset 0 0 18px rgba(245, 158, 11, 0.4)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        spotlight: {
          '0%': { opacity: '0.4', transform: 'scale(1) rotate(-5deg)' },
          '100%': { opacity: '0.8', transform: 'scale(1.15) rotate(5deg)' },
        }
      }
    },
  },
  plugins: [],
}
