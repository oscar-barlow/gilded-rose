"use strict";

describe("Inventory", function() {
  var inventory;

  beforeEach(function() {
    inventory = new Inventory();
  });

  describe("#initialize", function() {

    it("should have an empty items array on initialization", function() {
      expect(inventory.items()).toEqual([]);
    });

  });

  describe("#add", function() {

    it("should be able to add items", function() {
      var item;
      inventory.add(item);
      expect(inventory.items()).toContain(item);
    });

  });

});
