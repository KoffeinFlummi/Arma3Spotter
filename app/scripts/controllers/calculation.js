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
    vm.resultHorizontal = "";
    vm.resultVertical = "";





    function calculate(){

      /*

        FILL THIS WITH LIFE

        Current Weapon:
          vm.Data.getActiveWeapon() // returns weapon object

        Current Ammo:
          vm.Data.getActiveAmmo() // returns ammo object

      */

      // Fill this with the values
      vm.resultHorizontal = 3.37;
      vm.resultVertical = -8.1;
    }

  }

})();
