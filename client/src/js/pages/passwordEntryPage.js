// to do.. to be continued..
'use strict';

var Page = require('watch_framework').Page;

var passwordEntryPage = Page.extend({

  id: 'passwordEntry',

  template: require('../../templates/pages/passwordEntry.hbs'),

  render: function() {

    this.$el.html(this.template());

    return this;
  },

});

module.exports = passwordEntryPage;
