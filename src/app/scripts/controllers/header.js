/**
 * @ngdoc function
 * @name arma3SpotterApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the arma3SpotterApp
 */
/*
angular.module('arma3SpotterApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
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
