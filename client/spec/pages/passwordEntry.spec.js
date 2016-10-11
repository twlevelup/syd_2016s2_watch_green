'use strict';

var page;
var PasswordEntryPage = require('../../src/js/pages/passwordEntryPage');

describe('The password entry page', function() {

  beforeEach(function() {
    page = new PasswordEntryPage();
  });

  describe('rendering', function() {
    it('should contain the text "Please insert your password"', function() {
      page.render();
      expect(page.$el).toContainHtml('Please insert your password');
    });
  });

});
