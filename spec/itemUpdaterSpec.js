describe("ItemUpdater", function() {
  var updater;
  var freshItem;
  var staleItem;
  var legendaryItem;
  var agedItem;
  var freshConjuredItem;
  var staleConjuredItem;
  var earlybackstagePass;
  var latebackstagePass;
  var missedbackstagePass;

  beforeEach(function() {
    methods = ['name', 'sell_in', 'decreaseSellIn', 'decreaseQuality', 'increaseQuality', 'isPastSellIn', 'isLegendary', 'isAged', 'isConjured', 'isBackStagePass', 'isOrdinary']
    freshItem = jasmine.createSpyObj('freshItem', methods);
    staleItem = jasmine.createSpyObj('staleItem', methods);
    legendaryItem = jasmine.createSpyObj('legendaryItem', methods);
    agedItem = jasmine.createSpyObj('agedItem', methods);
    freshConjuredItem = jasmine.createSpyObj('Fresh Conjured Item', methods);
    staleConjuredItem = jasmine.createSpyObj('Stale Conjured Item', methods);
    earlybackstagePass = jasmine.createSpyObj('Early Backstage Pass', methods);
    latebackstagePass = jasmine.createSpyObj('Late Backstage Pass', methods);
    missedbackstagePass = jasmine.createSpyObj('Missed Backstage Pass', methods);

    legendaryItem.name.and.returnValue("A Legendary item");
    legendaryItem.isLegendary.and.returnValue(true);

    freshItem.name.and.returnValue("A Fresh item");
    freshItem.isOrdinary.and.returnValue(true);

    staleItem.name.and.returnValue("A Stale item");
    staleItem.isPastSellIn.and.returnValue(true);
    staleItem.isOrdinary.and.returnValue(true);

    agedItem.name.and.returnValue("An Aged item");
    agedItem.isAged.and.returnValue(true);

    freshConjuredItem.name.and.returnValue("A Conjured Item");
    freshConjuredItem.isConjured.and.returnValue(true);

    staleConjuredItem.name.and.returnValue("A Conjured Item");
    staleConjuredItem.isConjured.and.returnValue(true);
    staleConjuredItem.isPastSellIn.and.returnValue(true);

    earlybackstagePass.name.and.returnValue("Backstage pass with <10 && > 5 days to go");
    earlybackstagePass.isBackStagePass.and.returnValue(true);
    earlybackstagePass.sell_in.and.returnValue(7);

    latebackstagePass.name.and.returnValue("Backstage pass with < 5 days to go");
    latebackstagePass.isBackStagePass.and.returnValue(true);
    latebackstagePass.sell_in.and.returnValue(4);

    missedbackstagePass.name.and.returnValue("Backstage pass after the concert");
    missedbackstagePass.isBackStagePass.and.returnValue(true);
    staleItem.isPastSellIn.and.returnValue(true);

    updater = new ItemUpdater([freshItem, staleItem, legendaryItem, agedItem, conjuredItem, earlybackstagePass, latebackstagePass, missedbackstagePass]);
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

    beforeEach(function(){
      updater.updateSellIn();
    })

    it("should tell all non-legendary items to decrease sell_in by one", function() {
      expect(freshItem.decreaseSellIn).toHaveBeenCalledWith(1);
    });

    it("should not decrease sell_in for legendary items", function() {
      expect(legendaryItem.decreaseSellIn).not.toHaveBeenCalled();
    });

  });

  describe("#updateQuality", function() {

    beforeEach(function() {
      updater.updateQuality();
    });

    it("should tell fresh items to decrease quality by one", function() {
      expect(freshItem.decreaseQuality).toHaveBeenCalledWith(1);
    });

    it("should tell items past their sell_in to decrease quality by 2", function() {
      expect(staleItem.decreaseQuality).toHaveBeenCalledWith(2);
    });

    it("should not decrease quality of legendary items", function() {
      expect(legendaryItem.decreaseQuality).not.toHaveBeenCalled();
    });

    it("should increase the quality of aged items", function() {
      expect(agedItem.increaseQuality).toHaveBeenCalledWith(1);
    });

    it("should increase the quality of backstage passes with <10 && > 5 days to go by 2", function() {
      expect(earlybackstagePass.increaseQuality).toHaveBeenCalledWith(2);
    });

    it("should increase the quality of backstage passes with <10 && > 5 days to go by 2", function() {
      expect(latebackstagePass.increaseQuality).toHaveBeenCalledWith(3);
    });

  });

});
