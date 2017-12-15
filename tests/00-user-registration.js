var config = require('../config')
var user = config.user

var TIMEOUT_DEFAULT = config.TIMEOUT_DEFAULT
var TIMEOUT_LONG = config.TIMEOUT_LONG

module.exports = {
  'Register New User': function (browser) {
    browser
      .url(config.base_url + '/register/form')

      .waitForElementVisible('#full_registration_name', TIMEOUT_DEFAULT)
      .setValue('#full_registration_name', user.name)

      .waitForElementVisible('#full_registration_surname', TIMEOUT_DEFAULT)
      .setValue('#full_registration_surname', user.last)

      .waitForElementVisible('#full_registration_email', TIMEOUT_DEFAULT)
      .setValue('#full_registration_email', user.email)

      .waitForElementVisible('#full_registration_password', TIMEOUT_DEFAULT)
      .setValue('#full_registration_password', user.pass)

      .waitForElementVisible('#full_registration_dob', TIMEOUT_DEFAULT)
      .setValue('#full_registration_dob', user.date)

      .waitForElementVisible('.btn.btn-default.dropdown-toggle', TIMEOUT_DEFAULT)
      .click('.btn.btn-default.dropdown-toggle')

      .waitForElementVisible('a[data-value="organization"]', TIMEOUT_DEFAULT)
      .click('a[data-value="organization"]')

      .waitForElementVisible('#full_registration_schoolCity', TIMEOUT_DEFAULT)
      .setValue('#full_registration_schoolCity', 'Warszawa')

      .waitForElementVisible('div.autocomplete-suggestion', TIMEOUT_DEFAULT)
      .click('div.autocomplete-suggestion:nth-of-type(3)')

      .waitForElementVisible('#full_registration_schoolName', TIMEOUT_DEFAULT)
      .setValue('#full_registration_schoolName', 'Wolfies')

      .waitForElementVisible('div[data-id="13995"]', TIMEOUT_DEFAULT)
      .click('div[data-id="13995"]')

      .waitForElementVisible('label[for="checkbox_acceptTerms"]', TIMEOUT_DEFAULT)
      .click('label[for="checkbox_acceptTerms"]')

      .waitForElementVisible('label[for="checkbox_acceptPrivacy"]', TIMEOUT_DEFAULT)
      .click('label[for="checkbox_acceptPrivacy"]')

      .waitForElementVisible('#full_registration_submit', TIMEOUT_DEFAULT)
      .click('#full_registration_submit')

      // it's really long
      .waitForElementVisible('#success', TIMEOUT_LONG * 10)
      .end();
  }
};
