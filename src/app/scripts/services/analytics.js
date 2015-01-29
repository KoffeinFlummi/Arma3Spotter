'use strict';

/**
 * @ngdoc service
 * @name arma3SpotterApp.analytics
 * @description
 * # analytics
 * Service in the arma3SpotterApp.
 */
/*
angular.module('arma3SpotterApp')
  .service('analytics', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
*/



(function() {
  "use strict";

  angular
    .module("arma3SpotterApp")
    .factory("Analytics", Analytics);

  //Analytics.$inject = ["$http"];

  //function Analytics($http) {
  function Analytics() {

    function trackEvent(category, action, label, value) {
      try {
        ga("send", "event", category, action, label, value);
      } catch(ex)  {}
    }

    function trackPageView(page) {
      // page => "/new-page"
      try {
        ga("send", "pageview", page);
      } catch(ex)  {}
    }


    return {
      trackEvent: trackEvent,
      trackPageView: trackPageView
    };
  }

})();
