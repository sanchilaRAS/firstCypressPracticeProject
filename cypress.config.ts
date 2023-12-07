import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      baseUrl: 'http://localhost:59181/__/#/specs'

      // Set the configuration for various test files
      // You can include/exclude specific test files or folders
      integrationFolder: 'cypress/integration'
    
      // Configure browsers for testing
      browsers: ['chrome']

      viewportWidth: 1280
      viewportHeight: 720
    
      typescript: {
        // TypeScript configuration goes here
        // Example:
        tsconfig: 'tsconfig.json'
      }
    
      
    },
  },
});

