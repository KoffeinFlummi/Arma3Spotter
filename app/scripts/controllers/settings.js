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

  Settings.$inject = ["DataService"];

  function Settings(DataService) {
    var vm = this;

    vm.activeAmmo = "";
    vm.activeWeapon = "";
    vm.ammos = [];
    vm.mods = [];
    vm.saveConfig = saveConfig;
    vm.weapons = [];

    init();


    function init() {
      DataService.getWeapons().then(function(response) {
        vm.weapons = response;

        vm.weapons.forEach(function(item, index) {
          if (vm.mods.indexOf(item.mod) === -1) {
            vm.mods.push(item.mod);
          }
        });

      })
    }
    function saveConfig() {
      // save the config in localStorage
    }
  }

})();
