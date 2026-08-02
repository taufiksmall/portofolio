/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#050505',
        ink: '#0A0A0A',
        panel: '#111111',
        primary: '#005BAC',
        accent: '#F5B942',
        text: '#FFFFFF',
        muted: '#D1D5DB',
        subtle: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(0, 91, 172, 0.20)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        grid: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
      },
      animation: {
        'ambient-pulse': 'ambientPulse 10s ease-in-out infinite',
      },
      keyframes: {
        ambientPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
