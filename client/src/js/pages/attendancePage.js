'use strict';

var Page = require('watch_framework').Page;

var viewAttendancePage = Page.extend({

  id: 'viewAttendance',

  template: require('../../templates/pages/attendancePage.hbs'),

  buttonEvents: {
    left: 'navigateToEventsList'
  },

  navigateToEventsList: function() {
    window.App.navigate('eventsList');
  },

  // initialize: function() {
  //   this.score = 0;
  //   this.render();
  // },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = viewAttendancePage;
