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

  describe("#setItems", function() {

    it("should set the inventory's items to the input value", function() {
      var array = ["a", "b", "c"]
      inventory.setItems(array);
      expect(inventory.items()).toEqual(array);
    });

  });

});
