'use strict';

var Page = require('watch_framework').Page;
var AttendanceService = require('../../services/attendanceService');
var Data = require('json!../../storage/dummyData.json');
var attendanceService = new AttendanceService(Data);

var viewAttendancePage = Page.extend({

  id: 'viewAttendance',

  template: require('../../templates/pages/attendancePage.hbs'),

  buttonEvents: {
    left: 'navigateToEventsList'
  },

  navigateToEventsList: function() {
    window.App.navigate('eventsList');
  },

  render: function() {
    var mood = this.getMood();
    if (mood === 'high') {
      this.$el.html(this.template({moodMessage: 'Congratulations!'}));
      this.$el.find('#mood-face').addClass('fa-smile-o');
    }
    if (mood === 'medium') {
      this.$el.html(this.template({moodMessage: 'You are Ok, not great. '}));
      this.$el.find('#mood-face').addClass('fa-meh-o');
    }
    if (mood === 'low') {
      this.$el.html(this.template({moodMessage: 'Your daughter needs more attention.'}));
      this.$el.find('#mood-face').addClass('fa-frown-o');
    }

    return this;
  }

  getMood: function(){
    return  attendanceService.getColour();
  }
});

module.exports = viewAttendancePage;
