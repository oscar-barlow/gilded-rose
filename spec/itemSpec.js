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

    it("should not increase quality above 50", function() {
      item.increaseQuality(44);
      expect(item.quality).toEqual(50);
    });

  });

  describe("#descreaseQuality", function() {

    it("should decrease the item's quality", function() {
      item.decreaseQuality(2);
      expect(item.quality).toEqual(5);
    });

    it("should not decrease quality below zero", function() {
      item.decreaseQuality(8);
      expect(item.quality).toEqual(0);
    });

  });

  describe("#decreaseSellIn", function() {

    it("should decrease the sellby date of an item", function() {
      item.decreaseSellIn(1);
      expect(item.sell_in).toEqual(6);
    });

  });

  describe("#isPastSellIn", function() {

    it("should return true if sell_in is less than zero", function() {
      item.decreaseSellIn(8);
      expect(item.isPastSellIn()).toBeTruthy();
    });

  });

});
