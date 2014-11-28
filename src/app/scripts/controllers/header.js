/**
 * @ngdoc function
 * @name arma3SpotterApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the arma3SpotterApp
 */

(function (){
  "use strict";

  angular.module("arma3SpotterApp")
    .controller("HeaderCtrl", Header);

  Header.$inject = ["$route"];

  function Header($route) {

    var vm = this;
    vm.route = $route;

  }

})();
