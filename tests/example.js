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
			.setValue('input[type=text]', 'rembrandt van rijn')
			// find search button...
			.waitForElementVisible('button[name=btnG]', TIMEOUT_DEFAULT)
			// ...click it
			.click('button[name=btnG]')
			// wait for site reload
			.pause(TIMEOUT_DEFAULT)
			// check for specific text
			.assert.containsText('ol#rso li:first-child', 'Rembrandt - Wikipedia')
			// close browser
			.end();
	}
};