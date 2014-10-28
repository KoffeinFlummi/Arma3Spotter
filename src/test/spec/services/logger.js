'use strict';

describe('Service: logger', function () {

  // load the service's module
  beforeEach(module('arma3SpotterApp'));

  // instantiate service
  var logger;
  beforeEach(inject(function (_logger_) {
    logger = _logger_;
  }));

  it('should be defined', function () {
    expect(logger).toBeDefined();
    expect(logger.logError).toBeDefined();
  });

});
