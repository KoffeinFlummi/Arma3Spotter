'use strict';

/**
 * @ngdoc function
 * @name arma3SpotterApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the arma3SpotterApp
 */
angular.module('arma3SpotterApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.weapons = [
      {name: "Snip1"},
      {name: "Snip2"}
    ];
    $scope.activeWeapon = "";

    $scope.ammos = [
      {name: "Ammo1"},
      {name: "Ammo2"}
    ];
    $scope.activeAmmo = "";

  });
