'use strict';

var ViewProgressPage = require('../../src/js/pages/viewProgressPage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The viewProgress Page', function() {

  beforeEach(function() {
    page = new ViewProgressPage();
  });

  describe('button events', function() {

    beforeEach(function() {
      page.configureButtons();
    });

    describe('left', function() {
      it('should take the user to the home page', function() {
        spyOn(window.App, 'navigate');
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalled();
      });
    });
  });

  describe('rendering', function() {

    it('should produce the correct heading.', function() {
      page.render();
      expect(page.$el).toContainHtml('<h2>Score</h2>');
    });

    it('should produce the correct score.', function() {
      page.score = 56;
      page.render();
      expect(page.$el).toContainHtml('<h1>56</h1>');
    });

    it('Should display 20 if score=20', function() {
      page.score = 20;
      page.render();
      expect(page.$el).toContainHtml('<h1>20</h1>');
    });

    // it('should render each of the contacts', function() {
    //   spyOn(page, 'createContactHTML');
    //   page.contactsCollection.reset([{}, {}, {}, {}]);
    //   page.render();
    //   expect(page.createContactHTML.calls.count()).toEqual(4);
    // });

    it('returns the view object', function() {
      expect(page.render()).toEqual(page);
    });

  });

});
