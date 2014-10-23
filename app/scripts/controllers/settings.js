'use strict';

/**
 * @ngdoc function
 * @name arma3SpotterApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the arma3SpotterApp
 */

(function(){

  angular.module('arma3SpotterApp')
    .controller('SettingsCtrl', Settings);

  function Settings() {
    var vm = this;

    vm.activeAmmo = "";
    vm.activeWeapon = "";
    vm.ammos = [];
    vm.saveConfig = saveConfig;
    vm.weapons = [];

    /*
    vm.weapons = [
      {name: "Snip1"},
      {name: "Snip2"}
    ];*/
    /*vm.ammos = [
      {name: "Ammo1"},
      {name: "Ammo2"}
    ];*/



    function saveConfig() {
      // save the config in localStorage
    }
  }

})();
