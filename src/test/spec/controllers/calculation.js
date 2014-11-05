"use strict";

describe("Controller: CalculationCtrl", function () {

  // load the controller"s module
  beforeEach(module("arma3SpotterApp"));

  var CalculationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CalculationCtrl = $controller("CalculationCtrl", {
      $scope: scope
    });
  }));

  //it("should attach a list of awesomeThings to the scope", function () {
  //  expect(scope.awesomeThings.length).toBe(3);
  //});
});
