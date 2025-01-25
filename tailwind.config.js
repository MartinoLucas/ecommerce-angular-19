/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    './src/**/*.{html,ts}', // Archivos de Angular
    './node_modules/preline/preline.js', // Archivos de Preline UI
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('preline/plugin'), // Plugin de Preline UI
  ],
};


