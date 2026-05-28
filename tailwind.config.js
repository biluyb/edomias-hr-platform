/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#8DC63F',
        'green-dark': '#6fa82e',
        'green-light': '#a8d96a',
        'green-pale': '#f0f9e3',
        orange: '#E87722',
        'orange-dark': '#c5611a',
        'orange-pale': '#fff4ec',
        dark: '#1a1a2e',
        dark2: '#2d3748',
        gray: '#718096',
        'gray-light': '#a0aec0',
        border: '#e2e8f0',
        bg2: '#f8fafc',
        bg3: '#f1f5f9',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
    },
  },
  plugins: [],
};
