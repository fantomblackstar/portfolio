/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: { 'orange-1': '#FF8660', 'violet-1': '#9A33FF' },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#161513',
        secondary: '#8491a0',
        card: 'rgb(39 39 42 / 0.9)',
        'card-hover': '#3f3f46',
        'gradient-primary': 'bg-gradient-to',
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        primary: '#ffffff',
        secondary: '#e6e6e6',
        tertiary: 'rgb(163 163 163 / var(--tw-text-opacity, 1))',
      }),
      borderColor: (theme) => ({ ...theme('colors'), primary: '#333333', secondary: '#4d4d4d' }),
      backgroundImage: { 'gradient-primary': ' bg-gradient-to-r from-cyan-500 to-blue-500' },
      container: {
        center: true,
        padding: '1rem',
        screens: { sm: '100%', md: '100%', lg: '900px', xl: '1100px' },
      },
      animation: {
        'loop-slider-l': 'loop-slider-l 50s linear infinite',
        'loop-slider-r': 'loop-slider-r 50s linear infinite',
        aurora: 'aurora 60s linear infinite',
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
        'loop-slider-l': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'loop-slider-r': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
