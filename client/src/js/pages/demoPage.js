'use strict';

var Page = require('watch_framework').Page;
var demoPage = Page.extend({

    id: 'demo',

    render: function() {
        this.$el.html(this.template({name: 'John Smith'}));
        return this;
    },

    template: require('../../templates/pages/demo.hbs')
});

module.exports = demoPage;
