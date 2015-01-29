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

  //Header.$inject = ["$rootScope", "$location", "$route"];
  Header.$inject = ["$route"];

  //function Header($rootScope, $location, $route) {
  function Header($route) {

    var vm = this;
    vm.route = $route;

/*
    $rootScope.$on("$locationChangeStart", function(event, next, current){
      //do your validations here
      //prevent the location change.
      debugger;
      //event.preventDefault();
    });
*/

  }

})();
