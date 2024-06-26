const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: "92odwv",
	adminPassword: "admin",
	testUser: "frappe@example.com",
	defaultCommandTimeout: 20000,
	pageLoadTimeout: 15000,
	video: true,
	videoUploadOnPasses: false,
	viewportWidth: 1920,
	viewportHeight: 1200,
	retries: {
		runMode: 1,
		openMode: 1,
	},
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			return require("./cypress/plugins/index.js")(on, config);
		},
		testIsolation: false,
		baseUrl: "http://test_site_ui:8000",
		specPattern: ["./cypress/integration/*.js", "**/ui_test_*.js"],
	},
});
