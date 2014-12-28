"use strict";

/**
 * @ngdoc directive
 * @name arma3SpotterApp.directive:validdecimal
 * @description
 * # validDecimal
 */
angular
  .module("arma3SpotterApp")
  .directive("validDecimal", validDecimal);

function validDecimal() {
  var directive = {
    require: "?ngModel",
    restrict: "A",
    link: link
  };
  return directive;

  function link(scope, element, attrs, ngModelCtrl) {

    if(!ngModelCtrl) {
      return;
    }

    ngModelCtrl.$parsers.push(function(val) {
      if (angular.isUndefined(val)) {
        val = "";
      }

      var isClean = false;

      var floatValue = parseFloat(val);

      if (_.isNumber(floatValue) && !_.isNaN(floatValue)) {
        isClean = true;
      }

/*
      if (_.last(val) === ".") {
        floatValue = val;
      } else if (_.isNumber(floatValue) && !_.isNaN(floatValue)) {
        var max = parseFloat(attrs.max);
        var min = parseFloat(attrs.min);

        if (_.isNumber(min) && !_.isNaN(min) && _.isNumber(max) && !_.isNaN(max)) {
          if (floatValue < min) {
            floatValue = min;
          }
          if (floatValue > max) {
            floatValue = max;
          }
        }
      } else if (val === "-") {
        floatValue = "-";
      } else if (val === "") {
        floatValue = "";
      } else {
        floatValue = 0;
      }
*/



      var clean = floatValue.toString();

      if (val !== clean && !isClean ) {
        ngModelCtrl.$setViewValue(clean);
        ngModelCtrl.$render();
      }
      return clean;
    });
  }
}
