'use strict';


function Storage(){
  this.data = { attendance: [] };
  this.init = function() {
    this.data = require('json!../storage/dummyData.json');
  }
}

module.exports = new Storage();
