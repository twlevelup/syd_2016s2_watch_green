'use strict';

var AttendanceService = require('../../src/services/attendanceService');
var moment = require('moment');

describe('Attendance Service', function() {
          describe('#attendanceRate', function() {
                describe('when lucy attends 3 sessions out of 6 sessions', function() {
                      it('should return 0.5', function() {
                            var dummyData = [
                                {
                                    date: '09/27/16',
                                    morning: true,
                                    noon: true,
                                    eve: true
                                  },
                                {
                                    date: '09/28/16',
                                    morning: false,
                                    noon: false,
                                    eve: false
                                  }];
                            var attendanceService = new AttendanceService(dummyData);
                            expect(attendanceService.getAttendanceRate()).toEqual(0.5);
                          });
                    });

                describe('when lucy attends 6 days out of 6 sessions', function() {
                    it('should return 1.0', function() {
                        var dummyData = [{
                            date: '09/27/16',
                            morning: true,
                            noon: true,
                            eve: true
                          },
                        {
                            date: '09/28/16',
                            morning: true,
                            noon: true,
                            eve: true
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
      expect(attendanceService.getColour()).toEqual('high');
    });

    it('should return "yellow" if 30%', function() {
      var attendanceService = new AttendanceService();
      spyOn(attendanceService, 'getAttendanceRate').and.returnValue(0.3);
      expect(attendanceService.getColour()).toEqual('medium');
    });

    it('should return "orange" if 0%', function() {
      var attendanceService = new AttendanceService();
      spyOn(attendanceService, 'getAttendanceRate').and.returnValue(0);
      expect(attendanceService.getColour()).toEqual('low');
    });
            });

          describe('#getPoints', function() {
                describe('when lucy attends 2 sessions out of 6 sessions', function() {
                      it('should return 2', function() {
                            var dummyData = [
                                {
                                    date: '09/27/16',
                                    morning: false,
                                    noon: false,
                                    eve: true
                                  },
                                {
                                    date: '09/28/16',
                                    morning: false,
                                    noon: false,
                                    eve: true
                                  }];
                            var attendanceService = new AttendanceService(dummyData);
                            expect(attendanceService.getPoints()).toEqual(2);
                          });
                    });

                describe('when lucy attends 0 sessions out of 0 days', function() {
                    it('should return 0', function() {
                        var attendanceService = new AttendanceService([]);
                        expect(attendanceService.getPoints()).toEqual(0);
                      });
                  });

                describe('when lucy has used the app for 2 weeks and attended 8 sessions out of last 5 days.', function() {
                    it('should return 8', function() {
                        var dummyData =  [{
                            date: '09/28/16',
                            morning: true,
                            noon: true,
                            eve: true
                          },
                        {
                            date: '09/29/16',
                            morning: true,
                            noon: true,
                            eve: true
                          },
                        {
                            date: '09/30/16',
                            morning: true,
                            noon: true,
                            eve: true
                          },
                        {
                            date: '10/01/16',
                            morning: false,
                            noon: false,
                            eve: false
                          },
                        {
                            date: '10/02/16',
                            morning: false,
                            noon: true,
                            eve: true
                          },
                        {
                            date: '10/03/16',
                            morning: false,
                            noon: false,
                            eve: false
                          }];
                        var attendanceService = new AttendanceService(dummyData);
                        expect(attendanceService.getPoints()).toEqual(8);
                      });
                  });
              });

          describe('#getPoints', function() {
              describe('When Lucy checks progress page on <weekday>.', function() {
                  it('should return <weekday>', function() {
                      var dummyData =  [{
                          date: '09/28/16',
                          morning: true,
                          noon: true,
                          eve: true
                        },
                      {
                          date: '09/29/16',
                          morning: true,
                          noon: true,
                          eve: true
                        }];
                      var attendanceService = new AttendanceService(dummyData);
                      var dayOfWeek = moment(attendanceService.getRecentDay().date)
                      .format('dddd');
                      expect(dayOfWeek).toEqual('Thursday');
                    });
                });
            });
        });
