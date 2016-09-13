'use strict';

var Page = require('watch_framework').Page;
var menuPage = Page.extend({

  id: 'menu',

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: require('../../templates/pages/menu.hbs')
});

module.exports = menuPage;
