"use strict";

/**
 * @ngdoc function
 * @name arma3SpotterApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the arma3SpotterApp
 */

(function(){

  angular.module("arma3SpotterApp")
    .controller("SettingsCtrl", Settings);

  Settings.$inject = ["$scope", "DataService", "StorageService", "Data"];

  function Settings($scope, DataService, StorageService, Data) {

    var vm = this;

    vm.activeAmmo = "";
    vm.activeMod = "";
    vm.activeWeapon = "";
    vm.allWeapons = [];
    vm.ammoChanged = ammoChanged;
    vm.ammos = [];
    vm.modChanged = modChanged;
    vm.mods = [];
    vm.saveConfig = saveConfig;
    vm.weaponChanged = weaponChanged;
    vm.weapons = [];

    // I"m too noobish to get this to work
    /*$scope.$watch("vm.activeMod", angular.bind(this, function(val,orig){
      this.modChanged(val, orig);
    }));*/


    init();


    function init() {
      return DataService.getWeapons().then(function(response) {
        vm.allWeapons = response;

        // received the weapons list now prepare the select boxes
        vm.allWeapons.forEach(function(item/*, index*/) {
          if (vm.mods.indexOf(item.mod) === -1) {
            vm.mods.push(item.mod);
          }
        });

        vm.mods.sort(function(a,b){
          return a > b ? 1 : -1;
        });

        setActiveMod();

        return vm.allWeapons;
      });

    }

    function ammoChanged() {
      Data.setActiveWeapon(vm.activeWeapon);
      Data.setActiveAmmo(vm.activeAmmo);
    }

    function modChanged() {
      vm.weapons = [];
      vm.allWeapons.forEach(function(item/*, index*/) {
        if (item.mod === vm.activeMod) {
          vm.weapons.push(item);
        }
      });

      vm.weapons.sort(function(a,b){
        return a.name > b.name ? 1 : -1;
      });

      setActiveWeapon();
    }

    function setActiveAmmo() {
      var activeAmmo = StorageService.getItem("activeAmmo");
      if (!activeAmmo || activeAmmo === "") {
        vm.activeAmmo = vm.ammos[0];
      } else {
        var foundAmmo = false;

        for (var i = 0; i < vm.ammos.length; i++) {
          if (vm.ammos[i].name === activeAmmo) {
            vm.activeAmmo = vm.ammos[i];
            foundAmmo = true;
            break;
          }
        }

        if (foundAmmo === false) {vm.activeAmmo = vm.ammos[0];}
      }

      ammoChanged();
    }


    function setActiveMod() {
      var activeMod = StorageService.getItem("activeMod");
      if (!activeMod || activeMod === "") {
        vm.activeMod = vm.mods[0];
      } else {
        var index = vm.mods.indexOf(activeMod);
        if (index >= 0 && vm.mods.length > index) {
          vm.activeMod = vm.mods[index];
        } else {
          vm.activeMod = vm.mods[0];
        }
      }

      modChanged();
    }


    function setActiveWeapon() {
      var activeWeapon = StorageService.getItem("activeWeapon");
      if (!activeWeapon || activeWeapon === "") {
        vm.activeWeapon = vm.weapons[0];
      } else {

        var foundWeapon = false;

        for (var i = 0; i < vm.weapons.length; i++) {
          if (vm.weapons[i].name === activeWeapon) {
            vm.activeWeapon = vm.weapons[i];
            foundWeapon = true;
            break;
          }
        }

        if (foundWeapon === false) {vm.activeWeapon = vm.weapons[0];}
      }

      weaponChanged();
    }




    function weaponChanged() {
      vm.ammos = vm.activeWeapon.magazines;
      vm.ammos.sort(function(a,b){
        return a.name > b.name ? 1 : -1;
      });

      setActiveAmmo();
    }

    function saveConfig() {
      // save the config in localStorage
      StorageService.setItem("activeMod", vm.activeMod);
      StorageService.setItem("activeWeapon", vm.activeWeapon.name);
      StorageService.setItem("activeAmmo", vm.activeAmmo.name);
      /*StorageService.setItem("activeMod", vm.activeMod);
      StorageService.setItem("activeMod", vm.activeMod);*/
    }
  }

})();
