describe("Item", function() {
  var item;
  var legendaryItem;

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

  describe("#isLegendary", function() {

    it("should know when an item is legendary", function() {
      legendaryItem = new Item("A Legendary Item", 100, 100);
      expect(legendaryItem.isLegendary()).toBeTruthy();
    });

  });

  describe("#isAged", function() {

    it("should know when an item is Aged", function() {
      agedItem = new Item("An Aged Item", 7, 7);
      expect(agedItem.isAged()).toBeTruthy();
    });

  });

  describe("#isBackStagePass", function() {

    it("should know when an item is a backstage pass", function() {
      backstagePass = new Item("Backstage pass", 7, 7);
      expect(backstagePass.isBackStagePass()).toBeTruthy();
    });

  });

  describe("#isConjured", function() {

    it("should know when an item is conjured", function() {
      conjuredItem = new Item("Conjured Item", 7, 7);
      expect(conjuredItem.isConjured()).toBeTruthy();
    });

  });

  describe("#isOrdinary", function() {

    it("should know when an item is just a plain, ordinary item", function() {
      expect(item.isOrdinary()).toBeTruthy();
    });

  });

});
