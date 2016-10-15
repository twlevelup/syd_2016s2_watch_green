'use strict';

var moment = require('moment');

var Page = require('watch_framework').Page;
var AttendanceService = require('../../services/attendanceService');

var viewProgressPage = Page.extend({

  id: 'viewProgress',

  template: require('../../templates/pages/viewProgress.hbs'),

  buttonEvents: {
    left: 'goToHomePage'
  },

  initialize: function() {
    this.attendanceService = new AttendanceService();
    this.score = this.attendanceService.getPoints();
    this.day = this.attendanceService.getRecentDay();

    this.render();
  },

  goToHomePage: function() {
    window.App.navigate();
  },

  render: function() {
    this.dayOfWeek = moment(this.day.date).format('dddd');
    this.day.morning = this.day.morning ? 'checked' : '';
    this.day.noon = this.day.noon ? 'checked' : '';
    this.day.eve = this.day.eve ? 'checked' : '';
    this.$el.html(this.template({score: this.score, dayOfWeek: this.dayOfWeek, day: this.day}));
    return this;
  }

});

module.exports = viewProgressPage;
