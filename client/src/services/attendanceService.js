'use strict';


var DAYS_OF_WEEK = 5;
var _ = require('lodash');
var storage = require('./data');
var days = require('json!../storage/dummyData.json').attendance;
var AttendanceService = function() {

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
    console.log("days===============>",days);
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

  this.addAttendence = function(){
    var last = days[days.length-1];
    if(!last.morning){
      last.morning=true;
      return;
    }else if(!last.noon){
      last.noon=true;
      return;
    }else if(!last.eve){
      last.eve = true;
      return;
    }else{
      days.push({
        "date": "15/10/16",
        "morning": true,
        "noon": false,
        "eve":false
      });
    }
  }


};


module.exports = AttendanceService;
