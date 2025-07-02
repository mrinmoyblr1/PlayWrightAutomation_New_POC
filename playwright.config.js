// @ts-check
import { defineConfig, devices } from '@playwright/test';
const config = ({
  testDir: './tests',
  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },
  
  reporter: 'html',
  use: {
    browserName: 'chromium',
    // browserName: 'firefox',
    // browserName: 'webkit',
    headless: false,
    // screenshot: 'on',  //'only-on-failure'
    // //trace: 'retain-on-failure',
    // trace: 'on',
  },
});
module.exports = config
