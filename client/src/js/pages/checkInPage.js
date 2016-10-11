'use strict';

var Page = require('watch_framework').Page;
var inputMode = false;
var passwordScreenMessage = 'Press the screen to Enter your password mode';

var checkInPage = Page.extend({
  id: 'checkin',

  template: require('../../templates/pages/checkInPage.hbs'),

  buttonEvents: {
    face: 'navigateToPasswordEntry'
  },

  initialize: function() {
    // this.inputPassword = [];
    this.inputMode = false;
  },

  // appendUpToArray: function() {
  //   this.inputPassword.push('U');
  // },

  navigateToPasswordEntry: function() {
      window.App.navigate('passwordEntry');
    },

  render: function() {
    if (inputMode === true) {
      this.$el.html(this.template({
        passwordPromptText: 'Enter the password'
      }));
    } else {
      this.$el.html(this.template({
        passwordPromptText: 'Press the screen to Enter your password mode'
      }));
    }

    return this;

  },

  checkInputMode: function() {
    return inputMode;
  }

});
module.exports = checkInPage;
