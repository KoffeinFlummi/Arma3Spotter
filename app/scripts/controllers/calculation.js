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

  //Calculation.$inject = ["dataService"];

  function Calculation(/*dataService*/) {
    var vm = this;
    vm.calculate = calculate;
    vm.crosswind = "";
    vm.distance = "";
    vm.elevation = "";
    vm.headwind = "";

    function calculate(){
      vm.crosswind = 1;
      vm.distance = 2;
      vm.elevation = 3;
      vm.headwind = 4;
    }

  }

})();
