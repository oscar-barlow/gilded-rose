describe("ItemUpdater", function() {
  var updater;
  var freshItem;
  var staleItem;
  var legendaryItem;
  var agedItem;
  var conjuredItem;
  var backstagePass;

  beforeEach(function() {
    methods = ['name','decreaseSellIn', 'decreaseQuality', 'increaseQuality', 'isPastSellIn', 'isLegendary', 'isAged', 'isConjured', 'isBackStagePass']
    freshItem = jasmine.createSpyObj('freshItem', methods);
    staleItem = jasmine.createSpyObj('staleItem', methods);
    legendaryItem = jasmine.createSpyObj('legendaryItem', methods);
    agedItem = jasmine.createSpyObj('agedItem', methods);
    conjuredItem = jasmine.createSpyObj('Conjured Item', methods);
    backstagePass = jasmine.createSpyObj('Backstage Pass', methods);

    legendaryItem.name.and.returnValue("A Legendary item");
    legendaryItem.isLegendary.and.returnValue(true);

    freshItem.name.and.returnValue("A Fresh item");

    staleItem.name.and.returnValue("A Stale item");
    staleItem.isPastSellIn.and.returnValue(true);

    agedItem.name.and.returnValue("An Aged item");
    agedItem.isAged.and.returnValue(true);

    conjuredItem.name.and.returnValue("A Conjured Item");
    conjuredItem.isConjured.and.returnValue(true);

    backstagePass.name.and.returnValue("Backstage pass");
    backstagePass.isBackStagePass.and.returnValue(true);

    updater = new ItemUpdater([freshItem, staleItem, legendaryItem, agedItem, conjuredItem, backstagePass]);
  });

  describe("#initialize", function() {

    it("should initialize with an array of items", function() {
      expect(updater.items()).toBeTruthy();
    });

  });

  describe("#setItems", function() {

    it("should set the updater's items to the input value", function() {
      var array = ["a", "b", "c"]
      updater.setItems(array);
      expect(updater.items()).toEqual(array);
    });

  });

  describe("#updateSellIn", function() {

    it("should tell all non-legendary items to decrease sell_in by one", function() {
      updater.updateSellIn();
      expect(freshItem.decreaseSellIn).toHaveBeenCalledWith(1);
    });

    it("should not decrease sell_in for legendary items", function() {
      updater.updateSellIn();
      expect(legendaryItem.decreaseSellIn).not.toHaveBeenCalled();
    });

  });

  describe("#updateQuality", function() {

    it("should tell fresh items to decrease quality by one", function() {
      updater.updateQuality();
      expect(freshItem.decreaseQuality).toHaveBeenCalledWith(1);
    });

    it("should tell items past their sell_in to decrease quality by 2", function() {
      updater.updateQuality();
      expect(staleItem.decreaseQuality).toHaveBeenCalledWith(2);
    });

    it("should not decrease quality of legendary items", function() {
      updater.updateQuality();
      expect(legendaryItem.decreaseQuality).not.toHaveBeenCalled();
    });

    it("should increase the quality of aged items", function() {
      updater.updateQuality();
      expect(agedItem.increaseQuality).toHaveBeenCalledWith(1);
    });

  });

});
