'use strict';

//User should see the message "Press the screen to Enter your password mode "
//

var page;
var AttendancePage = require('../../src/js/pages/attendancePage');
var eventHub = require('watch_framework').EventHub;

describe('The ATTENDANCE PAGE', function() {

  beforeEach(function() {
    page = new AttendancePage();
  });

  describe('Rendering', function() {

    it('Should print the correct message for high in the page', function() {
      spyOn(page, 'getMood').and.returnValue('high');
      page.render();
      expect(page.$el).toContainHtml('<div>Congratulations!</div>');
    });

    it('Should print the correct message for low in the page', function() {
      spyOn(page, 'getMood').and.returnValue('low');
      page.render();
      expect(page.$el).toContainHtml('<div>Your daughter needs more attention.</div>');
    });
  });

  describe('button events', function() {

    describe('left', function() {

      it('should navigate back to the menu list page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('eventsList');
      });
    });

  });

});
