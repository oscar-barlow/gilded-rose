// updates items
function ItemUpdater(items) {
  this._items = items;
}

ItemUpdater.prototype.items = function() {
  return this._items;
};

ItemUpdater.prototype.updateSellIn = function() {
  this._items.forEach(function(element) {
    element.decreaseSellIn(1);
  });
};
