'use strict';


var DAYS_OF_WEEK = 5;

var AttendanceService = function(days) {

  this.getNPoints = function(listOfDays) {
      if (listOfDays.length === 0) {
        return 0;
      }
      var points = 0;
      _.forEach (listOfDays, function(day){
        if (day.morning) {
          points++;
        }
        if (day.noon) {
          points++;
        }
        if (day.eve) {
          points++;
        }
    });
      return points;
  }

  this.getAttendanceRate = function() {
    if (days.length === 0) {
      return 0;
    }
    var points = this.getNPoints(days);
    return points / (days.length * 3);
  }

  this.getColour = function() {
    var attendRate = this.getAttendanceRate();
    if (attendRate >= 0.8) {
      return 'high';
    }

    if (attendRate >= 0.3) {
      return 'medium';
    }

    return 'low';
  }

  this.getPoints = function() {
    var fiveDays = days.slice(Math.max(days.length - DAYS_OF_WEEK, 0));
    if (fiveDays.length === 0) {
      return 0;
    }
    return this.getNPoints(fiveDays);
  }

  this.getRecentDay = function() {
      return days[days.length-1];
  }
};


module.exports = AttendanceService;
