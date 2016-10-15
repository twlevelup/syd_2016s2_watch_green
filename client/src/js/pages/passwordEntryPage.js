// to do.. to be continued..
'use strict';

var Page = require('watch_framework').Page;
var inputPassword = [];
var AttendanceService = require('../../services/attendanceService');


var passwordEntryPage = Page.extend({

  id: 'passwordEntry',

  template: require('../../templates/pages/passwordEntry.hbs'),

  buttonEvents: {
    top: 'appendUpToArray',
    bottom: 'appendDownToArray',
    right: 'appendRightToArray',
    left: 'appendLeftToArray',
    face: 'navigateToCheckInPage'
  },

  render: function() {

    if (this.asterisksCount === 1) {
      this.$el.html(this.template({
        asterisks: '* _ _ _'
      }));
    } else if (this.asterisksCount === 2) {
      this.$el.html(this.template({
        asterisks: '* * _ _'
      }));
    } else if (this.asterisksCount === 3) {
      this.$el.html(this.template({
        asterisks: '* * * _'
      }));
    } else if (this.asterisksCount === 4) {
      this.$el.html(this.template({
        asterisks: '* * * *'
      }));
    } else {
      this.$el.html(this.template({
        asterisks: '_ _ _ _'
      }));
    }

    return this;
  },

  initialize: function() {
    this.inputPassword = [];
    this.hardcodedPassword = ['U','R','D','D'];
    this.asterisksCount = 0;
  },

  appendUpToArray: function() {
    this.inputPassword.push('U');
    this.asterisksCount += 1;
    this.checkPassword();
    this.render();
  },

  appendDownToArray: function() {
    this.inputPassword.push('D');
    this.asterisksCount += 1;
    this.checkPassword();
    this.render();
  },

  appendRightToArray: function() {
    this.inputPassword.push('R');
    this.asterisksCount += 1;
    this.checkPassword();
    this.render();
  },

  appendLeftToArray: function() {
    this.inputPassword.push('L');
    this.asterisksCount += 1;
    this.checkPassword();
    this.render();
  },

  checkPassword: function() {
    if (this.inputPassword.toString() === this.hardcodedPassword.toString()) {
      new AttendanceService().addAttendence();
      this.navigateToPointsPage();
    } else if (this.inputPassword.length === 4) {
      this.inputPassword = [];
      this.asterisksCount = 0;
    }
  },

  navigateToPointsPage: function() {
    window.App.navigate('viewProgress');
  },

  navigateToCheckInPage: function() {
    window.App.navigate('checkin');
  }

});

module.exports = passwordEntryPage;
