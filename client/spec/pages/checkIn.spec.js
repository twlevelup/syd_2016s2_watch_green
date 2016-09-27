'use strict';

//User should see the message "Press the screen to Enter your password mode "
//

var page;
var CheckInPage = require('../../src/js/pages/checkInPage');
var eventHub = require('watch_framework').EventHub;

describe('The CHECK IN page', function() {

  beforeEach(function() {
    page = new CheckInPage();
  });

  describe('rendering', function() {

    it('should show "Press the screen to Enter your password mode"', function() {
      page.render();
      expect(page.$el).toContainHtml('<h1>Press the screen to Enter your password mode</h1>');
    });


    describe('button events', function() {
      describe('face', function() {
        it('should go into password entry mode', function() {
          page.configureButtons();
          eventHub.trigger('face');
          expect(page.checkInputMode()).toBeTruthy();
        });
      });

    });

  });
});
