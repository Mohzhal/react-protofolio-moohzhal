/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.stroke-2': {
          '-webkit-text-stroke': '2px #bd9f67', // Atur warna stroke di sini
        },
        '.text-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
      },
    )
    },
  ],
};
