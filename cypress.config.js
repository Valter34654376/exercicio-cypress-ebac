const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.spec.js",
    baseUrl: "https://ebac-agenda-contatos-tan.vercel.app/",
    setupNodeEvents(on, config) {
      // node events, se precisar
    },
  },
});
