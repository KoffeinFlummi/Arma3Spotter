'use strict';

/**
 * @ngdoc filter
 * @name arma3SpotterApp.filter:unique
 * @function
 * @description
 * # unique
 * Filter in the arma3SpotterApp.
 */

(function () {
  "use strict";

  angular
    .module('arma3SpotterApp')
    .filter('unique', function () {
      return function (input, key) {

        var uniqueList = _.uniq(input);

        return uniqueList;

      };
    });

})();
