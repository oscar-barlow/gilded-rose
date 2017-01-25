// updates items
function ItemUpdater(items) {
  this._items = items;
}

ItemUpdater.prototype.items = function() {
  return this._items;
};

ItemUpdater.prototype.run = function() {
  this.setItems(this.updateSellIn());
  this.setItems(this.updateQuality());
  return this.items();
};

ItemUpdater.prototype.setItems = function(array) {
  this._items = array;
};

ItemUpdater.prototype.updateSellIn = function() {
  var updatedItems = []
  this.items().forEach(function(element) {
    if (element.isLegendary()) {
      updatedItems.push(element);
    } else {
      element.decreaseSellIn(1);
      updatedItems.push(element);
    };
  });
  return updatedItems;
};

ItemUpdater.prototype.updateQuality = function() {
  var updatedItems = []
  this.items().forEach(function(element) {
    if (element.isPastSellIn()) {
      element.decreaseQuality(2);
      updatedItems.push(element);
    } else {
      element.decreaseQuality(1)
      updatedItems.push(element);
    };
  });
  return updatedItems;
};
