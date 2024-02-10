module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rhr: ['"Alien-Encounters-Solid-Bold"'],
        'rhr-ns': ['"ALien-Encounters-Solid-Italic"'],
      },
      colors: {
        red: { rhr: '#FCCF00' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
