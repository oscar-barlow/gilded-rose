"use strict";

describe("Inventory", function() {
  var inventory;

  beforeEach(function() {
    inventory = new Inventory();
  });

  describe("#initialize", function(){

    it("should have an empty items array on initialization", function() {
      expect(inventory.items()).toEqual([]);
    });

  });

});
