/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'blue': '#4EA8DE',
        'blueDark': '#1E6F9F',

        'purple': '#8284FA',
        'purpleDark': '#5E60CE',

        'danger': '#E25858',
      }
    },
  },
  plugins: [],
}

