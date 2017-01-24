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

  describe("#createItem", function() {

    it("should be able to create new items", function() {
      var item = inventory.createItem("An Item", 1, 1);
      expect(item.name).toBe("An Item");
    });

  });

});
