describe("ItemUpdater", function() {
  var updater;
  var freshItem;
  var staleItem;

  function FreshItemSpy() {
    this.isPastSellIn = false;
    this.decreaseSellInArgs = 0;
  };

  FreshItemSpy.prototype = {
    decreaseSellIn: function(number) {
      this.decreaseSellInArgs = number
    }
  };

  function StaleItemSpy() {
    this.isPastSellIn = false;
    this.decreaseSellInArgs = 0;
  };

  StaleItemSpy.prototype = {
    decreaseSellIn: function(number) {
      this.decreaseSellInArgs = number
    }
  };

  beforeEach(function() {
    freshItem = new FreshItemSpy();
    staleItem = new StaleItemSpy();
    updater = new ItemUpdater([freshItem, staleItem]);
  });

  describe("#initialize", function() {

    it("should initialize with an array of items", function() {
      expect(updater.items()).toBeTruthy();
    });

  });

  describe("#updateSellIn", function() {

    it("should tell all items to decrease sell_in by one", function() {
      updater.updateSellIn();
      expect(freshItem.decreaseSellInArgs).toEqual(1);
    });

  });

});
