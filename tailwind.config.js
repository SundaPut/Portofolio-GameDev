
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: '#5cc8ff',
          purple: '#b07cff',
          pink: '#ff67e7'
        },
        space: {
          dark: '#0b0f1a',
          dim: '#121826',
          card: '#0e1525'
        }
      },
      boxShadow: {
        neon: '0 0 20px rgba(92, 200, 255, 0.45), 0 0 40px rgba(176, 124, 255, 0.25)',
        soft: '0 10px 30px rgba(0,0,0,0.4)'
      }
    },
  },
  plugins: [],
}
