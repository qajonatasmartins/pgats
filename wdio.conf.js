export const config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    port: 4723,
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/**/**/com_page_objects/*.js'
    ],
    // ============
    // Capabilities
    // ============
    maxInstances: 10,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'NVBR2B0055',
        'appium:app': './app/lojinha-hibrida.apk',
        'appium:platformVersion': '8.0',
        'appium:appPackage': 'com.example.lojinha',
        'appium:appActivity': 'com.example.lojinha.MainActivity',
        'appium:automationName': 'UiAutomator2'
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
    services: ['appium'],
    framework: 'mocha',
    reporters: [['allure', {
        outputDir: 'report/android/',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.saveScreenshot(`./report/android/${test.title}-retries${retries.attempts}.png`)
    },
}
