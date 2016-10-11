'use strict';

var Page = require('watch_framework').Page;
var passwordScreenMessage = 'Press the screen to Enter your password mode';

var checkInPage = Page.extend({
  id: 'checkin',

  template: require('../../templates/pages/checkInPage.hbs'),

  buttonEvents: {
    face: 'navigateToPasswordEntry'
  },

  navigateToPasswordEntry: function() {
      window.App.navigate('passwordEntry');
    },

  render: function() {

    this.$el.html(this.template({
      passwordPromptText: 'Press the screen to Enter your password mode'
    }));

    return this;

  },

});
module.exports = checkInPage;
