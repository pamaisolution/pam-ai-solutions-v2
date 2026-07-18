/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#71C9CE',
        'primary-hover': '#5DBDC4',
        'secondary': '#A6E3E9',
        'surface': '#CBF1F5',
        'bg': '#E3FDFD',
        'ink': '#103B44',
        'ink-muted': '#355C65',
        'accent': '#71C9CE',
        'accent-soft': '#A6E3E9',
      },
      fontFamily: {
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #E3FDFD 0%, #CBF1F5 100%)',
        'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))',
      },
      boxShadow: {
        premium: '0 10px 30px rgba(113, 201, 206, 0.18)',
        glass: '0 8px 32px rgba(113, 201, 206, 0.12)',
      },
      borderRadius: {
        'btn': '16px',
        'card': '24px',
        'input': '16px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
