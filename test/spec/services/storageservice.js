'use strict';

describe('Service: StorageService', function () {

  var KEY = "myTestKey";
  var VALUE = "Smokebomb";

  // load the service's module
  beforeEach(module('arma3SpotterApp'));

  // instantiate service
  var StorageService;
  beforeEach(inject(function (_StorageService_) {
    StorageService = _StorageService_;
    localStorage.setItem(KEY, '{"type":"string", "item":"' + VALUE + '"}');
  }));

  afterEach(function() {
    localStorage.removeItem(KEY);
  });

  it("should read an item from the localStorage", function(){
    var item = StorageService.getItem(KEY);
    expect(item).toBe(VALUE);
  });

});
