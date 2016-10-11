'use strict';

var Page = require('watch_framework').Page;

var viewProgressPage = Page.extend({

  id: 'viewProgress',

  template: require('../../templates/pages/viewProgress.hbs'),

  buttonEvents: {
    left: 'goToHomePage'
  },

  initialize: function() {
    this.score = 0;
    this.render();
  },

  goToHomePage: function() {
    window.App.navigate();
  },

  render: function() {
    this.$el.html(this.template({score: this.score}));
    return this;
  }

});

module.exports = viewProgressPage;
