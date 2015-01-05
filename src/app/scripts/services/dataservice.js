/**
 * @ngdoc service
 * @name arma3SpotterApp.DataService
 * @description
 * # DataService
 * Factory in the arma3SpotterApp.
 */

(function() {
  "use strict";

  angular
    .module("arma3SpotterApp")
    .factory("DataService", DataService);

  DataService.$inject = ["$http", "logger"];

  function DataService($http, logger) {

    function getWeapons() {
      try {
        return $http.get("data/weapons.json")
          .then(getWeaponsComplete)
          .catch(getWeaponsFailed);
      } catch (err) {
        alert("$http.get \n" + err.stack); 
      }
    }

    function getWeaponsComplete(response) {
      return response.data;
    }
    function getWeaponsFailed(error) {
      logger.logError("XHR failed for getWeapons." + error.data);
    }

    return {
      getWeapons: getWeapons
    };
  }

})();
