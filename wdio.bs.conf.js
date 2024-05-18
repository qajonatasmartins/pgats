export const config = {
    // ====================
    // Runner Configuration
    // ====================
    user: 'jonatasfaria_PxcIdk',
    key: 'Um2HpsysmwvpzTG577qP',
    hostname: 'hub.browserstack.com',
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/**/**/**/*.js'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        'bstack:options': {
            deviceName: 'Samsung Galaxy S22 Ultra',
            platformVersion: '12.0',
            platformName: 'android'
        }
    }],
    // ===================
    // Test Configurations
    // ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['browserstack', {
            app: 'bs://b8dc4dbd1c7f8204c2cc6c54936622118b45cc06',
            testObservability: false,
            testObservabilityOptions: {
                user: '',
                key: ''
            },
            browserstackLocal: false
        }]
    ],
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'report/android/',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.saveScreenshot(`./report/android/${test.title}-retries${retries.attempts}.png`)
    },
}
