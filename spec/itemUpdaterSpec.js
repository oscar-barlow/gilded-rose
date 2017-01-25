describe("ItemUpdater", function() {
  var updater;
  var freshItem;
  var staleItem;

  function FreshItemSpy() {
    this.isPastSellIn = false;
    this.decreaseQualityArgs = 0;
  };

  FreshItemSpy.prototype = {
    decreaseQuality: function(number) {
      this.decreaseQualityArgs = number
    }
  };

  function StaleItemSpy() {
    this.isPastSellIn = true;
    this.decreaseQualityArgs = 0;
  }

  StaleItemSpy.prototype = {
    decreaseQuality: function(number) {
      this.decreaseQualityArgs = number
    }
  };

  beforeEach(function() {
    freshItem = new FreshItemSpy();
    updater = new ItemUpdater([freshItem]);
  });

  describe("#initialize", function() {

    it("should initialize with an array of items", function() {
      expect(updater.items()).toBeTruthy();
    });

  });

  describe("#updateSellIn", function() {

    it("should tell all items to decrease sell_in by one", function() {
      updater.updateSellIn();
      expect(freshItem.decreaseQualityArgs).toEqual(1);
    });

  });

});
