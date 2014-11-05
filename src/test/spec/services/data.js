"use strict";

describe("Service: Data", function () {

  // load the service"s module
  beforeEach(module("arma3SpotterApp"));

  // instantiate service
  var Data;
  beforeEach(inject(function (_Data_) {
    Data = _Data_;
  }));

  var testObj = {name: "test"};

  it("should get and set the active weapon", function () {
    Data.setActiveWeapon(testObj);
    expect(JSON.stringify(Data.getActiveWeapon())).toBe(JSON.stringify(testObj));
  });

  it("should get and set the active ammo", function () {
    Data.setActiveAmmo(testObj);
    expect(JSON.stringify(Data.getActiveAmmo())).toBe(JSON.stringify(testObj));
  });

});
