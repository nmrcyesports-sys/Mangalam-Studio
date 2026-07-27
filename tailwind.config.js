/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          black: '#121212',
          gold: '#D4AF37',
          goldHover: '#AA8C2C',
          charcoal: '#1E1E1E',
          textMain: '#F5F5F5',
          textMuted: '#A3A3A3',
        }
      },
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        montserrat: ['var(--font-montserrat)'],
      }
    },
  },
  plugins: [],
};

