module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rhr: ['"04B_11__"'],
        'rhr-ns': ['"04B_11__"'],
      },
      colors: {
        red: { rhr: '#FCCF00' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
