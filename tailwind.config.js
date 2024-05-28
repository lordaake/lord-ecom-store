module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',
        'primary-dark': '#1E40AF',
        'primary-light': '#60A5FA',
        accent: '#F59E0B',
        darkblue: {
          DEFAULT: '#00008B',
          light: '#4169E1',
          dark: '#000080',
        },
      }, fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'avenir': ['Avenir', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
