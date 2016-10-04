'use strict';


var rate_of_attendance = Backbone.Model.extend({
  defaults: {
    totalDays: 12,
    daysAttended: 6
  }

  initialize: percentageAttended (){
    return daysAttended * 100/totalDays;
  }

  initialize: percentageString() {
    return string.concat(percentageAttended, '%');
  }

});
