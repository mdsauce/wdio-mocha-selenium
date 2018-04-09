const assert = require('assert')

describe('TestObject website', function() {
    it('TestObject homepage loads', function() {
        browser.url('http://saucelabs.com')
        browser.getUrl()
    })
})