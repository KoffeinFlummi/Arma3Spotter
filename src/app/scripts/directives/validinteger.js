'use strict';

/**
 * @ngdoc directive
 * @name arma3SpotterApp.directive:validInteger
 * @description
 * # validInteger
 */
angular
  .module('arma3SpotterApp')
  .directive('validInteger', validInteger);

function validInteger() {
  var directive = {
    require: "?ngModel",
    restrict: 'A',
    link: link
  };
  return directive;

  function link(scope, element, attrs, ngModelCtrl) {

    if(!ngModelCtrl) {
      return;
    }

    ngModelCtrl.$parsers.push(function(val) {
      if (angular.isUndefined(val)) {
        var val = '';
      }

      var intValue = parseInt(val);

      if (_.isNumber(intValue) && !_.isNaN(intValue)) {
        var max = parseInt(attrs.max);
        var min = parseInt(attrs.min);

        if (_.isNumber(min) && !_.isNaN(min) && _.isNumber(max) && !_.isNaN(max)) {
          if (intValue < min) {
            intValue = min;
          }
          if (intValue > max) {
            intValue = max;
          }
        }
      } else if (val === "-") {
        intValue = "-";
      } else if (val === "") {
        intValue = "";
      } else {
        intValue = 0;
      }

      var clean = intValue.toString();

      if (val !== clean  ) {
        ngModelCtrl.$setViewValue(clean);
        ngModelCtrl.$render();
      }
      return clean;
    });
  }
}
