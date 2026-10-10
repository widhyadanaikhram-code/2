/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        base: '#FAFAF7',
        primary: '#0A0F1D',
        electric: '#2563EB',
        vividOrange: '#FF5722',
        brightYellow: '#FFD600',
        coral: '#FF6B6B',
        freshLime: '#10B981',
      },
    },
  },
  plugins: [],
};


