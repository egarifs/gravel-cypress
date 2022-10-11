import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"https://gravel.co.id/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
