/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#161513',
        secondary: '#8491a0',
        card: '#2a2a2a',
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
    },
  },
  plugins: [],
};
