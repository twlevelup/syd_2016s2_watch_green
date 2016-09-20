'use strict';

var Page = require('watch_framework').Page;

var homePage = Page.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToEventsList',
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToMyDemoPage'

  },

  goToEventsList: function() {
    window.App.navigate('eventsList');
  },

  goToMyDemoPage: function() {
    window.App.navigate('demo');
  },

  scrollUp: function() {
    $('#watch-face').animate({
      scrollTop: '-=70px'
    });
  },

  scrollDown: function() {
    $('#watch-face').animate({
      scrollTop: '+=70px'
    });
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = homePage;
