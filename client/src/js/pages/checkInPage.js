'use strict';

var Page = require('watch_framework').Page;
var inputMode = false;

var checkInPage = Page.extend({

  template: require('../../templates/pages/checkInPage.hbs'),
  id: 'checkInPage',

  buttonEvents: {
    face: 'toggleInputMode'
  },


  toggleInputMode: function() {
    inputMode = !inputMode;
  },

  render: function() {
    this.$el.html(this.template());
  },
  checkInputMode: function() {
    return inputMode;
  }


});
module.exports = checkInPage;
