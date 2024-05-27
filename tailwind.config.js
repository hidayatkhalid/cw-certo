/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-custom': '#4335DE',
        'yellow-custom': '#FFC247',
      },
    },
  },
  plugins: [],
}

