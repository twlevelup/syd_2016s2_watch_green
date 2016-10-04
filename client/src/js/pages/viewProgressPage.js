'use strict';

var Page = require('watch_framework').Page;

var viewProgressPage = Page.extend({

  id: 'viewProgress',

  template: require('../../templates/pages/viewProgress.hbs'),

  buttonEvents: {
    left: 'goToHomePage',
  },

  initialize: function() {
    this.score = 0;
    console.log("Hello!");
    this.render();
  },

  goToHomePage: function() {
    window.App.navigate();
  },

  render: function() {
    this.$el.html(this.template({score : 0}));
    return this;
  }

});

module.exports = viewProgressPage;
