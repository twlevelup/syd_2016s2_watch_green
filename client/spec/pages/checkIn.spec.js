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
  });

  describe('button events', function() {

    describe('left', function() {
      it('should navigate back to the menu list page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('eventsList');
      })
    });

    describe('face', function() {
        it('should navigate to password entry page', function() {
            spyOn(window.App, 'navigate');
            page.configureButtons();
            eventHub.trigger('face');
            expect(window.App.navigate).toHaveBeenCalledWith('passwordEntry');
          });
      });

    /**    describe('face', function() {
          it('should go into password entry mode', function() {
            page.configureButtons();
            eventHub.trigger('face');
            expect(page.checkInputMode()).toBeTruthy();
          });

          it('should display "You are in password entry mode. Use up/down/left/right buttons to enter password."', function() {
            page.inputMode = true;
            page.render();
            expect(page.$el).toContainHtml('<h1>Enter the password</h1>');
          });
        });


        describe('Up', function() {
          it('should append "U" to the input password array', function() {
            page.configureButtons();
            eventHub.trigger('up');
            expect(page.inputPassword[page.inputPassword.length - 1]).toEqual('U');
          });
        });


        describe('Down', function() {
          it('should append "D" to the input password array', function() {
            page.configureButtons();
            eventHub.trigger('down');
            expect(page.inputPassword[page.inputPassword.length - 1]).toEqual('D');
          });
        });

        describe('Right', function() {
          it('should append "R" to the input password array', function() {
            page.configureButtons();
            eventHub.trigger('right');
            expect(page.inputPassword[page.inputPassword.length - 1]).toEqual('R');
          });
        });
    **/
  });

});
