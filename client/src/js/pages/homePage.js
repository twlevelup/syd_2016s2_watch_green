'use strict';

var Page = require('watch_framework').Page;
var AttendanceService = require('../../services/attendanceService');
var Data = require('json!../../storage/dummyData.json');

var homePage = Page.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToEventsList',
    top: 'scrollUp',
    bottom: 'scrollDown'

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
    var colour = new AttendanceService(Data).getColour();
    this.$el.html(this.template());
    $('#watch').css({ 'background-color': colour});
    return this;
  }

});

module.exports = homePage;
