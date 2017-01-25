describe("ItemUpdater", function() {
  var updater;
  var freshItem;
  var staleItem;
  var legendaryItem;

  beforeEach(function() {
    freshItem = jasmine.createSpyObj('freshItem', ['name','decreaseSellIn', 'decreaseQuality', 'isPastSellIn', 'isLegendary']);
    staleItem = jasmine.createSpyObj('staleItem', ['name','decreaseSellIn', 'decreaseQuality', 'isPastSellIn', 'isLegendary']);
    legendaryItem = jasmine.createSpyObj('legendaryItem', ['name','decreaseSellIn', 'decreaseQuality', 'isPastSellIn', 'isLegendary']);

    legendaryItem.name.and.returnValue("A Legendary item");
    legendaryItem.isLegendary.and.returnValue(true);

    freshItem.name.and.returnValue("A Fresh item");
    freshItem.isLegendary.and.returnValue(false);

    staleItem.name.and.returnValue("A Stale item");
    staleItem.isLegendary.and.returnValue(false);

    updater = new ItemUpdater([freshItem, staleItem, legendaryItem]);
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
      freshItem.isPastSellIn.and.returnValue(false);
      staleItem.isPastSellIn.and.returnValue(true);
      updater.updateQuality();
      expect(staleItem.decreaseQuality).toHaveBeenCalledWith(2);
    });

    it("should not decrease quality of legendary items", function() {
      updater.updateQuality();
      expect(legendaryItem.decreaseQuality).not.toHaveBeenCalled();
    });

  });

});
