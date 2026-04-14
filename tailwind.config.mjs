/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e2c97e',
          dark: '#9e7c30',
        },
        charcoal: '#1a1a1a',
        'off-white': '#f8f6f2',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
