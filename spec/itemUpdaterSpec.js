describe("ItemUpdater", function() {
  var updater;
  var freshItem;
  var staleItem;

  beforeEach(function() {
    freshItem = jasmine.createSpyObj('freshItem', ['decreaseSellIn', 'decreaseQuality', 'isPastSellIn']);
    staleItem = jasmine.createSpyObj('staleItem', ['decreaseSellIn', 'decreaseQuality', 'isPastSellIn']);
    updater = new ItemUpdater([freshItem, staleItem]);
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

    it("should tell all items to decrease sell_in by one", function() {
      updater.updateSellIn();
      expect(freshItem.decreaseSellIn).toHaveBeenCalledWith(1);
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

  });

});
