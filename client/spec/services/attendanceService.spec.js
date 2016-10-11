'use strict';

var AttendanceService = require('../../src/services/attendanceService');

describe('Attendance Service', function() {
  describe('#attedanceRate', function() {
    describe('when lucy attends 3 days out of 6 sessions', function() {
       it('should return 0.5', function() {
         var dummyData = [
           {
           "date": "09/27/16",
           "morning": true,
           "noon": true,
           "eve": true
         },
         {
           "date": "09/28/16",
           "morning": false,
           "noon": false,
           "eve": false
         }];
         var attendanceService = new AttendanceService(dummyData);
         expect(attendanceService.getAttendanceRate()).toEqual(0.5);
       });
    });

    describe('when lucy attends 6 days out of 6 sessions', function() {
       it('should return 1.0', function() {
         var dummyData = [{
           "date": "09/27/16",
           "morning": true,
           "noon": true,
           "eve": true
         },
         {
           "date": "09/28/16",
           "morning": true,
           "noon": true,
           "eve": true
         }];
         var attendanceService = new AttendanceService(dummyData);
         expect(attendanceService.getAttendanceRate()).toEqual(1);
       });
    });

    describe('when lucy attends 0 sessions out of 0 days', function() {
       it('should return 0', function() {
         var attendanceService = new AttendanceService([]);
         expect(attendanceService.getAttendanceRate()).toEqual(0);
       });
    });
  });
  describe('#getColour', function() {
    it('should return "green" if 80%', function() {
      var attendanceService = new AttendanceService();
      spyOn(attendanceService, 'getAttendanceRate').and.returnValue(0.8);
      expect(attendanceService.getColour()).toEqual('#3EA329');
    });
    it('should return "yellow" if 30%', function() {
      var attendanceService = new AttendanceService();
      spyOn(attendanceService, 'getAttendanceRate').and.returnValue(0.3);
      expect(attendanceService.getColour()).toEqual('#F5CC23');
    });
    it('should return "orange" if 0%', function() {
      var attendanceService = new AttendanceService();
      spyOn(attendanceService, 'getAttendanceRate').and.returnValue(0);
      expect(attendanceService.getColour()).toEqual('#E7502B');
    });

  });
});
