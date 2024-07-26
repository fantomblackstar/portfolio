/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-1': '#FF8660',
        'violet-1': '#9A33FF',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#161513',
        secondary: '#8491a0',
        card: '#2a2a2a',
        'gradient-primary': 'bg-gradient-to',
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: '#ffffff',
        secondary: '#e6e6e6',
        tertiary: '#cccccc',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        primary: '#333333',
        secondary: '#4d4d4d',
      }),
      backgroundImage: {
        'gradient-primary': ' bg-gradient-to-r from-cyan-500 to-blue-500',
      },
      keyframes: {
        'loop-slider-l': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'loop-slider-r': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'loop-slider-l': 'loop-slider-l 50s linear infinite',
        'loop-slider-r': 'loop-slider-r 50s linear infinite',
      },
    },
  },
  plugins: [],
};
