'use strict';

var Page = require('watch_framework').Page;
var AttendanceService = require('../../services/attendanceService');
var Data = require('json!../../storage/dummyData.json');
var _ = require('lodash');

var attendanceCssClassMap = {
  low: 'lowAttendance',
  medium: 'mediumAttendance',
  high: 'highAttendance'

};

var homePage = Page.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToEventsList',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  goToEventsList: function() {
    this.removeCssClasses();
    window.App.navigate('eventsList');
  },

  goToMyDemoPage: function() {
    this.removeCssClasses();
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

  removeCssClasses: function() {
    this.$el.html(this.template());
    var homePageWrapper = $('#watch');
    _.forEach(attendanceCssClassMap, function(className, key) {
        homePageWrapper.removeClass(className);
      });
  },

  render: function() {
    var colour = new AttendanceService(Data).getColour();
    this.$el.html(this.template());
    var homePageWrapper = $('#watch');
    _.forEach(attendanceCssClassMap, function(className, key) {
        homePageWrapper.removeClass(className);
      });

    homePageWrapper.addClass(attendanceCssClassMap[colour]);

    return this;
  }

});

module.exports = homePage;
