/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0066cc',
          dark: '#003d7a',
          light: '#e6f2ff',
        },
        text: {
          main: '#1a1a1a',
          secondary: '#555555',
          light: '#999999',
        },
        border: {
          light: '#e0e0e0',
        },
      },
    },
  },
  plugins: [],
};
