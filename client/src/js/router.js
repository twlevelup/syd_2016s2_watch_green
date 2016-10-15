'use strict';

var Router = Backbone.Router.extend({

  routes: {
    viewProgress: 'showViewProgress',

    // 'eventDetails/:id': 'showEventDetails',
    'eventDetails/c1': 'showCheckIn',
    'eventDetails/c2': 'showViewProgress',
    'eventDetails/c3': 'showViewAttendance',
    'passwordEntryPage': 'showPasswordEntry',

    '*other': 'defaultRoute'
  },

  initialize: function(pages) {
    this.pages = pages;

    // TODO call initialize on the parent router
    // this.prototype.initialize();
    // TODO merge routes with default routes
    // this.routes = _.merge(this.prototype.defaultRoutes);
  },

  defaultRoute: function(urlFragment) {
    var pageName = (!urlFragment) ? 'home' : urlFragment;
    var page = this.pages[pageName] || this.pages['404'];
    window.App.showPage(page);
  },

  showCheckIn: function() {
    window.App.showPage(this.pages.checkin);
  },

  showViewProgress: function() {
    window.App.showPage(this.pages.viewProgress);
  },

  showViewAttendance: function() {
    window.App.showPage(this.pages.viewAttendance);
  },

  showEventDetails: function(id) {
    window.App.showPage(this.pages.eventDetails, {cid: id});
  },

  showPasswordEntry: function() {
    window.App.showPage(this.pages.PasswordEntryPage);
  }

});

module.exports = Router;
