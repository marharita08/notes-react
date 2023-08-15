/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#c7eac7",
        "light-green":"#ecf8ec",
      },
      width: {
        "19/20": "95%",
        "px-400": "400px",
      },
      height: {
        "px-550": "550px",
      },
      minHeight: {
        "px-40": "40px",
      },
    },
  },
  plugins: [],
}
