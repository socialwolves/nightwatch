var config = require('../config')
var user = config.user

var TIMEOUT_DEFAULT = config.TIMEOUT_DEFAULT
var TIMEOUT_LONG = config.TIMEOUT_LONG

module.exports = {
  'Submit User Registration': function(browser) {
    browser
      .url(config.mail_url)
      .useXpath()

      .waitForElementVisible(`//td[text()="<${user.email}>"]`, TIMEOUT_LONG)
      .click(`//td[text()="<${user.email}>"]`)
      .pause(TIMEOUT_DEFAULT)

      .waitForElementVisible("//a[text()='HTML']", TIMEOUT_DEFAULT)
      .click("//a[text()='HTML']")
      .pause(TIMEOUT_DEFAULT)
      .useCss()

      .waitForElementVisible('iframe.body', TIMEOUT_DEFAULT)
      .frame(0)
      .waitForElementVisible('a', TIMEOUT_DEFAULT)
      .click('a')

      .waitForElementVisible('a[href="/choice/later"]', TIMEOUT_LONG * 10)
      .click('a[href="/choice/later"]')

      .waitForElementVisible('.appcues-button-success', TIMEOUT_LONG * 10)
      .click('.appcues-button-success')

      .waitForElementVisible('.appcues-button-success', TIMEOUT_DEFAULT)
      .click('.appcues-button-success')

      .waitForElementVisible('.appcues-button-success', TIMEOUT_DEFAULT)
      .click('.appcues-button-success')

      .waitForElementVisible('.appcues-button-success', TIMEOUT_DEFAULT)
      .click('.appcues-button-success')

      .waitForElementVisible('.appcues-button-success', TIMEOUT_DEFAULT)
      .click('.appcues-button-success')

      .pause(TIMEOUT_LONG * 10)
      .end();
  }
}