// eslint-disable-next-line @typescript-eslint/no-require-imports
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    baseUrl: "http://localhost:5173/",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});