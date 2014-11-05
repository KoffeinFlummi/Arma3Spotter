"use strict";

describe("Service: DataService", function () {

  // load the service"s module
  beforeEach(module("arma3SpotterApp"));

  // instantiate service
  var DataService;
  beforeEach(inject(function (_DataService_) {
    DataService = _DataService_;
  }));

  it("should do something", function () {
    expect(!!DataService).toBe(true);
  });

  it("should return a list of weapons", function(done) {
    var wps = DataService.getWeapons().then(function(response){
      expect(response).toBeDefined();
      done();
    });
    return wps;
  });

});
