'use strict';

//User should see the message "Press the screen to Enter your password mode "
//

var page;
var AttendancePage = require('../../src/js/pages/attendancePage');
var eventHub = require('watch_framework').EventHub;

describe('The ATTENDANCE PAGE',function () {

  beforeEach(function () {
    page = new AttendancePage();
  });

  describe('Rendering', function () {

    it('Should print Hello World in the page', function () {
      page.render();
      expect(page.$el).toContainHtml('<h1>Hello World</h1>');
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
