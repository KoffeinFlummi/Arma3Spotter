'use strict';

/**
 * @ngdoc service
 * @name arma3SpotterApp.logger
 * @description
 * # logger
 * Service in the arma3SpotterApp.
 */


(function() {
  "use strict";

  angular
    .module('arma3SpotterApp')
    .service('logger', logger);

  function logger() {
    return {
      logError: function(msg) {
        console.log(msg);
      }
    }
  }

})();
