/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {

        primary: {
          DEFAULT: '#303445', // Main dominant color
          light: '#313546', // Slightly lighter variation
          dark: '#2E3343', // Slightly darker variation
        },
        secondary: {
          DEFAULT: '#C2A768', // Secondary color
          light: '#2F3444',
          dark: '#2C3041',
        },
        accent: {
          DEFAULT: '#2E3245', // Accent color for highlights
          subtle: '#313345', // Subtle variation
        },
        neutral: {
          DEFAULT: '#2F3444', // For borders, backgrounds, etc.
          white: '#FFFFFF', // White for text and highlights
        },
      },
    },
  },
  plugins: [],
};