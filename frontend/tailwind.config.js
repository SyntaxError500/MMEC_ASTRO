/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space': {
          'deep': '#0a0a0b',
          'dark': '#111116', 
          'purple': '#1a0d2e',
          'blue': '#16213e',
          'cyan': '#0f3460',
          'teal': '#0e4b99',
          'neon-blue': '#00d4ff',
          'neon-purple': '#8b5cf6',
          'neon-pink': '#ff006e',
          'neon-green': '#39ff14',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'twinkle': 'twinkle 2s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'supernova': 'supernova 4s ease-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.6',
            boxShadow: '0 0 20px theme("colors.space.neon-blue"), 0 0 40px theme("colors.space.neon-blue"), 0 0 60px theme("colors.space.neon-blue")',
          },
          '50%': {
            opacity: '1',
            boxShadow: '0 0 30px theme("colors.space.neon-blue"), 0 0 60px theme("colors.space.neon-blue"), 0 0 90px theme("colors.space.neon-blue")',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'supernova': {
          '0%': { 
            transform: 'scale(0.8) rotate(0deg)',
            opacity: '0.6',
          },
          '50%': { 
            transform: 'scale(1.2) rotate(180deg)',
            opacity: '1',
          },
          '100%': { 
            transform: 'scale(0.8) rotate(360deg)',
            opacity: '0.6',
          },
        },
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0a0a0b 0%, #1a0d2e 25%, #16213e 50%, #0f3460 75%, #0e4b99 100%)',
        'nebula-gradient': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.3) 0%, rgba(0, 212, 255, 0.2) 35%, rgba(14, 75, 153, 0.1) 70%, transparent 100%)',
      },
      fontFamily: {
        'space': ['Orbitron', 'monospace'],
      },
    },
  },
  plugins: [],
}