var config = require('../config');
var TIMEOUT_DEFAULT = config.TIMEOUT_DEFAULT

module.exports = {
	// test name
	'Demo test Google': function (browser) {
		// browser object
		browser
			// open specific website
			.url('http://www.google.com')
			// find element body with timeout
			.waitForElementVisible('body', TIMEOUT_DEFAULT)
			// check the title
			.assert.title('Google')
			// look for input
			.assert.visible('input[type=text]')
			// write some text in input
			.setValue('input[type=text]', 'social wolves')
			// find search button...
			.waitForElementVisible('input[type=submit]', TIMEOUT_DEFAULT)
			// ...click it
			.click('input[type=submit]')
			// wait for site reload
			.waitForElementVisible('a[href="http://socialwolves.com/"]', TIMEOUT_DEFAULT)
			// check for specific text
			.assert.containsText('a[href="http://socialwolves.com/"]', 'Social Wolves')
			// close browser
			.end();
	}
};