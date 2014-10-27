'use strict';

/**
 * @ngdoc function
 * @name arma3SpotterApp.controller:CalculationCtrl
 * @description
 * # CalculationCtrl
 * Controller of the arma3SpotterApp
 */


(function(){


angular.module('arma3SpotterApp')
  .controller('CalculationCtrl', Calculation);

  Calculation.$inject = ["$scope","Data"];

  function Calculation($scope, Data) {
    var vm = this;

    vm.angle = "";
    vm.calculate = calculate;
    vm.crosswind = "";
    vm.Data = Data;
    vm.distance = "";
    vm.headwind = "";




    function calculate(){
      vm.crosswind = 1;
      vm.distance = 2;
      vm.angle = 3;
      vm.headwind = 4;
    }

  }

})();
