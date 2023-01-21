/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-white': '#FAFAFF',
        'my-green1': '#10654E',
        'my-green2': '#D7FCD4',
        'my-orange': '#FF9B42',
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}