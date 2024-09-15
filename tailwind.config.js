/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },
      backgroundColor: {
        mainBackground: "#0d1421"
      }
    },
  },
  plugins: [],
};