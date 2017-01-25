describe("ItemUpdater", function() {
  var updater;
  var freshItem, staleItem = null;

  beforeEach(function() {
    freshItem = {
      decreaseSellIn: function() {};
    }
    updater = new ItemUpdater([freshItem, staleItem]);
  });

  describe("#initialize", function() {

    it("should initialize with an array of items", function() {
      expect(updater.items()).toBeTruthy();
    });

  });

  describe("#updateSellIn", function() {

    it("should tell all items to decrease sell_in by one", function() {
      spyOn(freshItem, 'decreaseSellIn');
      updater.updateSellIn();
      expect(freshItem.decreaseSellIn).toHaveBeenCalledWith(1);
    });

  });

});
