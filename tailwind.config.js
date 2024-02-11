module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        rhr: ['"AlienEncountersBold"'],
        'rhr-ns': ['"AlienEncountersItalic"'],
      },
      colors: {
        red: { rhr: '#00D4FC' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
