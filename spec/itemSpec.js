describe("Item", function() {
  var item

  beforeEach(function(){
    item = new Item("An Item", 7, 7)
  });

  describe("#increaseQuality", function() {

    it("should increase the item's quality", function() {
      item.increaseQuality(3);
      expect(item.quality).toEqual(10);
    });

  });

  describe("#descreaseQuality", function() {

    it("should decrease the item's quality", function() {
      item.decreaseQuality(2);
      expect(item.quality).toEqual(5);
    });

  });

  describe("#decreaseSellIn", function() {

    it("should decrease the sellby date of an item", function() {
      item.decreaseSellIn(1);
      expect(item.sell_in).toEqual(6);
    });

  });

});

// functions for setting and getting name, quality, sell_in
