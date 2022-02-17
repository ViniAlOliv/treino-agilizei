const reporter = require('cucumber-html-reporter')
const options = {
    theme: 'bootstrap',
    jsonDir: 'cypress/reports/cucumber-json', //local onde serão salvas os jsons das features
    output: 'cypress/reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Name":"Demo Automation",
        "Test Environment": "STAGING",
        "Browser": "Electron",
        "Platform": "Windows 10",
        "Executed": "Local"
    }
};
reporter.generate(options)