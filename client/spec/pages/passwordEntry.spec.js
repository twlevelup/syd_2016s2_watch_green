'use strict';

var page;
var PasswordEntryPage = require('../../src/js/pages/passwordEntryPage');
var eventHub = require('watch_framework').EventHub;

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

  describe('Up', function() {
    it('should append "U" to the input password array', function() {
      page.configureButtons();
      eventHub.trigger('top');
      expect(page.inputPassword[page.inputPassword.length - 1]).toEqual('U');
    });
  });

  describe('Down', function() {
    it('should append "D" to the input password array', function() {
      page.configureButtons();
      eventHub.trigger('bottom');
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

  describe('Left', function() {
    it('should navigate back to checkin page', function() {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('checkin');
    });
  });

  describe('password checking', function() {
    it('should navigate to points page if password is correct', function() {
      spyOn(window.App, 'navigate');
      page.inputPassword = ['U','R','D','D'];
      page.checkPassword();
      expect(window.App.navigate).toHaveBeenCalledWith('points');
    });

    it('should reset inputPassword array if entered password is 4 characters long and is incorrect', function() {
      spyOn(window.App, 'navigate');
      page.inputPassword = ['D','R','D','R'];
      page.checkPassword();
      expect(page.inputPassword).toEqual([]);
    });
  });

});
