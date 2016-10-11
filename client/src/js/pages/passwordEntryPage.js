// to do.. to be continued..
'use strict';

var Page = require('watch_framework').Page;

var passwordEntryPage = Page.extend({

  id: 'passwordEntry',

  template: require('../../templates/pages/passwordEntry.hbs'),

  buttonEvents: {
    up: 'appendUpToArray',
    down: 'appendDownToArray',
    right: 'appendRightToArray',
    left: 'navigateToCheckInPage'
  },

  render: function() {

    this.$el.html(this.template());

    return this;
  },

  initialize: function() {
    this.inputPassword = [];
  },

  appendDownToArray: function() {
    this.inputPassword.push('D');
  },

  appendUpToArray: function() {
    this.inputPassword.push('U');
  },

  appendRightToArray: function() {
    this.inputPassword.push('R');
  },

  navigateToCheckInPage: function() {
    window.App.navigate('checkin');
  }

});

module.exports = passwordEntryPage;
