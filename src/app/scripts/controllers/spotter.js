/**
 * @ngdoc function
 * @name arma3SpotterApp.controller:SpotterCtrl
 * @description
 * # SpotterCtrl
 * Controller of the arma3SpotterApp
 */

(function () {
  "use strict";

  angular.module("arma3SpotterApp")
    .controller("SpotterCtrl", Spotter);

  Spotter.$inject = ["Data", "logger"];

  function Spotter(Data, logger) {
    var vm = this;

    vm.activeAmmo = {};
    vm.activeWeapon = {};
    vm.angle = 0;
    vm.calculate = calculate;
    vm.crosswind = 0;
    vm.Data = Data;
    vm.distance = 1000;
    vm.headwind = 0;
    vm.temperature = 30;
    vm.resultHorizontal = 0;
    vm.resultVertical = 0;

    init();

    function init() {
      vm.activeAmmo = vm.Data.getActiveAmmo();
      vm.activeWeapon = vm.Data.getActiveWeapon();
      if (!vm.activeAmmo) { logger.logError("activeAmmo not set. No weapon has been selected."); }
      if (!vm.activeWeapon) { logger.logError("activeWeapon not set. No weapon has been selected."); }
    }

    function calculate() {

      if (!vm.activeAmmo) {
        alert("No weapon has been selected. Please navigate to 'Settings' and select a weapon.");
        return;
      }

      var ammo = vm.Data.getActiveAmmo();

      var distance = Math.min(Math.max(parseInt(vm.distance), 1), 3000);
      var angle = Math.min(Math.max(parseInt(vm.angle), -45), 45);
      var windHead = Math.min(Math.max(parseFloat(vm.headwind), -15), 15);
      var windCross = Math.min(Math.max(parseFloat(vm.crosswind), -15), 15);
      var temperature = Math.min(Math.max(parseFloat(vm.temperature), -50), 50);

      // target is unreachable, exit.
      var trace = traceBullet(ammo, distance, angle, windHead, windCross, 45);
      if (trace[0] < 0) {
        vm.resultHorizontal = 0;
        vm.resultVertical = 0;
        return;
      }

      var angle1 = angle;
      var angle2 = 45; // max elevation
      trace = traceBullet(ammo, distance, angle, windHead, windCross, temperature, angle1);
      var f1 = trace[0];
      var f2;
      var fr = trace[1];
      var temp;

      while (Math.abs(f1) > 0.1) {
        trace = traceBullet(ammo, distance, angle, windHead, windCross, temperature, angle2);
        f2 = trace[0];
        fr = trace[1];
        temp = angle2 - f2 * (angle2 - angle1) / (f2 - f1);
        angle1 = angle2;
        angle2 = temp;
        f1 = f2;
      }

      try {
        var vertical = (angle1 - angle) * 17.77777;
        vertical = Math.round(vertical * 10) / 10;
        if (isNaN(vertical)) {
          throw "HairOnFire";
        }
        vm.resultVertical = vertical;
      } catch (err) {
        vm.resultVertical = 0;
      }

      try {
        var horizontal = Math.atan(fr / distance) * (180 / Math.PI) * 17.77777;
        horizontal = Math.round(horizontal * 10) / 10;
        if (isNaN(horizontal)) {
          throw "HairOnFire";
        }
        vm.resultHorizontal = horizontal;
      } catch (err) {
        vm.resultHorizontal = 0;
      }
    }

    function vectorMagnitude(vector) {
      return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2) + Math.pow(vector[2], 2));
    }

    function vectorAdd(vector1, vector2) {
      return [
        vector1[0] + vector2[0],
        vector1[1] + vector2[1],
        vector1[2] + vector2[2]
      ];
    }

    function vectorMultiply(vector, scalar) {
      return [
        vector[0] * scalar,
        vector[1] * scalar,
        vector[2] * scalar
      ];
    }

    function traceBullet(caliber, distance, angleTarget, windHead, windCross, temperature, angle) {
      var initSpeed = caliber.initSpeed;
      var airFriction = caliber.airFriction;
      var timeToLive = caliber.timeToLive;
      var simulationStep = caliber.simulationStep;

      var density = (273.15 + 20) / (273.15 + temperature);

      // convert degrees to radians
      angle *= (Math.PI / 180);
      angleTarget *= (Math.PI / 180);

      // invert head wind
      windHead *= -1;

      // construct 2D location of target.
      var posTarget = [Math.cos(angleTarget) * distance, Math.sin(angleTarget) * distance, 0];
      var pos = [0,0,0];
      var additional = initSpeed * ((((temperature + 273.13) / 288.13 - 1) / 2.5 + 1 ) - 1);
      var velocity = [
        Math.cos(angle) * (initSpeed + additional),
        Math.sin(angle) * (initSpeed + additional),
        0
      ];

      // Increase simulationStep to make overshooting less of an issue.
      simulationStep = Math.min(simulationStep, 0.001);

      // follow path of bullet
      var its = Math.floor(timeToLive / simulationStep);
      for (var i = 0; i < its; i++) {
        var velMag = vectorMagnitude(velocity);

        // regular A3 ballistics
        velocity[0] += simulationStep * (velocity[0] * velMag * airFriction);
        velocity[1] += simulationStep * (velocity[1] * velMag * airFriction - 9.81);
        velocity[2] += simulationStep * (velocity[2] * velMag * airFriction);

        // wind & density effects
        velocity = vectorAdd(
          vectorAdd(
            velocity,
            vectorMultiply(
              velocity,
              velMag * (density - 1) * airFriction * simulationStep
            )
          ),
          vectorMultiply(
            [windHead, 0, windCross],
            vectorMagnitude(
              vectorAdd(
                velocity,
                [windHead, 0, windCross]
              )
            ) * -1 * airFriction * simulationStep
          )
        );

        pos = vectorAdd(pos, vectorMultiply(velocity, simulationStep));

        // bullet passed the target distance
        if (pos[0] >= posTarget[0]) {
          break;
        }
      }

      return [pos[1] - posTarget[1], pos[2]];
    }

  }

})();
