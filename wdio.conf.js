let mochaTimeout = 100000;

var config = {
    // WebdriverIO will automatically configure the host based on the value of the user and key
    // See WebdriverIO's cloudservice.md document for more info.
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,

    /* Optional maxInstances value limits the number of child processes spawned.
    * Each capability defined gets a child process so that tests automatically run in parallel
    * Refer to for more info https://github.com/webdriverio/webdriverio/issues/205#issuecomment-183345085
    */
    maxInstances: 20,
    capabilities: [
        {browserName: 'firefox', platform: 'Windows 10', version: '41.0', tunnelIdentifier: 'fakebusiness'},
        {browserName: 'chrome', platform: 'OS X 10.10', version: '45.0', tunnelIdentifier: 'fakebusiness'},
        {browserName: 'chrome', platform: 'Windows 8.1', version: '55', tunnelIdentifier: 'fakebusiness'}
    ],

    specs: [
        './tests/specs/**/*.js'
    ],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    reporters: ['spec'], // Optional with wdio-spec-reporter
    // waitforTimeout: 10000,
    connectionRetryTimeout: 10 * 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: mochaTimeout
    }
}

exports.config = config
