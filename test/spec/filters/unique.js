'use strict';

describe('Filter: unique', function () {

  // load the filter's module
  beforeEach(module('arma3SpotterApp'));

  // initialize a new instance of the filter before each test
  var unique;
  beforeEach(inject(function ($filter) {
    unique = $filter('unique');
  }));

  it('should return only one of each"', function () {
    var list = [
      "One",
      "One",
      "Two",
      "Two",
      "",
      ""
    ];

    expect(JSON.stringify(unique(list))).toBe(JSON.stringify(["One", "Two", ""]));
  });

});
