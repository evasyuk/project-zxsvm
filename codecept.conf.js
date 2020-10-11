/* eslint-disable */
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './codecept/**/*.ftest.js',
  output: './codecept/failed',
  helpers: {
    Playwright: {
      url: 'http://localhost:8080/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './codecept/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'project-zxsvm',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}