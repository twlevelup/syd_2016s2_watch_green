'use strict';

var Router = Backbone.Router.extend({

  routes: {
    'viewProgress': 'showViewProgress',
    'eventDetails/:id': 'showEventDetails',
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

  showViewProgress: function() {
    window.App.showPage(this.pages.viewProgressPage);
  },

  showEventDetails: function(id) {
    window.App.showPage(this.pages.eventDetails, {cid: id});
  }



});

module.exports = Router;
