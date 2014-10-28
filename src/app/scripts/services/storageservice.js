'use strict';

/**
 * @ngdoc service
 * @name arma3SpotterApp.StorageService
 * @description
 * # StorageService
 * Service in the arma3SpotterApp.
 */
angular.module('arma3SpotterApp')
  .service('StorageService', function StorageService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });

(function() {
  "use strict";

  angular
    .module('arma3SpotterApp')
    .factory('StorageService', StorageService);

  StorageService.$inject = ['logger'];

  function StorageService(logger) {
    // Service logic
    function getItem(key) {
      if (!key || key === "") {throw new Error("StorageService.getItem: Key is empty!");}
      var item = localStorage.getItem(key);
      if (!!item && item !== "") {

        var storageObject = JSON.parse(item);
        return storageObject.item;

      } else {
        return null;
      }
    }

    function setItem(key, item) {
      if (!key || key === "") {throw new Error("StorageService.setItem: Key is empty!");}
      if (!item) {throw new Error("StorageService.setItem: Item is null!");}

      if (typeof item === "object") {
        localStorage.setItem(key, JSON.stringify({
          type: "object", item: item
        }));
      } else if (typeof item === "string") {
        localStorage.setItem(key, JSON.stringify({
          type: "string", item: item
        }));
      }

    }

    // Public API here
    return {
      getItem: getItem,
      setItem: setItem
    };
  }

})();