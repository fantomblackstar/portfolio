import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xs: '23.438rem', // '375px'
      sm: '26.563rem', // '425px'
      m: '36.875rem', // '590px'
      md: '48rem', // '768px'
      lg: '64rem', // '1024px'
      xl: '90rem', // '1440px'
    },
    fontFamily: {
      alegreya: ['Lato', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
    fontSize: {
      xxs: ['0.5rem', '0.75rem'],
      xs: ['0.75rem', '0.75rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  plugins: [],
};
export default config;
