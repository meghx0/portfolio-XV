/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      colors: {
        cream: {
          50: '#fefdf9',
          100: '#fbf8f0',
          200: '#f5f0e0',
          300: '#ece4cc',
          400: '#ddd0a8',
        },
        ink: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
          500: '#5a5a5a',
          400: '#7a7a7a',
          300: '#9a9a9a',
        },
        lime: {
          400: '#c5f04a',
          500: '#a3e635',
          600: '#84cc16',
        },
        coral: {
          400: '#ff8a65',
          500: '#ff5722',
          600: '#e64a19',
        },
        sky: {
          400: '#5fb3e8',
          500: '#2da4e8',
        },
        sun: {
          400: '#fde047',
          500: '#facc15',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shadow-pulse': {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-2px,-2px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        marquee: 'marquee 35s linear infinite',
        'shadow-pulse': 'shadow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
