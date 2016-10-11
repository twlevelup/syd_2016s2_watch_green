'use strict';

var AttendanceService = function(days) {

  this.getAttendanceRate = function() {
    if (days.length === 0) {
      return 0;
    }
    var numDays = 0;
    var numTrue = 0;
    for (;numDays < days.length; numDays++) {
      if (days[numDays].morning) {
        numTrue++;
      }
      if (days[numDays].noon) {
        numTrue++;
      }
      if (days[numDays].eve) {
        numTrue++;
      }
    }
    return numTrue / (numDays * 3);
  }

  this.getColour = function() {
    var attendRate = this.getAttendanceRate();
    if (attendRate >= 0.8) {
      return '#3EA329';
    }

    if (attendRate >= 0.3) {
      return '#F5CC23';
    }

    return '#E7502B';
  }

};

module.exports = AttendanceService;
