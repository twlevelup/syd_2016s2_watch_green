// to do.. to be continued..
'use strict';

var Page = require('watch_framework').Page;
var inputPassword = [];

var passwordEntryPage = Page.extend({

  id: 'passwordEntry',

  template: require('../../templates/pages/passwordEntry.hbs'),

  buttonEvents: {
    top: 'appendUpToArray',
    bottom: 'appendDownToArray',
    right: 'appendRightToArray',
    left: 'navigateToCheckInPage'
  },

  render: function() {

    this.$el.html(this.template());

    return this;
  },

  initialize: function() {
    this.inputPassword = [];
    this.hardcodedPassword = ['U','R','D','D'];
  },

  appendUpToArray: function() {
    this.inputPassword.push('U');
    this.checkPassword();
  },

  appendDownToArray: function() {
    this.inputPassword.push('D');
    this.checkPassword();
  },

  appendRightToArray: function() {
    this.inputPassword.push('R');
    this.checkPassword();
  },

  checkPassword: function() {
    if (this.inputPassword.toString() === this.hardcodedPassword.toString()) {
      this.navigateToPointsPage();
    } else if (this.inputPassword.length === 4) {
      this.inputPassword = [];
    }
  },

  navigateToPointsPage: function() {
    window.App.navigate('points');
  },

  navigateToCheckInPage: function() {
    window.App.navigate('checkin');
  }

});

module.exports = passwordEntryPage;
