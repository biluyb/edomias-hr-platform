/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          900: '#0a140d',
          800: '#16261a',
          700: '#215b30', // Primary
          600: '#2d7a41',
          100: '#f1f4f1',
          50: '#f9fbf9',
        },
        gold: {
          DEFAULT: '#d4af37', // Accent
          light: '#e6c65d',
          dark: '#b28e2a',
        },
        custom: {
          border: 'var(--border)',
          text: 'var(--text-main)',
          muted: 'var(--text-muted)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
