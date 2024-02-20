require('dotenv/config')

exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        // capabilities for local browser web tests
        browserName: 'chrome' // or "firefox", "microsoftedge", "safari"
    }],
    logLevel: 'info',
    baseUrl: 'https://www.saucedemo.com',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
