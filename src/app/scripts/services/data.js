/**
 * @ngdoc service
 * @name arma3SpotterApp.Data
 * @description
 * # Data
 * Factory in the arma3SpotterApp.
 */

(function() {
  "use strict";

angular
  .module("arma3SpotterApp")
  .factory("Data", Data);

  Data.$inject = ["StorageService"];

  function Data (StorageService) {
    var weaponSettings = {
      activeWeapon: null,
      activeAmmo: null
    };

    function getActiveAmmo () {

      if (!weaponSettings.activeAmmo) {
        var selectedAmmo = StorageService.getItem("activeAmmo");
        setActiveAmmo(selectedAmmo);
      }

      return weaponSettings.activeAmmo;
    }
    function getActiveWeapon () {

      if (!weaponSettings.activeWeapon) {
        var selectedWeapon = StorageService.getItem("activeWeapon");
        setActiveWeapon(selectedWeapon);
      }

      return weaponSettings.activeWeapon;
    }

    function setActiveAmmo (value) {
      if (!value || typeof value !== "object") {return;}
        weaponSettings.activeAmmo = value;
      }
      function setActiveWeapon (value) {
      if (!value || typeof value !== "object") {return;}
        weaponSettings.activeWeapon = value;
      }


        // Public API here
        return {
          getActiveAmmo: getActiveAmmo,
          getActiveWeapon: getActiveWeapon,
          setActiveAmmo: setActiveAmmo,
          setActiveWeapon: setActiveWeapon
        };
      }

})();
