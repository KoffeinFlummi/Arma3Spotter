/**
 * @ngdoc service
 * @name arma3SpotterApp.StorageService
 * @description
 * # StorageService
 * Service in the arma3SpotterApp.
 */

(function() {
  "use strict";

  angular
    .module("arma3SpotterApp")
    .factory("StorageService", StorageService);

  //StorageService.$inject = ["logger"];

  function StorageService() {
    // Service logic
    function getItem(key) {
      try {
        if (!key || key === "") {throw new Error("StorageService.getItem: Key is empty!");}
        var item = localStorage.getItem(key);
        if (!!item && item !== "") {

          var storageObject = JSON.parse(item);
          return storageObject.item;

        } else {
          return null;
        }
      } catch (err) {
        alert("setItem \n" + err.stack); 
      }
    }

    function setItem(key, item) {
      try {
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
      } catch (err) {
        alert("setItem \n" + err.stack); 
      }
    }

    // Public API here
    return {
      getItem: getItem,
      setItem: setItem
    };
  }

})();
