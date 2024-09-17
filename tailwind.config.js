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
        mainBackground: "#0d1421",
        modalBackground: "#152033",
      },
      colors: {
        borderColor: "#323546",
        secondary: "#9ba2b5"
      },
      padding: {
        borderPadding: "1.25rem"
      }
    },
  },
  plugins: [],
};