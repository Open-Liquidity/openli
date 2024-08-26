/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#DCB976',
      'secondary': '#483E2C',
      'backingDark': '#111111',
      'moduleDark': '#35353515',
      'highlightDark': '#272727',
      'subtextDark': '#818181',
      'maintextDark': '#ffffff',
      'brand': '#DCB976',
      'brandBacking': '#DCB97610',
      'backingLight': '#F2F2F2',
      'moduleLight': '#FBFBFB',
      'highlightLight': '#E8E8E8',
      'subtextLight': '#C1C1C1',
      'maintextLight': '#181818',
      'landingSubtext': '#B3B3B3'
    },
  },
  plugins: [],
};
