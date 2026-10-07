/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#1e6feb',
          600: '#1558c7',
          700: '#12479f',
          800: '#123a7d',
          900: '#0a1e3c',
          950: '#071527',
        },
        navy: '#0a1e3c',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -12px rgba(10, 30, 60, 0.18)',
        card: '0 10px 40px -12px rgba(10, 30, 60, 0.10)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        float: 'float 5.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
