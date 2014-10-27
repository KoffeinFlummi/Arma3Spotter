'use strict';

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
  .module('arma3SpotterApp')
  .factory('Data', function () {
    // Service logic
    // ...

    var weaponSettings = {
      activeWeapon: null,
      activeAmmo: null
    };

    function getActiveAmmo () {
      return weaponSettings.activeAmmo;
    }
    function getActiveWeapon () {
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
  });


})();
