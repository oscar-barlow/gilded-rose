// updates items
function ItemUpdater(items) {
  this._items = items;
}

ItemUpdater.prototype.items = function() {
  return this._items;
};

ItemUpdater.prototype.setItems = function(array) {
  this._items = array;
};

ItemUpdater.prototype.updateSellIn = function() {
  this._items.forEach(function(element) {
    element.decreaseSellIn(1);
  });
};

ItemUpdater.prototype.decreaseQuality = function() {
  this._items.forEach(function(element) {
    if (element.isPastSellIn()) {
      element.decreaseQuality(2);
    } else {
      element.decreaseQuality(1)
    };
  });
};
